'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { assignments, getStoredUser, users, videoLibrary } from '@/lib/mock-data';

export default function DashboardPage() {
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

  const userAssignments = assignments.filter((assignment) =>
    assignment.studentIds.includes(user.id) || user.role !== 'student'
  );

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-brand-100 bg-white p-6 shadow-soft md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Welcome back</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900">{user.name}</h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold capitalize text-brand-700">
            {user.role}
          </span>
          <span className="rounded-full border border-brand-200 px-3 py-1 text-sm font-medium text-slate-700">
            {user.className || 'All students'}
          </span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="card">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Assignments</p>
          <p className="mt-3 text-4xl font-black text-slate-900">{userAssignments.length}</p>
          <p className="mt-2 text-sm text-slate-600">Tasks assigned to this profile.</p>
        </div>
        <div className="card">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Submissions</p>
          <p className="mt-3 text-4xl font-black text-slate-900">
            {user.role === 'student' ? userAssignments.filter((assignment) => assignment.status === 'submitted').length : 'All'}
          </p>
          <p className="mt-2 text-sm text-slate-600">Current completion status.</p>
        </div>
        <div className="card">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Practice videos</p>
          <p className="mt-3 text-4xl font-black text-slate-900">{videoLibrary.length}</p>
          <p className="mt-2 text-sm text-slate-600">Warm-up and skill-building sessions.</p>
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="card">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="section-title">My assignments</h2>
            <Link href="/assignments" className="text-sm font-semibold text-brand-700 hover:text-brand-800">
              View all
            </Link>
          </div>

          <div className="space-y-4">
            {userAssignments.map((assignment) => (
              <div key={assignment.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{assignment.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{assignment.subject}</p>
                  </div>
                  <span className="rounded-full bg-brand-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-brand-700">
                    {assignment.status}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-600">{assignment.description}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                  <span>Due: {assignment.dueDate}</span>
                  <span>{assignment.studentIds.length} students</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="card">
            <h2 className="section-title">Student profile</h2>
            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <p><span className="font-semibold text-slate-900">Name:</span> {user.name}</p>
              <p><span className="font-semibold text-slate-900">Email:</span> {user.email}</p>
              <p><span className="font-semibold text-slate-900">Role:</span> {user.role}</p>
              <p><span className="font-semibold text-slate-900">Class:</span> {user.className || 'N/A'}</p>
            </div>
          </div>

          {user.role !== 'student' ? (
            <div className="card">
              <h2 className="section-title">Class roster</h2>
              <div className="mt-5 space-y-3">
                {users.filter((person) => person.role === 'student').map((student) => (
                  <div key={student.id} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                    <div>
                      <p className="font-medium text-slate-800">{student.name}</p>
                      <p className="text-xs text-slate-500">{student.className}</p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-700">{student.role}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="card">
              <h2 className="section-title">Warm up videos</h2>
              <div className="mt-5 space-y-3 text-sm text-slate-600">
                {videoLibrary.slice(0, 2).map((lesson) => (
                  <div key={lesson.id} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <p className="font-medium text-slate-900">{lesson.title}</p>
                    <p className="mt-1">{lesson.duration}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
