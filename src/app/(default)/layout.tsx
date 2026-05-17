import { createFileRoute, Outlet } from '@tanstack/react-router';
import { ResumePreviewProvider } from '@/components/common/resume_previewer_context';
import { StatusCacheProvider } from '@/lib/context/status-cache';
import { LanguageProvider } from '@/lib/context/language-context';
import { LocalizedErrorBoundary } from '@/components/common/error-boundary';

export const Route = createFileRoute('/(default)/layout')({
  component: DefaultLayout,
});

function DefaultLayout() {
  return (
    <StatusCacheProvider>
      <LanguageProvider>
        <ResumePreviewProvider>
          <LocalizedErrorBoundary>
            <main className="min-h-screen flex flex-col">
              <Outlet />
            </main>
          </LocalizedErrorBoundary>
        </ResumePreviewProvider>
      </LanguageProvider>
    </StatusCacheProvider>
  );
}
