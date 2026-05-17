import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/print/resumes/$id')({
  component: PrintResumePage,
});

function PrintResumePage() {
  const { id } = Route.useParams();
  return (
    <div className="resume-print bg-white">
      <p>Print view for resume {id}</p>
    </div>
  );
}
