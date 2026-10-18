import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata.jobs;

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
