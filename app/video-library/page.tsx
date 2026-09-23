'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getStoredUser, videoLibrary } from '@/lib/mock-data';

export default function VideoLibraryPage() {
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

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Practice library</p>
        <h1 className="mt-2 text-3xl font-black text-slate-900">Warm-up and development videos</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {videoLibrary.map((video) => (
          <div key={video.id} className="card overflow-hidden p-0">
            <div className="aspect-video w-full bg-slate-200">
              <iframe
                src={video.embedUrl}
                title={video.title}
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-bold text-slate-900">{video.title}</h2>
                <span className="rounded-full bg-brand-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.06em] text-brand-700">
                  {video.duration}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
