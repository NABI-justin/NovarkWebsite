// Server Component — pas de "use client" ici
import { notFound } from "next/navigation";
import { SECTEURS } from "@/data/novark";
import SecteurClient from "./SecteurClient";

export async function generateStaticParams() {
  return SECTEURS.map(s => ({ slug: s.slug }));
}

export default function SecteurPage({ params }: { params: { slug: string } }) {
  const secteur = SECTEURS.find(s => s.slug === params.slug);
  if (!secteur) notFound();
  return <SecteurClient slug={params.slug} />;
}
