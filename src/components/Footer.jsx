export default function Footer() {
  return (
    <footer className="py-20 bg-white border-t border-slate-100 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-black text-slate-900 tracking-tighter">CareGo <span className="text-purple-600">Robotics</span></h2>
        <p className="text-slate-400 text-sm mt-2 font-medium italic">Empowering Healthcare through AI & Robotics</p>
        
        <div className="flex justify-center gap-8 mt-10">
          {['Research', 'Privacy', 'Documentation', 'Contact'].map((link) => (
            <a key={link} href="#" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-purple-600 transition-colors">
              {link}
            </a>
          ))}
        </div>
        
        <div className="mt-10 pt-10 border-t border-slate-50 text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">
          © 2026 CareGo Team • University Graduation Project
        </div>
      </div>
    </footer>
  );
}