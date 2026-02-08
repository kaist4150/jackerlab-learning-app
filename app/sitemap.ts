import { MetadataRoute } from 'next';
import { courses } from '@/app/data/courses';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://learning.jackerlab.com';
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },
  ];

  const coursePages: MetadataRoute.Sitemap = courses.map(course => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const lessonPages: MetadataRoute.Sitemap = courses.flatMap(course =>
    course.lessons.map(lesson => ({
      url: `${baseUrl}/courses/${course.slug}/${lesson.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  );

  return [...staticPages, ...coursePages, ...lessonPages];
}
