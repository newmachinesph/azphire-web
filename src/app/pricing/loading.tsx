import { Skeleton } from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Skeleton */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0B2652] to-[#1a3a6e]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Skeleton className="h-8 w-24 mx-auto mb-4 rounded-full bg-white/20" />
          <Skeleton className="h-12 w-3/4 mx-auto mb-4 bg-white/20" />
          <Skeleton className="h-6 w-2/3 mx-auto bg-white/20" />
        </div>
      </section>

      {/* Pricing Card Skeleton */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <Skeleton className="h-16 w-16 mx-auto rounded-full mb-4" />
              <Skeleton className="h-8 w-48 mx-auto mb-2" />
              <Skeleton className="h-6 w-64 mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-full rounded" />
              ))}
            </div>
            <Skeleton className="h-14 w-48 mx-auto rounded-xl" />
          </div>
        </div>
      </section>

      {/* Infrastructure Skeleton */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Skeleton className="h-8 w-56 mx-auto mb-8" />
          <Skeleton className="h-64 w-64 mx-auto rounded-full mb-8" />
          <div className="grid md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-24 rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
