import Link from 'next/link';
import { getCoursesByCategory, DIFFICULTY_LABELS } from './data/courses';

export default function HomePage() {
  const categorized = getCoursesByCategory();

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">학습 과정</h1>
        <p className="text-gray-500">
          단계별 튜토리얼로 프로그래밍과 웹 개발을 배워보세요.
        </p>
      </div>

      {/* Course Categories */}
      <div className="space-y-10">
        {categorized.map((group) => (
          <section key={group.id}>
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              {group.label}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {group.courses.map((course) => {
                const totalDuration = course.lessons.reduce((acc, l) => {
                  const mins = parseInt(l.duration);
                  return acc + (isNaN(mins) ? 0 : mins);
                }, 0);

                return (
                  <Link
                    key={course.slug}
                    href={`/courses/${course.slug}`}
                    className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className={`w-3 h-3 rounded-full ${course.color} shrink-0 mt-1`} />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {course.description}
                        </p>
                        <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
                          <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                            {DIFFICULTY_LABELS[course.difficulty]}
                          </span>
                          <span>{course.lessons.length}개 레슨</span>
                          <span>약 {totalDuration}분</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
