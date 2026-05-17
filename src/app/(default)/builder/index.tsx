import { createFileRoute } from "@tanstack/react-router";
import { ResumeBuilder } from '@/components/builder/resume-builder';

function BuilderPage() {
  return <ResumeBuilder />;
}

export const Route = createFileRoute("/(default)/builder/")({
  component: BuilderPage,
});
