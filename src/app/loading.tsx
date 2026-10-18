import { SkeletonHero } from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-[#0B2652] to-[#1a3a6e]">
        <SkeletonHero />
      </div>
    </main>
  );
}
