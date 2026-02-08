export type { ContentBlock, Lesson, Course } from './types';
export { CATEGORIES, DIFFICULTY_LABELS } from './types';

import { webCourses } from './web';
import { programmingCourses } from './programming';
import { visualizationCourses } from './visualization';
import { creativeCourses } from './creative';
import { aiCourses } from './ai';
import { otherCourses } from './other';
import { CATEGORIES } from './types';
import type { Course } from './types';

export const courses: Course[] = [
  ...webCourses,
  ...programmingCourses,
  ...visualizationCourses,
  ...creativeCourses,
  ...aiCourses,
  ...otherCourses,
];

export function getCourse(slug: string): Course | undefined {
  return courses.find(c => c.slug === slug);
}

export function getLesson(courseSlug: string, lessonSlug: string) {
  const course = getCourse(courseSlug);
  if (!course) return null;
  const lessonIndex = course.lessons.findIndex(l => l.slug === lessonSlug);
  if (lessonIndex === -1) return null;
  return {
    lesson: course.lessons[lessonIndex],
    course,
    prevLesson: course.lessons[lessonIndex - 1] || null,
    nextLesson: course.lessons[lessonIndex + 1] || null,
    lessonNumber: lessonIndex + 1,
    totalLessons: course.lessons.length,
  };
}

export function getCoursesByCategory() {
  return CATEGORIES.map(cat => ({
    ...cat,
    courses: courses.filter(c => c.category === cat.id),
  }));
}
