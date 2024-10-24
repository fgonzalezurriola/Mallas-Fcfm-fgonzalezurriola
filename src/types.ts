export interface Course {
  id: string;
  name: string;
  credits: number;
  color: string;
  prerequisites: string[];
  semester: number;
}

export interface CourseState {
  selectedCourseIds: Set<string>;
  blackCourseIds: Set<string>;
  hoveredCourseId: string | null;
}