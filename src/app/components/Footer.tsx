export function Footer() {
  return (
    <footer className="border-t py-8" style={{ backgroundColor: '#12100E', borderColor: 'rgba(255, 255, 255, 0.05)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm" style={{ color: 'rgba(249, 248, 244, 0.5)', fontWeight: 300 }}>
        <p>&copy; 2026 CIH - Coastal Innovation Hackathon. Mangalore.</p>
        <div className="flex items-center gap-2">
          <span>In partnership with</span>
          <span className="font-bold text-white tracking-wider text-xs">SOSC</span>
        </div>
      </div>
    </footer>
  );
}
