import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCourse, DIFFICULTY_LABELS } from '@/app/data/courses';

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);

  if (!course) notFound();

  const totalDuration = course.lessons.reduce((acc, l) => {
    const mins = parseInt(l.duration);
    return acc + (isNaN(mins) ? 0 : mins);
  }, 0);

  return (
    <div className="max-w-3xl mx-auto">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600 transition-colors">학습 과정</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{course.title}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className={`w-3 h-3 rounded-full ${course.color}`} />
          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
            {DIFFICULTY_LABELS[course.difficulty]}
          </span>
          <span className="text-xs text-gray-400">
            {course.lessons.length}개 레슨 · 약 {totalDuration}분
          </span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h1>
        <p className="text-gray-500">{course.description}</p>
      </div>

      {/* Objectives */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
        <h2 className="font-semibold text-green-800 mb-3">이 과정에서 배우는 것</h2>
        <ul className="space-y-2">
          {course.objectives.map((obj, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-green-700">
              <span className="text-green-500 mt-0.5">✓</span>
              {obj}
            </li>
          ))}
        </ul>
      </div>

      {/* Lessons */}
      <div>
        <h2 className="font-semibold text-gray-900 mb-4">레슨 목록</h2>
        <div className="space-y-2">
          {course.lessons.map((lesson, index) => (
            <Link
              key={lesson.slug}
              href={`/courses/${course.slug}/${lesson.slug}`}
              className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <span className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-green-100 text-gray-500 group-hover:text-green-600 flex items-center justify-center text-sm font-medium transition-colors">
                {index + 1}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                  {lesson.title}
                </h3>
              </div>
              <span className="text-xs text-gray-400 shrink-0">{lesson.duration}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
