import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/print/cover-letter/$id')({
  component: PrintCoverLetterPage,
});

function PrintCoverLetterPage() {
  const { id } = Route.useParams();
  return (
    <div className="print-cover-letter bg-white">
      <p>Print cover letter {id}</p>
    </div>
  );
}
