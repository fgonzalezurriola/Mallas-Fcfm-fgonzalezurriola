import React, { useState, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Course from './Course';
import BackButton from './BackButton';
import { computationCourses } from '../data/computationCourses.ts';
import { electricalCourses } from '../data/electricalCourses.ts';
import { toRoman } from '../utils/romanNumerals';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TOTAL_SEMESTERS = 11;

const CurriculumGrid: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Determinar qué cursos cargar basado en la ruta
  const courses = currentPath.includes('computacion') ? computationCourses : electricalCourses;
  const curriculumName = currentPath.includes('computacion') 
    ? 'Ingeniería Civil en Computación' 
    : 'Ingeniería Civil Eléctrica';

  const [selectedCourseIds, setSelectedCourseIds] = useState<Set<string>>(new Set());
  const [blackCourseIds, setBlackCourseIds] = useState<Set<string>>(new Set());
  const [hoveredCourseId, setHoveredCourseId] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -400,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth',
      });
    }
  };

  const getPrerequisiteIds = useCallback((courseId: string): string[] => {
    const course = courses.find((c) => c.id === courseId);
    if (!course) return [];
    return course.prerequisites;
  }, [courses]);

  const isPrerequisite = useCallback(
    (courseId: string): boolean => {
      if (!hoveredCourseId && selectedCourseIds.size === 0) return false;
      if (hoveredCourseId) {
        return getPrerequisiteIds(hoveredCourseId).includes(courseId);
      }
      return Array.from(selectedCourseIds).some(selectedId =>
        getPrerequisiteIds(selectedId).includes(courseId)
      );
    },
    [selectedCourseIds, hoveredCourseId, getPrerequisiteIds]
  );

  const handleCourseClick = (courseId: string) => {
    setSelectedCourseIds(prev => {
      const newSelection = new Set(prev);
      if (prev.has(courseId)) {
        newSelection.delete(courseId);
      } else {
        newSelection.add(courseId);
      }
      return newSelection;
    });
  };

  const handleCourseRightClick = (courseId: string) => {
    setBlackCourseIds(prev => {
      const newBlackCourses = new Set(prev);
      if (prev.has(courseId)) {
        newBlackCourses.delete(courseId);
      } else {
        newBlackCourses.add(courseId);
      }
      return newBlackCourses;
    });
  };

  const isSemesterAllBlack = (semester: number): boolean => {
    const semesterCourses = courses.filter(course => course.semester === semester);
    return semesterCourses.length > 0 && semesterCourses.every(course => blackCourseIds.has(course.id));
  };

  const semesters = Array.from({ length: TOTAL_SEMESTERS }, (_, i) => i + 1);

  return (
    <div className="p-0 min-h-screen bg-gray-50">
      <BackButton />
      <h1 className="text-2xl font-bold text-center mb-2 pt-4">Malla {curriculumName}</h1>
      
      <div className="flex items-center gap-2">
        <button onClick={scrollLeft} className="p-2 py-32 mx-2 bg-gray-300 rounded-xl hover:bg-gray-400">
          <FaArrowLeft />
        </button>
        
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-scroll scrollbar-hidden pb-6"
          style={{ scrollBehavior: 'smooth' }}
        >
          {semesters.map((semester) => (
            <div key={semester} className="flex-none">
              <div className={`
                ${isSemesterAllBlack(semester) ? 'bg-black' : 'bg-blue-600'}
                text-white px-3 py-1.5 rounded-t-lg text-center mb-2 text-sm font-medium
                transition-colors duration-200 ease-in-out
              `}>
                Semestre {toRoman(semester)}
              </div>
              <div className="flex flex-col gap-3">
                {courses
                  .filter((course) => course.semester === semester)
                  .map((course) => (
                    <Course
                      key={course.id}
                      {...course}
                      isPrerequisite={isPrerequisite(course.id)}
                      isSelected={selectedCourseIds.has(course.id)}
                      isBlack={blackCourseIds.has(course.id)}
                      isHovered={hoveredCourseId === course.id}
                      color={course.color}
                      onMouseEnter={() => setHoveredCourseId(course.id)}
                      onMouseLeave={() => setHoveredCourseId(null)}
                      onClick={handleCourseClick}
                      onRightClick={handleCourseRightClick}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>

        <button onClick={scrollRight} className="p-2 py-32 mx-2 bg-gray-300 rounded-xl hover:bg-gray-400">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CurriculumGrid;