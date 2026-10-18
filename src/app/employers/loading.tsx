import { Skeleton, SkeletonCard } from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Skeleton */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0B2652] to-[#1a3a6e]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Skeleton className="h-6 w-32 rounded-full mb-6 bg-white/20" />
              <Skeleton className="h-14 w-full mb-4 bg-white/20" />
              <Skeleton className="h-14 w-3/4 mb-6 bg-white/20" />
              <Skeleton className="h-6 w-full max-w-lg mb-8 bg-white/20" />
              <div className="flex gap-4">
                <Skeleton className="h-14 w-40 rounded-2xl bg-white/20" />
                <Skeleton className="h-14 w-40 rounded-2xl bg-white/20" />
              </div>
            </div>
            <div className="hidden lg:block">
              <Skeleton className="h-48 w-full rounded-3xl bg-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Skeleton */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <Skeleton className="h-10 w-80 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
