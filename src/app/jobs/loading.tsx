import { Skeleton, SkeletonJobCard } from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Skeleton */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0B2652] to-[#1a3a6e]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Skeleton className="h-12 w-3/4 mx-auto mb-4 bg-white/20" />
          <Skeleton className="h-6 w-1/2 mx-auto mb-8 bg-white/20" />
          <Skeleton className="h-14 w-full max-w-2xl mx-auto rounded-xl bg-white/20" />
        </div>
      </section>

      {/* Jobs Grid Skeleton */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <Skeleton className="h-8 w-24 mb-4" />
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="h-10 w-full rounded-lg" />
                ))}
              </div>
            </div>

            {/* Job Cards */}
            <div className="flex-1 space-y-4">
              {[...Array(6)].map((_, i) => (
                <SkeletonJobCard key={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
