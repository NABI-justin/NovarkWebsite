"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
const BLUE = "#0B3D91";
export default function Page() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <Navbar />
      <section style={{ background: "#0D1B3E", padding: "60px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 9, color: "#E8272A", letterSpacing: "0.3em", fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>NOVARK</div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#fff", textTransform: "uppercase", marginBottom: 16 }}>Multimédia</h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", maxWidth: 500, lineHeight: 1.8 }}>Images, vidéos, présentations et publications PDF.</p>
        </div>
      </section>
      <div style={{ height: 3, background: BLUE }} />
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#eee" }}>
          {[
            { titre: "Images & Visuels", desc: "Heatmaps AgroScan, photos équipe, visuels projets", href: "/multimedia/images", icon: "🖼" },
            { titre: "Vidéos & Démos", desc: "Démonstrations AgroScan, présentations vidéo", href: "/multimedia/videos", icon: "▶" },
            { titre: "Publications PDF", desc: "Articles scientifiques, présentations, e-Books", href: "/multimedia/publications", icon: "📄" },
          ].map(item => (
            <Link key={item.href} href={item.href} style={{ background: "#fff", padding: "36px 28px", textDecoration: "none", display: "block" }}
              onMouseEnter={ev => (ev.currentTarget.style.background = "#f4f7fb")}
              onMouseLeave={ev => (ev.currentTarget.style.background = "#fff")}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>{item.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 900, color: "#0D1B3E", marginBottom: 10 }}>{item.titre}</div>
              <div style={{ fontSize: 13, color: "#777", lineHeight: 1.6, marginBottom: 16 }}>{item.desc}</div>
              <div style={{ fontSize: 11, color: BLUE, fontWeight: 700 }}>Accéder →</div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
