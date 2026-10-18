import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata.help;

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
