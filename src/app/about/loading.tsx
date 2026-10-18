import { Skeleton, SkeletonText, SkeletonCard } from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Skeleton */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0B2652] to-[#1a3a6e]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Skeleton className="h-8 w-32 mx-auto mb-4 rounded-full bg-white/20" />
          <Skeleton className="h-12 w-3/4 mx-auto mb-4 bg-white/20" />
          <Skeleton className="h-6 w-2/3 mx-auto bg-white/20" />
        </div>
      </section>

      {/* Stats Skeleton */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="text-center">
                <Skeleton className="h-10 w-24 mx-auto mb-2" />
                <Skeleton className="h-4 w-32 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
