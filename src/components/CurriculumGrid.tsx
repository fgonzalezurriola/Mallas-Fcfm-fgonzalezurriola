import React, { useState, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Course from './Course';
import BackButton from './BackButton';
import { computationCourses } from '../data/computationCourses.ts';
import { electricalCourses } from '../data/electricalCourses.ts';
import { industrialCourses } from '../data/industrialCourses.ts';
import { mechanicalCourses } from '../data/mechanicalCourses.ts';
import { physicsCourses } from '../data/physicsCourses.ts';
import { astronomyCourses } from '../data/astronomyCourses.ts';
import { chemistryCourses } from '../data/chemistryCourses.ts';
import { civilmention1Courses } from '../data/civilmention1Courses.ts';
import { civilmention2Courses } from '../data/civilmention2Courses.ts';
import { civilmention3Courses } from '../data/civilmention3Courses.ts';
import { mathematicalCourses } from '../data/mathematicalCourses.ts';
import { geologyCourses } from '../data/geologyCourses.ts';
import { geophysicsCourses } from '../data/geophysicsCourses.ts';


import { placeholderCourses } from '../data/placeHolderCourses.ts';
import { toRoman } from '../utils/romanNumerals';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TOTAL_SEMESTERS = 11;

const CurriculumGrid: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  let curriculumName = '';
  let courses = placeholderCourses;
  if (currentPath.includes('computacion')) {
    courses = computationCourses;
    curriculumName = 'Ingeniería Civil en Computación'
  } else if (currentPath.includes('electrica')) {
    courses = electricalCourses;
    curriculumName = 'Ingeniería Civil Eléctrica'
  } else if (currentPath.includes('industrial')) {
    courses = industrialCourses;
    curriculumName = 'Ingeniería Civil Industrial'
  } else if (currentPath.includes('mecanica')) {
    courses = mechanicalCourses;
    curriculumName = 'Ingeniería Civil Mecánica'
  } else if (currentPath.includes('fisica')) {
    courses = physicsCourses;
    curriculumName = 'Ingeniería Civil Física'
  } else if (currentPath.includes('astronomia')) {
    courses = astronomyCourses;
    curriculumName = 'Licenciatura en Ciencias Mención Astronomía'
  } else if (currentPath.includes('quimica')) {
    courses = chemistryCourses;
    curriculumName = 'Ingeniería Civil Química'
  } else if (currentPath.includes('civil1')) {
    courses = civilmention1Courses;
    curriculumName = 'Ingeniería Civil1'
  } else if (currentPath.includes('civil2')) {
    courses = civilmention2Courses;
    curriculumName = 'Ingeniería Civil2'
  } else if (currentPath.includes('civil3')) {
    courses = civilmention3Courses;
    curriculumName = 'Ingeniería Civil3'
  } else if (currentPath.includes('matematica')) {
    courses = mathematicalCourses;
    curriculumName = 'Ingeniería Civil en Matemáticas'
  } else if (currentPath.includes('geologia')) {
    courses = geologyCourses;
    curriculumName = 'Geología'
  } else if (currentPath.includes('geofisica')) {
    courses = geophysicsCourses;
    curriculumName = 'Licenciatura en Ciencias Mención Geofísica'
  } else {
    courses = placeholderCourses;
  }


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

        <button onClick={scrollRight} className="right-4 p-2 py-32 mx-2 bg-gray-300 rounded-xl hover:bg-gray-400">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CurriculumGrid;