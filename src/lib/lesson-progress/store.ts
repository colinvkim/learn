export const LESSON_PROGRESS_STORAGE_KEY = "learn:lesson-progress";

export const LESSON_STATUS_VALUES = [
  "not-started",
  "in-progress",
  "completed",
] as const;

export type LessonStatus = (typeof LESSON_STATUS_VALUES)[number];

export interface QuizProgressRecord {
  attempts: number;
  completedAt: string | null;
}

export interface LessonProgressRecord {
  status: LessonStatus;
  updatedAt: string;
  quizzes: Record<string, QuizProgressRecord>;
}

export interface LessonProgressState {
  version: 1;
  lessons: Record<string, LessonProgressRecord>;
}

export interface LessonProgressSummary {
  status: LessonStatus;
  quizCount: number;
  completedQuizCount: number;
  hasActivity: boolean;
}

const DEFAULT_STATE: LessonProgressState = {
  version: 1,
  lessons: {},
};

export function getLessonProgressKey(courseId: string, lessonSlug: string) {
  return `${courseId}:${lessonSlug}`;
}

export function readLessonProgressState(): LessonProgressState {
  if (typeof localStorage === "undefined") {
    return DEFAULT_STATE;
  }

  try {
    const raw = localStorage.getItem(LESSON_PROGRESS_STORAGE_KEY);

    if (!raw) {
      return DEFAULT_STATE;
    }

    const parsed = JSON.parse(raw) as Partial<LessonProgressState>;

    if (parsed.version !== 1 || !parsed.lessons || typeof parsed.lessons !== "object") {
      return DEFAULT_STATE;
    }

    return {
      version: 1,
      lessons: parsed.lessons,
    };
  } catch {
    return DEFAULT_STATE;
  }
}

function writeLessonProgressState(state: LessonProgressState) {
  if (typeof localStorage === "undefined") {
    return;
  }

  try {
    localStorage.setItem(LESSON_PROGRESS_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage can be unavailable or full; fail quietly and keep the UI usable.
  }
}

function getOrCreateLessonRecord(
  state: LessonProgressState,
  courseId: string,
  lessonSlug: string,
): LessonProgressRecord {
  const lessonKey = getLessonProgressKey(courseId, lessonSlug);
  const existing = state.lessons[lessonKey];

  if (existing) {
    return existing;
  }

  const created: LessonProgressRecord = {
    status: "not-started",
    updatedAt: new Date().toISOString(),
    quizzes: {},
  };

  state.lessons[lessonKey] = created;
  return created;
}

export function getLessonRecord(courseId: string, lessonSlug: string) {
  const lessonKey = getLessonProgressKey(courseId, lessonSlug);
  return readLessonProgressState().lessons[lessonKey] ?? null;
}

export function getLessonProgressSummary(
  courseId: string,
  lessonSlug: string,
  quizIds: string[],
): LessonProgressSummary {
  const record = getLessonRecord(courseId, lessonSlug);
  const completedQuizCount = quizIds.filter(
    (quizId) => Boolean(record?.quizzes[quizId]?.completedAt),
  ).length;

  return {
    status: record?.status ?? "not-started",
    quizCount: quizIds.length,
    completedQuizCount,
    hasActivity:
      Boolean(record) &&
      (record.status !== "not-started" ||
        completedQuizCount > 0 ||
        Object.values(record.quizzes).some((quiz) => quiz.attempts > 0)),
  };
}

export function setLessonStatus(
  courseId: string,
  lessonSlug: string,
  status: LessonStatus,
) {
  const state = readLessonProgressState();
  const record = getOrCreateLessonRecord(state, courseId, lessonSlug);

  record.status = status;
  record.updatedAt = new Date().toISOString();

  writeLessonProgressState(state);
}

export function recordQuizAttempt(
  courseId: string,
  lessonSlug: string,
  quizId: string,
  isCorrect: boolean,
  lessonQuizIds: string[],
) {
  const state = readLessonProgressState();
  const record = getOrCreateLessonRecord(state, courseId, lessonSlug);
  const quizRecord = record.quizzes[quizId] ?? {
    attempts: 0,
    completedAt: null,
  };

  quizRecord.attempts += 1;

  if (isCorrect && !quizRecord.completedAt) {
    quizRecord.completedAt = new Date().toISOString();
  }

  record.quizzes[quizId] = quizRecord;

  if (record.status === "not-started") {
    record.status = "in-progress";
  }

  record.updatedAt = new Date().toISOString();

  writeLessonProgressState(state);
}

export function resetLessonProgress(courseId: string, lessonSlug: string) {
  const state = readLessonProgressState();
  const lessonKey = getLessonProgressKey(courseId, lessonSlug);

  delete state.lessons[lessonKey];

  writeLessonProgressState(state);
}
