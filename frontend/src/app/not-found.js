// src/app/not-found.js
'use client'; // Important for useRouter in app directory

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
      router.push('/pages/naila143201/post/3217328');
  }, [router]);

  return (
    <></>
  );
}
