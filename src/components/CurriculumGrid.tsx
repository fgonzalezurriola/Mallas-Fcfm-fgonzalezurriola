import React, { useState, useCallback } from 'react';
import Course from './Course';
import { courses } from '../data/courses';
import { toRoman } from '../utils/romanNumerals';

const TOTAL_SEMESTERS = 11;

const CurriculumGrid: React.FC = () => {
  const [selectedCourseIds, setSelectedCourseIds] = useState<Set<string>>(new Set());
  const [blackCourseIds, setBlackCourseIds] = useState<Set<string>>(new Set());
  const [hoveredCourseId, setHoveredCourseId] = useState<string | null>(null);

  const getPrerequisiteIds = useCallback((courseId: string): string[] => {
    const course = courses.find((c) => c.id === courseId);
    if (!course) return [];
    return course.prerequisites;
  }, []);

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
    <div className="p-2 min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold text-center mb-6">Malla Ingeniería Civil en Computación</h1>
      <div className="flex gap-4 overflow-x-scroll pb-6">
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
                    onMouseEnter={setHoveredCourseId}
                    onMouseLeave={() => setHoveredCourseId(null)}
                    onClick={handleCourseClick}
                    onRightClick={handleCourseRightClick}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurriculumGrid;