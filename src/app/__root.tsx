import '@fontsource-variable/space-grotesk';
import '@fontsource-variable/geist';
import './globals.css';

import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Resume Matcher' },
      { name: 'description', content: 'Build your resume with Resume Matcher' },
      { name: 'applicationName', content: 'Resume Matcher' },
      { name: 'keywords', content: 'resume, matcher, job, application' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  component: RootLayout,
});

function RootLayout() {
  return (
    <html lang="en-US" className="h-full">
      <head>
        <HeadContent />
      </head>
      <body className="antialiased bg-background text-ink-soft min-h-full font-sans">
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
