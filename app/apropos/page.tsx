"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { EQUIPE } from "@/data/equipe";
import { CONTACT } from "@/data/novark";

const BLUE = "#0B3D91";

export default function AproposPage() {
  return (
    <div
      style={{
        background: "#fff",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        color: "#111",
      }}
    >
      <Navbar />

      {/* HERO */}
      <section style={{ background: "#0D1B3E", padding: "60px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 9,
              color: "#E8272A",
              letterSpacing: "0.3em",
              fontWeight: 700,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            À propos
          </div>
          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900,
              color: "#fff",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            NOVARK
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 600,
              lineHeight: 1.8,
            }}
          >
            Startup technologique burkinabè fondée par cinq jeunes ingénieurs et
            chercheurs formés à l'international.
          </p>
        </div>
      </section>

      <div style={{ height: 3, background: BLUE }} />

      {/* NOTRE HISTOIRE */}
      <section
        id="histoire"
        style={{ padding: "80px 40px", borderBottom: "1px solid #eee" }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 9,
                color: BLUE,
                letterSpacing: "0.25em",
                fontWeight: 700,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Notre Histoire
            </div>
            <h2
              style={{
                fontSize: 32,
                fontWeight: 900,
                color: "#0D1B3E",
                marginBottom: 24,
                lineHeight: 1.2,
              }}
            >
              Nés d'une conviction : la technologie peut transformer l'Afrique.
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#555",
                lineHeight: 1.9,
                marginBottom: 16,
              }}
            >
              NOVARK - du latin <em>Nova Arca</em>, « La Nouvelle Arche » - est
              née en 2026 de la rencontre de cinq ingénieurs burkinabè formés au
              Burkina, au Canada, en Chine, en France et au Maroc, réunis par
              une conviction commune : les solutions technologiques de pointe
              doivent être conçues pour et par l'Afrique.
            </p>
            <p
              style={{
                fontSize: 14,
                color: "#555",
                lineHeight: 1.9,
                marginBottom: 16,
              }}
            >
              Notre premier projet, AgroScan, est un système de détection
              précoce des maladies foliaires du riz par intelligence
              artificielle. Avec 99,54% AUROC et zéro image malade nécessaire à
              l'entraînement, il dépasse les performances officielles de Google
              Research - et fonctionne sans connexion internet, sur drone, dans
              les champs burkinabè.
            </p>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9 }}>
              Ce n'est qu'un début. NOVARK a vocation à devenir le studio
              technologique de référence pour l'Afrique de l'Ouest - en IA,
              robotique, vision par ordinateur, systèmes embarqués, architecture
              et bien d'autres domaines.
            </p>
          </div>
          <div
            style={{
              background: "#f8f9fa",
              padding: "40px",
              borderLeft: `4px solid ${BLUE}`,
            }}
          >
            <div
              style={{
                fontSize: 9,
                color: BLUE,
                letterSpacing: "0.2em",
                fontWeight: 700,
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              En chiffres
            </div>
            {[
              { val: "2026", label: "Année de fondation" },
              { val: "5", label: "Membres fondateurs" },
              { val: "13", label: "Expertises" },
              { val: "11", label: "Secteurs couverts" },
              { val: "99,54%", label: "AUROC AgroScan" },
            ].map((s, i) => (
              <div
                key={s.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px 0",
                  borderBottom: i < 4 ? "1px solid #eee" : "none",
                }}
              >
                <span style={{ fontSize: 13, color: "#555" }}>{s.label}</span>
                <span
                  style={{ fontSize: 18, fontWeight: 900, color: "#0D1B3E" }}
                >
                  {s.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTRE MISSION */}
      <section
        id="mission"
        style={{
          background: "#f8f9fa",
          padding: "80px 40px",
          borderBottom: "1px solid #eee",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 9,
              color: BLUE,
              letterSpacing: "0.25em",
              fontWeight: 700,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Notre Mission
          </div>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 900,
              color: "#0D1B3E",
              marginBottom: 48,
              maxWidth: 600,
              lineHeight: 1.2,
            }}
          >
            Concevoir des solutions technologiques qui fonctionnent pour nos
            réalités.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              background: "#ddd",
            }}
          >
            {[
              {
                titre: "Intelligence",
                texte:
                  "Nos modèles IA sont entraînés, testés et validés sur des données réelles africaines - pas des benchmarks de laboratoire occidentaux.",
              },
              {
                titre: "Innovation",
                texte:
                  "Nous poussons l'état de l'art mondial et l'adaptons aux contraintes terrain : absence de connexion, équipements limités, conditions extrêmes.",
              },
              {
                titre: "Impact",
                texte:
                  "Chaque solution que nous développons doit avoir un impact mesurable sur la vie des populations et l'économie de l'Afrique de l'Ouest.",
              },
            ].map((v) => (
              <div
                key={v.titre}
                style={{ background: "#fff", padding: "36px 32px" }}
              >
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 900,
                    color: "#E8272A",
                    marginBottom: 16,
                  }}
                >
                  {v.titre}
                </div>
                <p style={{ fontSize: 14, color: "#555", lineHeight: 1.8 }}>
                  {v.texte}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section
        id="equipe"
        style={{ padding: "80px 40px", borderBottom: "1px solid #eee" }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 9,
              color: BLUE,
              letterSpacing: "0.25em",
              fontWeight: 700,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Notre Équipe
          </div>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 900,
              color: "#0D1B3E",
              marginBottom: 48,
            }}
          >
            Cinq ingénieurs, cinq pays de formation, une vision commune.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              background: "#eee",
            }}
          >
            {EQUIPE.filter((m) => m.actif)
              .sort((a, b) => a.ordre - b.ordre)
              .map((m) => (
                <div
                  key={m.id}
                  style={{
                    background: "#fff",
                    padding: "32px",
                    display: "flex",
                    gap: 20,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      overflow: "hidden",
                      flexShrink: 0,
                      background: "#eee",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={m.photo}
                      alt={`${m.prenom} ${m.nom}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 900,
                        color: "#0D1B3E",
                      }}
                    >
                      {m.prenom} {m.nom}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: "#E8272A",
                        marginTop: 2,
                        marginBottom: 6,
                      }}
                    >
                      {m.titre}
                    </div>
                    <div
                      style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}
                    >
                      {m.role}
                    </div>
                    {m.linkedin && (
                      <a
                        href={m.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: 11,
                          color: BLUE,
                          textDecoration: "none",
                          marginTop: 8,
                          display: "block",
                          fontWeight: 600,
                        }}
                      >
                        LinkedIn →
                      </a>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* PARTENAIRES */}
      <section
        id="partenaires"
        style={{ background: "#f8f9fa", padding: "60px 40px" }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 9,
              color: BLUE,
              letterSpacing: "0.25em",
              fontWeight: 700,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Partenaires
          </div>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 900,
              color: "#0D1B3E",
              marginBottom: 32,
            }}
          >
            Nos partenaires institutionnels
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              background: "#ddd",
            }}
          >
            {[
              {
                nom: "DGPV",
                desc: "Direction Générale de la Protection des Végétaux - Ministère de l'Agriculture, Burkina Faso",
                statut: "En cours",
              },
              {
                nom: "FBDES Tõogo",
                desc: "Fonds Burkinabè de Développement Économique et Social - Financement Phase 2",
                statut: "En cours",
              },
              {
                nom: "Laboratoire PRIME",
                desc: "Laboratoire de recherche en IA et Robotique - Canada",
                statut: "Actif",
              },
            ].map((p) => (
              <div key={p.nom} style={{ background: "#fff", padding: "28px" }}>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 900,
                    color: "#0D1B3E",
                    marginBottom: 8,
                  }}
                >
                  {p.nom}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#666",
                    lineHeight: 1.6,
                    marginBottom: 12,
                  }}
                >
                  {p.desc}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "#E8272A",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {p.statut}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
