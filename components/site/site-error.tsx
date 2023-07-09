"use client";

// Error components must be Client Components
import { useRouter } from "next/navigation";

export default function SiteError() {
  const router = useRouter();

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-gray-900">Уучлаарай</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Алдаа гарлаа
        </h1>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            type="button"
            onClick={() => router.refresh()}
            className="rounded-md bg-gray-200 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-300"
          >
            Дахин оролдох
          </button>
        </div>
      </div>
    </main>
  );
}
