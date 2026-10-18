import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata.employers;

export default function EmployersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
