import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(118,214,150,0.18),_transparent_30%),linear-gradient(to_bottom,_#f6fff8,_#f0f7f2)] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">NO2V</p>
            <h1 className="mt-3 text-4xl font-black text-slate-900 md:text-6xl">Learning Hub</h1>
          </div>
          <Link
            href="/login"
            className="inline-flex items-center rounded-full bg-brand-600 px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-brand-700"
          >
            Student Login
          </Link>
        </div>

        <section className="grid gap-8 rounded-3xl border border-brand-100 bg-white/80 p-8 shadow-soft backdrop-blur md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700">
              Student success platform
            </p>
            <h2 className="max-w-xl text-3xl font-bold text-slate-900 md:text-5xl">
              Personalized courses, assignments, and warm-up videos in one place.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              NO2V helps students log in to their student profile, complete assigned work, submit videos and images,
              and follow their own learning path with teacher feedback.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/login"
                className="rounded-full bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700"
              >
                Access Portal
              </Link>
              <Link
                href="/video-library"
                className="rounded-full border border-brand-200 bg-white px-6 py-3 font-semibold text-brand-700 transition hover:bg-brand-50"
              >
                Explore Library
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-4 shadow-soft">
                <p className="text-sm font-semibold text-brand-700">Student profile</p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">Personal dashboard</h3>
                <p className="mt-2 text-sm text-slate-600">Assignments, submissions, and progress all in one place.</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-soft">
                <p className="text-sm font-semibold text-brand-700">Teacher tools</p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">Whole-class overview</h3>
                <p className="mt-2 text-sm text-slate-600">Track student work, review tasks, and leave feedback.</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-soft">
                <p className="text-sm font-semibold text-brand-700">Practice library</p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">Warm-up videos</h3>
                <p className="mt-2 text-sm text-slate-600">Built-in Vimeo library for daily practice and skill building.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
