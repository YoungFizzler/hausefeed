import { Github } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/site.config';

const data = {
  githubLink: siteConfig.links?.github ?? 'https://github.com',
  contact: {
    email: 'hi@hausefeed.com',
    address: 'UK',
  },
  company: {
    name: siteConfig.company?.name ?? siteConfig.shortName ?? siteConfig.name,
    description: siteConfig.company?.description ?? siteConfig.description,
    logo: siteConfig.company?.logo ?? '/logo.webp',
  },
};

const socialLinks = [{ icon: Github, label: 'GitHub', href: data.githubLink }];

export default function Footer4Col() {
  return (
    <footer className="mt-16 w-full place-self-end rounded-t-xl bg-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/30">
      <div className="mx-auto w-full max-w-[1100px] px-4 md:px-6 pt-16 pb-6 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-primary flex justify-center gap-2 sm:justify-start">
              <img
                src={data.company.logo || '/placeholder.svg'}
                alt="logo"
                className="h-8 w-8 rounded-full"
              />
              <span className="text-2xl font-semibold">{data.company.name}</span>
            </div>

            <p className="text-foreground/50 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-primary hover:text-primary/80 transition">
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Keep only Contact column; remove About/Services/Helpful */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="flex items-center justify-center gap-1.5 sm:justify-start" href={`mailto:${data.contact.email}`}>
                    <span className="text-secondary-foreground/70 flex-1 transition">
                      {data.contact.email}
                    </span>
                  </a>
                </li>
                <li>
                </li>
                <li>
                  <div className="flex items-center justify-center gap-1.5 sm:justify-start">
                    <address className="text-secondary-foreground/70 -mt-0.5 flex-1 not-italic transition">
                      {data.contact.address}
                    </address>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="text-secondary-foreground/70 mt-4 text-sm transition sm:order-first sm:mt-0">
              &copy; {new Date().getFullYear()} {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}