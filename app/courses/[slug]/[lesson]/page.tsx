import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLesson } from '@/app/data/courses';
import type { ContentBlock } from '@/app/data/courses';

function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'heading':
            return (
              <h2 key={i} className="text-lg font-semibold text-gray-900 mt-8 mb-3 first:mt-0">
                {block.text}
              </h2>
            );
          case 'text':
            return (
              <p key={i} className="text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: block.text.replace(
                    /`([^`]+)`/g,
                    '<code class="px-1.5 py-0.5 bg-gray-100 rounded text-sm font-mono text-gray-800">$1</code>'
                  ),
                }}
              />
            );
          case 'code':
            return (
              <div key={i} className="rounded-xl overflow-hidden border border-gray-200">
                <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200">
                  <span className="text-xs text-gray-500 font-mono">{block.language}</span>
                </div>
                <pre className="p-4 overflow-x-auto bg-gray-900 text-gray-100 text-sm leading-relaxed">
                  <code>{block.code}</code>
                </pre>
              </div>
            );
          case 'list':
            return (
              <ul key={i} className="space-y-1.5 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-gray-600 text-sm"
                    dangerouslySetInnerHTML={{
                      __html: `<span class="text-gray-400 mt-1 shrink-0">•</span><span>${item.replace(
                        /`([^`]+)`/g,
                        '<code class="px-1 py-0.5 bg-gray-100 rounded text-xs font-mono text-gray-800">$1</code>'
                      )}</span>`,
                    }}
                  />
                ))}
              </ul>
            );
          case 'tip':
            return (
              <div key={i} className="flex gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <span className="text-blue-500 shrink-0 mt-0.5">💡</span>
                <p className="text-sm text-blue-700"
                  dangerouslySetInnerHTML={{
                    __html: block.text.replace(
                      /`([^`]+)`/g,
                      '<code class="px-1 py-0.5 bg-blue-100 rounded text-xs font-mono text-blue-800">$1</code>'
                    ),
                  }}
                />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string; lesson: string }>;
}) {
  const { slug, lesson: lessonSlug } = await params;
  const data = getLesson(slug, lessonSlug);

  if (!data) notFound();

  const { lesson, course, prevLesson, nextLesson, lessonNumber, totalLessons } = data;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600 transition-colors">학습 과정</Link>
        <span className="mx-2">/</span>
        <Link href={`/courses/${course.slug}`} className="hover:text-gray-600 transition-colors">
          {course.title}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{lesson.title}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2 text-sm text-gray-400">
          <span className={`w-2 h-2 rounded-full ${course.color}`} />
          <span>레슨 {lessonNumber} / {totalLessons}</span>
          <span>·</span>
          <span>{lesson.duration}</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">{lesson.title}</h1>
      </div>

      {/* Content */}
      <div className="mb-12">
        <ContentRenderer blocks={lesson.content} />
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between py-6 border-t border-gray-200">
        {prevLesson ? (
          <Link
            href={`/courses/${course.slug}/${prevLesson.slug}`}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 transition-colors"
          >
            <span>←</span>
            <span>{prevLesson.title}</span>
          </Link>
        ) : (
          <Link
            href={`/courses/${course.slug}`}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 transition-colors"
          >
            <span>←</span>
            <span>과정 목록</span>
          </Link>
        )}
        {nextLesson ? (
          <Link
            href={`/courses/${course.slug}/${nextLesson.slug}`}
            className="flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
          >
            <span>다음: {nextLesson.title}</span>
            <span>→</span>
          </Link>
        ) : (
          <Link
            href={`/courses/${course.slug}`}
            className="flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
          >
            <span>과정 완료!</span>
            <span>→</span>
          </Link>
        )}
      </div>
    </div>
  );
}
