// ============================================================
// data/evenements.ts
// GUIDE : ajouter événement → copier un bloc, statut: "publie"
// ============================================================

export type Evenement = {
  slug: string;
  titre: string;
  type: "conference" | "webinaire" | "atelier" | "demonstration" | "autre";
  date_debut: string;   // YYYY-MM-DD
  date_fin?: string;
  lieu: string;
  pays: string;
  lien?: string;
  description: string;
  intervenants: string[];
  statut: "publie" | "brouillon" | "passe";
  mis_en_avant: boolean;
};

export const EVENEMENTS: Evenement[] = [
  {
    slug: "sacair-2026",
    titre: "SACAIR 2026 — Southern African Conference on AI Research",
    type: "conference",
    date_debut: "2026-11-15",
    date_fin: "2026-11-18",
    lieu: "Johannesburg",
    pays: "Afrique du Sud",
    lien: "https://sacair.org.za",
    description: "NOVARK soumettra ses travaux sur AgroScan à SACAIR 2026, la principale conférence IA d'Afrique subsaharienne.",
    intervenants: ["MAÏGA Ousmane"],
    statut: "publie",
    mis_en_avant: true,
  },
];

export function getEvenementsPublies() {
  return EVENEMENTS
    .filter(e => e.statut === "publie")
    .sort((a, b) => new Date(a.date_debut).getTime() - new Date(b.date_debut).getTime());
}

export function getEvenementBySlug(slug: string) {
  return EVENEMENTS.find(e => e.slug === slug && e.statut === "publie");
}
