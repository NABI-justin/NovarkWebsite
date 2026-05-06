import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const BLUE = "#0B3D91";
export default function Page() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <Navbar />
      <section style={{ background: "#0D1B3E", padding: "60px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 9, color: "#E8272A", letterSpacing: "0.3em", fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>NOVARK</div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#fff", textTransform: "uppercase", marginBottom: 16 }}>NOVARK+</h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", maxWidth: 500, lineHeight: 1.8 }}>Applications, outils et ressources exclusifs NOVARK.</p>
        </div>
      </section>
      <div style={{ height: 3, background: BLUE }} />
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 40px", textAlign: "center" }}>
        <div style={{ fontSize: 48, fontWeight: 900, color: "#f0f0f0", marginBottom: 16 }}>Bientôt</div>
        <div style={{ fontSize: 14, color: "#aaa", lineHeight: 1.8 }}>Applications NOVARK, API et outils disponibles prochainement.<br /><a href="mailto:contact@novark.ai" style={{ color: BLUE }}>contact@novark.ai</a></div>
      </section>
      <Footer />
    </div>
  );
}
