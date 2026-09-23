'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { assignments, getStoredUser } from '@/lib/mock-data';

export default function AssignmentsPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const currentUser = getStoredUser();
    if (!currentUser) {
      router.push('/login');
      return;
    }
    setUser(currentUser);
  }, [router]);

  if (!user) {
    return null;
  }

  const visibleAssignments =
    user.role === 'student'
      ? assignments.filter((assignment) => assignment.studentIds.includes(user.id))
      : assignments;

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Assignments</p>
        <h1 className="mt-2 text-3xl font-black text-slate-900">Task center</h1>
      </div>

      <div className="space-y-5">
        {visibleAssignments.map((assignment) => (
          <div key={assignment.id} className="card">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-700">{assignment.subject}</p>
                <h2 className="mt-1 text-2xl font-bold text-slate-900">{assignment.title}</h2>
              </div>
              <span className="inline-flex w-fit rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-brand-700">
                {assignment.status}
              </span>
            </div>

            <p className="mt-4 text-slate-600">{assignment.description}</p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-brand-100 bg-brand-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Due date</p>
                <p className="mt-2 text-lg font-bold text-slate-900">{assignment.dueDate}</p>
              </div>
              <div className="rounded-2xl border border-brand-100 bg-brand-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Submission</p>
                <p className="mt-2 text-lg font-bold text-slate-900">Text, video, image</p>
              </div>
              <div className="rounded-2xl border border-brand-100 bg-brand-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Feedback</p>
                <p className="mt-2 text-lg font-bold text-slate-900">Teacher notes</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-700">Submission area</p>
              <textarea
                className="mt-3 min-h-[120px] w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-brand-400"
                placeholder="Add your answer, describe your process, upload image or video link..."
              />
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-slate-500">Students can submit text, videos, and image evidence.</p>
                <button className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700">
                  Submit task
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
