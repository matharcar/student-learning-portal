export type UserRole = 'student' | 'teacher' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  className?: string;
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'draft' | 'assigned' | 'submitted' | 'reviewed';
  studentIds: string[];
  subject: string;
}

export interface VideoLesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  embedUrl: string;
}

export const users: User[] = [
  {
    id: 'teacher-1',
    name: 'Ms. Johnson',
    email: 'teacher@no2v.com',
    password: 'password123',
    role: 'teacher',
    className: 'Class 7A',
  },
  {
    id: 'student-1',
    name: 'Ava Smith',
    email: 'student1@no2v.com',
    password: 'password123',
    role: 'student',
    className: 'Class 7A',
  },
  {
    id: 'student-2',
    name: 'Leo Martin',
    email: 'student2@no2v.com',
    password: 'password123',
    role: 'student',
    className: 'Class 7A',
  },
  {
    id: 'admin-1',
    name: 'Admin Team',
    email: 'admin@no2v.com',
    password: 'password123',
    role: 'admin',
    className: 'School Admin',
  },
];

export const assignments: Assignment[] = [
  {
    id: 'assignment-1',
    title: 'Warm Up Reflection',
    description: 'Write a short reflection about your warm-up routine and describe what you practiced today.',
    dueDate: 'Sept 25, 2026',
    status: 'assigned',
    studentIds: ['student-1', 'student-2'],
    subject: 'Creative Writing',
  },
  {
    id: 'assignment-2',
    title: 'Science Observation Log',
    description: 'Submit a photo or written note describing your observations from the lab task and explain the outcome.',
    dueDate: 'Sept 27, 2026',
    status: 'submitted',
    studentIds: ['student-1'],
    subject: 'Science',
  },
  {
    id: 'assignment-3',
    title: 'Math Problem Set',
    description: 'Solve the problem set and explain each step clearly using your own words.',
    dueDate: 'Sept 30, 2026',
    status: 'reviewed',
    studentIds: ['student-2'],
    subject: 'Mathematics',
  },
];

export const videoLibrary: VideoLesson[] = [
  {
    id: 'video-1',
    title: 'Breathing Warm-Up',
    description: 'A short breathing routine to help students settle in and focus before class.',
    duration: '3:16',
    embedUrl: 'https://player.vimeo.com/video/76979871?title=0&byline=0&portrait=0',
  },
  {
    id: 'video-2',
    title: 'Creative Movement Routine',
    description: 'A dynamic warm-up video designed to increase mobility, focus, and confidence.',
    duration: '4:42',
    embedUrl: 'https://player.vimeo.com/video/148751763?title=0&byline=0&portrait=0',
  },
  {
    id: 'video-3',
    title: 'Daily Practice Challenge',
    description: 'A focused activity to help students build consistency and notice progress across tasks.',
    duration: '5:08',
    embedUrl: 'https://player.vimeo.com/video/241081995?title=0&byline=0&portrait=0',
  },
];

export function loginUser(email: string, password: string): User | undefined {
  return users.find(
    (user) => user.email.toLowerCase() === email.toLowerCase() && user.password === password
  );
}

export function getStoredUser(): User | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const session = localStorage.getItem('no2v-session');
  if (!session) return null;

  try {
    return JSON.parse(session) as User;
  } catch {
    return null;
  }
}
