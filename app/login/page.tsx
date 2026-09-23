'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { loginUser } from '@/lib/mock-data';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('student1@no2v.com');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const user = loginUser(email, password);

    if (!user) {
      setError('Please check your email and password.');
      return;
    }

    localStorage.setItem('no2v-session', JSON.stringify(user));
    router.push('/dashboard');
  };

  return (
    <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-6xl items-center justify-center px-6 py-12">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-[32px] border border-brand-100 bg-white shadow-soft md:grid-cols-2">
        <div className="bg-[linear-gradient(135deg,_#dfffe9,_#f8fffb)] p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">NO2V</p>
          <h1 className="mt-6 text-4xl font-black text-slate-900">Welcome back</h1>
          <p className="mt-4 max-w-md text-slate-600">
            Sign in to your student or teacher profile and access assignments, feedback, and the warm-up video library.
          </p>

          <div className="mt-8 space-y-4 rounded-2xl bg-white/80 p-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Demo profiles</p>
            </div>
            <div className="space-y-2 text-sm text-slate-700">
              <p><span className="font-semibold">Teacher:</span> teacher@no2v.com</p>
              <p><span className="font-semibold">Student:</span> student1@no2v.com</p>
              <p><span className="font-semibold">Password:</span> password123</p>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <h2 className="text-2xl font-bold text-slate-900">Login</h2>
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-400 focus:bg-white"
                placeholder="name@school.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-400 focus:bg-white"
                placeholder="••••••••"
                required
              />
            </div>

            {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}

            <button
              type="submit"
              className="w-full rounded-xl bg-brand-600 px-4 py-3 font-semibold text-white transition hover:bg-brand-700"
            >
              Sign in
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Need a new student account? Ask your teacher to add one.
          </p>
          <div className="mt-4 text-center">
            <Link href="/" className="text-sm font-medium text-brand-700 hover:text-brand-800">
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
