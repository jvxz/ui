'use client'

import { useTheme } from "next-themes";

export default function Page() {
  const {resolvedTheme, setTheme} = useTheme()

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} className="bg-background text-black px-4 py-2 rounded-md">
        Swap
      </button>
    </div>
  );
}