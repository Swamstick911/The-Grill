'use client'
import Link from 'next/link'

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center p-10 bg-amber-50 min-h-[80vh] overflow-hidden">
        
        {/* CSS for the custom float animation */}
        <style jsx>{`
          @keyframes float {
            0% { transform: translateY(0px) rotate(var(--tw-rotate)); }
            50% { transform: translateY(-20px) rotate(var(--tw-rotate)); }
            100% { transform: translateY(0px) rotate(var(--tw-rotate)); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          .delay-1 { animation-delay: 0s; }
          .delay-2 { animation-delay: 1s; }
          .delay-3 { animation-delay: 2s; }
          .delay-4 { animation-delay: 3s; }
        `}</style>

        <h1 className="text-8xl font-[family-name:var(--font-bangers)] font-extrabold italic underline decoration-double decoration-red-500 decoration-6 underline-offset-8 mb-6 text-red-600 z-10">
          THE GRILL
        </h1>
        <p className="text-4xl text-gray-700 max-w-2xl mb-28 font-semibold mt-11 z-10">
            A debate game where players have no mercy and only the best takes it all!
        </p>

        {/* --- ANIMATED BACKGROUND TEXT (Floating) --- */}
        <div className="absolute top-20 left-10 rotate-12 text-6xl text-gray-500 opacity-20 animate-float delay-1">hehe</div>
        <div className="absolute bottom-32 right-10 -rotate-3 text-6xl text-red-400 opacity-20 animate-float delay-2">put off one scene 🤙</div>
        <div className="absolute top-32 right-10 rotate-45 text-6xl text-green-400 opacity-20 animate-float delay-3">@#$%^#</div>
        <div className="absolute top-40 left-1/3 -rotate-12 text-6xl text-amber-400 opacity-20 animate-float delay-4">yeaaa</div>
        <div className="absolute top-60 right-1/4 text-6xl text-cyan-400 opacity-20 animate-float delay-1">firrreeee</div>
        <div className="absolute bottom-20 left-10 -rotate-12 text-6xl text-fuchsia-400 opacity-20 animate-float delay-2">get ittt</div>
        <div className="absolute top-80 left-1/2 rotate-6 text-6xl text-orange-400 opacity-20 animate-float delay-3">insane brooo!!</div>
        {/* -------------------------------- */}
        
        {/* Main Action Button */}
        <Link 
          href="/kitchen" 
          className="z-10 bg-red-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-red-700 transition transform hover:scale-110 hover:shadow-[0px_4px_15px_0px_rgba(220,38,38,0.5)] active:scale-95"
        >
          ENTER THE KITCHEN
        </Link>
      </section>

      {/* 2. FEATURES SECTION */}
      <section className="grid md:grid-cols-3 gap-8 p-10 bg-amber-50">
        <div className="p-6 border-2 border-black rounded-xl bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-5px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
          <h3 className="text-2xl text-red-500 font-bold mb-2">Spicy Takes</h3>
          <p className="text-gray-600">No mild opinions allowed. Only the hottest takes survive.</p>
        </div>

        <div className="p-6 border-2 border-black rounded-xl bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-5px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
          <h3 className="text-2xl text-amber-400 font-bold mb-2">Real-Time</h3>
          <p className="text-gray-600">Built with Supabase for instant message delivery.</p>
        </div>

        <div className="p-6 border-2 border-black rounded-xl bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-5px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
          <h3 className="text-2xl text-blue-700 font-bold mb-2">Win the Crowd</h3>
          <p className="text-gray-600">Spectators vote on who is cooking and who is getting cooked.</p>
        </div>
      </section>
    </div>
  )
}