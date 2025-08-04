'use client';

import {
  Code,
  Terminal,
  Paintbrush,
  Rocket,
  Book,
  PlusCircle,
  Bot,
  Battery,
  Plug,
  Coins,
} from 'lucide-react';

const features = [
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Developer-Friendly',
    desc: 'OpenAPI documentation to easily integrate with your projects.',
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: 'Discord Bot',
    desc: 'Easy 1 click setup for your Discord server. Get updates directly in your channels.',
  },
  {
    icon: <Plug className="h-6 w-6" />,
    title: 'Multiple data sources',
    desc: 'Discord, Reddit, 2b2t.org, 2b2t Wiki, 2b2t chat logs and more.',
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: 'Completely Free',
    desc: 'No hidden costs, no subscriptions. Just free access to the 2b2t RSS feed.',
  },
  {
    icon: <Book className="h-6 w-6" />,
    title: 'Full Documentation',
    desc: 'Comprehensive documentation on scraping, parsing, and using the RSS feed.',
  },
  {
    icon: <PlusCircle className="h-6 w-6" />,
    title: 'Open Source',
    desc: 'Feel free to contribute and improve the project on GitHub.',
  },
];

export default function Feature1() {
  return (
    <section className="relative py-14">
      <div className="mx-auto">
        <div className="relative mx-auto max-w-2xl sm:text-center">
          <div className="relative z-10">
            <h3 className="font-geist mt-4 text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl">
              Yeah, we are building a
              <span className="text-primary"> 2b2t RSS feed</span>
            </h3>
            <p className="font-geist text-foreground/60 mt-3">
              Pretty cool right? We are building a 2b2t RSS feed that
              scrapes various sources like Discord, Reddit, and more to bring 
              you the latest news and updates from the 2b2t community.
            </p>
          </div>
          <div
            className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"
            style={{
              background:
                'linear-gradient(152.92deg, rgba(192, 15, 102, 0.2) 4.54%, rgba(192, 11, 109, 0.26) 34.2%, rgba(192, 15, 102, 0.1) 77.55%)',
            }}
          ></div>
        </div>
        <hr className="bg-foreground/30 mx-auto mt-5 h-px w-1/2" />
        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="transform-gpu space-y-3 rounded-xl border bg-transparent p-4 [box-shadow:0_-20px_80px_-20px_#ff7aa42f_inset]"
              >
                <div className="text-primary w-fit transform-gpu rounded-full border p-4 [box-shadow:0_-20px_80px_-20px_#ff7aa43f_inset] dark:[box-shadow:0_-20px_80px_-20px_#ff7aa40f_inset]">
                  {item.icon}
                </div>
                <h4 className="font-geist text-lg font-bold tracking-tighter">
                  {item.title}
                </h4>
                <p className="text-gray-500">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}