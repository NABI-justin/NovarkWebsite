// Server Component — pas de "use client" ici
import { notFound } from "next/navigation";
import { EXPERTISES } from "@/data/novark";
import ExpertiseClient from "./ExpertiseClient";

export async function generateStaticParams() {
  return EXPERTISES.map(e => ({ slug: e.slug }));
}

export default function ExpertisePage({ params }: { params: { slug: string } }) {
  const expertise = EXPERTISES.find(e => e.slug === params.slug);
  if (!expertise) notFound();
  return <ExpertiseClient slug={params.slug} />;
}
