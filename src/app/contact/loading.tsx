import { Skeleton, SkeletonText } from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Skeleton */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0B2652] to-[#1a3a6e]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Skeleton className="h-12 w-48 mx-auto mb-4 bg-white/20" />
          <Skeleton className="h-6 w-80 mx-auto bg-white/20" />
        </div>
      </section>

      {/* Contact Form Skeleton */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <Skeleton className="h-8 w-40 mb-4" />
                <SkeletonText lines={3} />
              </div>
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex gap-4">
                  <Skeleton className="h-12 w-12 rounded-xl flex-shrink-0" />
                  <div className="flex-1">
                    <Skeleton className="h-5 w-24 mb-2" />
                    <Skeleton className="h-4 w-40" />
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <Skeleton className="h-6 w-32 mb-6" />
              <div className="space-y-4">
                <Skeleton className="h-12 w-full rounded-xl" />
                <Skeleton className="h-12 w-full rounded-xl" />
                <Skeleton className="h-12 w-full rounded-xl" />
                <Skeleton className="h-32 w-full rounded-xl" />
                <Skeleton className="h-12 w-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
