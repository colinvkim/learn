import { getCollection, type CollectionEntry } from "astro:content";

export type CourseEntry = CollectionEntry<"courses">;
export type LessonEntry = CollectionEntry<"lessons">;

export type CourseSummary = {
  course: CourseEntry;
  lessonCount: number;
  firstLesson?: LessonEntry;
};

export type LessonContext = {
  course: CourseEntry;
  lesson: LessonEntry;
  lessons: LessonEntry[];
  previousLesson?: LessonEntry;
  nextLesson?: LessonEntry;
};

function compareCourses(a: CourseEntry, b: CourseEntry) {
  return a.data.sortOrder - b.data.sortOrder || a.data.title.localeCompare(b.data.title);
}

function compareLessons(a: LessonEntry, b: LessonEntry) {
  return a.data.order - b.data.order || a.data.title.localeCompare(b.data.title);
}

function parseLessonId(entry: LessonEntry) {
  const segments = entry.id.split("/");

  if (segments.length !== 2 || !segments[0] || !segments[1]) {
    throw new Error(
      `Lesson "${entry.id}" must live at src/content/lessons/<course>/<lesson>.md to match the route structure.`,
    );
  }

  return {
    courseSlug: segments[0],
    lessonSlug: segments[1],
  };
}

function groupLessonsByCourse(lessons: LessonEntry[]) {
  const lessonsByCourse = new Map<string, LessonEntry[]>();

  for (const lesson of lessons) {
    const courseLessons = lessonsByCourse.get(lesson.data.course.id) ?? [];
    courseLessons.push(lesson);
    lessonsByCourse.set(lesson.data.course.id, courseLessons);
  }

  return lessonsByCourse;
}

export function getCourseHref(courseId: string) {
  return `/courses/${courseId}`;
}

export function getLessonSlug(entry: LessonEntry) {
  return parseLessonId(entry).lessonSlug;
}

export function getLessonHref(courseId: string, lessonSlug: string) {
  return `${getCourseHref(courseId)}/${lessonSlug}`;
}

export async function getPublishedCourses() {
  const courses = await getCollection("courses", ({ data }) => data.status === "published");
  return courses.sort(compareCourses);
}

export async function getPublishedLessons() {
  const lessons = await getCollection("lessons", ({ data }) => data.status === "published");

  for (const lesson of lessons) {
    const { courseSlug } = parseLessonId(lesson);

    if (courseSlug !== lesson.data.course.id) {
      throw new Error(
        `Lesson "${lesson.id}" must be stored inside a directory matching its course reference "${lesson.data.course.id}".`,
      );
    }
  }

  return lessons.sort(compareLessons);
}

export async function getPublishedCourseSummaries() {
  const [courses, lessons] = await Promise.all([getPublishedCourses(), getPublishedLessons()]);
  const lessonsByCourse = groupLessonsByCourse(lessons);

  return courses.map((course) => ({
    course,
    lessonCount: lessonsByCourse.get(course.id)?.length ?? 0,
    firstLesson: lessonsByCourse.get(course.id)?.[0],
  }));
}

export async function getPublishedCourseBySlug(courseId: string) {
  const courses = await getPublishedCourses();
  return courses.find((course) => course.id === courseId);
}

export async function getPublishedLessonsForCourse(courseId: string) {
  const lessons = await getPublishedLessons();
  return groupLessonsByCourse(lessons).get(courseId) ?? [];
}

export async function getLessonContext(courseId: string, lessonSlug: string): Promise<LessonContext | undefined> {
  const [course, lessons] = await Promise.all([getPublishedCourseBySlug(courseId), getPublishedLessonsForCourse(courseId)]);

  if (!course) {
    return undefined;
  }

  const lessonIndex = lessons.findIndex((lesson) => getLessonSlug(lesson) === lessonSlug);

  if (lessonIndex === -1) {
    return undefined;
  }

  return {
    course,
    lesson: lessons[lessonIndex],
    lessons,
    previousLesson: lessons[lessonIndex - 1],
    nextLesson: lessons[lessonIndex + 1],
  };
}
