import { Metadata } from 'next';

const siteConfig = {
  name: 'Azphire',
  url: 'https://azphire.com',
  description: "The Philippines' new remote work platform. Find your dream remote job or hire top Filipino talent.",
};

export function createMetadata({
  title,
  description,
  path = '',
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export const pageMetadata = {
  home: createMetadata({
    title: 'Connect Filipino Talent with Global Opportunities',
    description: "The Philippines' new remote work platform. Find your dream remote job or hire top Filipino talent. Free to join, verified employers, global opportunities.",
    path: '',
  }),
  jobs: createMetadata({
    title: 'Browse Remote Jobs',
    description: 'Explore thousands of remote job opportunities for Filipino professionals. Filter by category, experience level, and salary range.',
    path: '/jobs',
  }),
  about: createMetadata({
    title: 'About Us',
    description: 'Learn about Azphire, our mission to connect Filipino professionals with global remote opportunities, and our commitment to transparency.',
    path: '/about',
  }),
  contact: createMetadata({
    title: 'Contact Us',
    description: 'Get in touch with the Azphire team. We\'re here to help job seekers and employers connect.',
    path: '/contact',
  }),
  pricing: createMetadata({
    title: 'Pricing',
    description: 'Azphire is free for everyone. See our transparent breakdown of infrastructure costs and how we keep the platform running.',
    path: '/pricing',
  }),
  help: createMetadata({
    title: 'Help Center',
    description: 'Find answers to common questions about using Azphire. Get help with your account, job applications, and more.',
    path: '/help',
  }),
  login: createMetadata({
    title: 'Sign In',
    description: 'Sign in to your Azphire account to access your dashboard, applications, and messages.',
    path: '/login',
  }),
  register: createMetadata({
    title: 'Create Account',
    description: 'Join Azphire for free. Create your profile and start connecting with remote job opportunities or top Filipino talent.',
    path: '/register',
  }),
  terms: createMetadata({
    title: 'Terms of Service',
    description: 'Read the Azphire Terms of Service. Understand your rights and responsibilities when using our platform.',
    path: '/terms',
  }),
  privacy: createMetadata({
    title: 'Privacy Policy',
    description: 'Learn how Azphire collects, uses, and protects your personal information.',
    path: '/privacy',
  }),
  cookies: createMetadata({
    title: 'Cookie Policy',
    description: 'Understand how Azphire uses cookies and similar technologies on our platform.',
    path: '/cookies',
  }),
  forgotPassword: createMetadata({
    title: 'Forgot Password',
    description: 'Reset your Azphire password. Enter your email to receive password reset instructions.',
    path: '/forgot-password',
  }),
  resetPassword: createMetadata({
    title: 'Reset Password',
    description: 'Create a new password for your Azphire account.',
    path: '/reset-password',
    noIndex: true,
  }),
  verifyEmail: createMetadata({
    title: 'Verify Email',
    description: 'Verify your email address to complete your Azphire account setup.',
    path: '/verify-email',
    noIndex: true,
  }),
  employers: createMetadata({
    title: 'For Employers',
    description: 'Hire top Filipino remote talent. Access verified candidates, post unlimited jobs, and build your global team. 100% free for employers.',
    path: '/employers',
  }),
};
