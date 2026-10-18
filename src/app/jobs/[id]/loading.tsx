import { Skeleton, SkeletonText } from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}
      <section className="pt-32 pb-8 bg-gradient-to-br from-[#0B2652] to-[#1a3a6e]">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex items-start gap-6">
            <Skeleton className="h-20 w-20 rounded-2xl bg-white/20 flex-shrink-0" />
            <div className="flex-1">
              <Skeleton className="h-8 w-3/4 mb-3 bg-white/20" />
              <Skeleton className="h-5 w-1/2 mb-4 bg-white/20" />
              <div className="flex gap-2">
                <Skeleton className="h-6 w-24 rounded-full bg-white/20" />
                <Skeleton className="h-6 w-32 rounded-full bg-white/20" />
                <Skeleton className="h-6 w-28 rounded-full bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <Skeleton className="h-6 w-40 mb-4" />
                <SkeletonText lines={8} />
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <Skeleton className="h-6 w-32 mb-4" />
                <SkeletonText lines={5} />
              </div>
            </div>
            <div className="space-y-4">
              <Skeleton className="h-48 w-full rounded-2xl" />
              <Skeleton className="h-32 w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
