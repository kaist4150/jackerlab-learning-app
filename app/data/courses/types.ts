export type ContentBlock =
  | { type: 'heading'; text: string }
  | { type: 'text'; text: string }
  | { type: 'code'; language: string; code: string }
  | { type: 'list'; items: string[] }
  | { type: 'tip'; text: string };

export type Lesson = {
  slug: string;
  title: string;
  duration: string;
  content: ContentBlock[];
};

export type Course = {
  slug: string;
  title: string;
  description: string;
  category: string;
  color: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  objectives: string[];
  lessons: Lesson[];
};

export const CATEGORIES = [
  { id: 'web', label: '웹 개발' },
  { id: 'programming', label: '프로그래밍' },
  { id: 'visualization', label: '시각화' },
  { id: 'creative', label: '크리에이티브' },
  { id: 'ai', label: 'AI/ML' },
  { id: 'other', label: '기타' },
] as const;

export const DIFFICULTY_LABELS: Record<Course['difficulty'], string> = {
  beginner: '입문',
  intermediate: '중급',
  advanced: '고급',
};
