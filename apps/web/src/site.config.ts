export interface SiteConfig {
  name: string;
  shortName?: string;
  description: string;
  url: string;
  ogImage?: string;
  twitter?: {
    handle?: string;
    site?: string;
    card?: 'summary' | 'summary_large_image';
  };
  keywords?: string[];
  locale?: string;
  creator?: string;
  themeColor?: string;
  icons?: {
    icon?: string | string[];
    shortcut?: string | string[];
    apple?: string | string[];
  };
  company?: {
    name?: string;
    logo?: string;
    description?: string;
  };
  links?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    github?: string;
    dribbble?: string;
  };
  nav?: Array<{ name: string; href: string; hasDropdown?: boolean; dropdownItems?: { name: string; href: string; description?: string }[] }>;
}

export const siteConfig: SiteConfig = {
  name: 'hausefeed',
  shortName: 'hausefeed',
  description: 'hausefeed',
  url: 'https://hausefeed.dev',
  ogImage: '/og.png',
  twitter: {
    handle: '@hausefeed',
    site: '@hausefeed',
    card: 'summary_large_image',
  },
  keywords: ['hausefeed', 'nextjs', 'app'],
  locale: 'en_GB',
  creator: 'hausefeed',
  themeColor: '#ffffff',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  company: {
    name: 'hausefeed',
    logo: '/logo.webp',
    description:
      'AI Driven 2b2t News',
  },
  links: {
    facebook: 'https://facebook.com/hausefeed',
    instagram: 'https://instagram.com/hausefeed',
    twitter: 'https://twitter.com/hausefeed',
    github: 'https://github.com/hausefeed',
    dribbble: 'https://dribbble.com/hausefeed',
  },
  nav: [
  ],
};

// helper to build Next.js md from the siteConfig
import type { Metadata } from 'next';

export function buildMetadata(partial?: Metadata): Metadata {
  const base: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.name,
      template: `%s · ${siteConfig.shortName ?? siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    applicationName: siteConfig.name,
    authors: siteConfig.creator ? [{ name: siteConfig.creator }] : undefined,
    creator: siteConfig.creator,
    themeColor: siteConfig.themeColor,
    openGraph: {
      type: 'website',
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: siteConfig.ogImage
        ? [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }]
        : undefined,
    },
    twitter: {
      card: siteConfig.twitter?.card ?? 'summary_large_image',
      creator: siteConfig.twitter?.handle,
      site: siteConfig.twitter?.site,
      title: siteConfig.name,
      description: siteConfig.description,
      images: siteConfig.ogImage,
    },
    icons: siteConfig.icons,
  };
  return {
    ...base,
    ...partial,
    openGraph: { ...base.openGraph, ...partial?.openGraph },
    twitter: { ...base.twitter, ...partial?.twitter },
  };
}