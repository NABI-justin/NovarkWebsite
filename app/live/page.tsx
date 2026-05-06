import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const BLUE = "#0B3D91";
export default function Page() {
  return (
    <div style={{ background: "#000", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <Navbar />
      <section style={{ padding: "80px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 32 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#E8272A", animation: "livepulse 1.5s ease-in-out infinite" }} />
            <span style={{ fontSize: 12, fontWeight: 900, color: "#E8272A", letterSpacing: "0.3em" }}>NOVARK LIVE</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900, color: "#fff", textTransform: "uppercase", marginBottom: 20 }}>Aucun événement live en ce moment</h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.8 }}>Les prochaines démonstrations et événements NOVARK Live seront annoncés ici.</p>
        </div>
      </section>
      <Footer />
      <style>{`@keyframes livepulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.2; } }`}</style>
    </div>
  );
}
