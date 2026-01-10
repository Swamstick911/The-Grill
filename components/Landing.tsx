'use client'
import Link from 'next/link'

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen bg-linear-to-br from-[#fde361] via-[#fadc64] to-[#fdde78] items-center justify-center">
      {/* 1. HERO SECTION */}
        <h1 className="text-8xl font-[family-name:var(--font-bangers)] font-extrabold italic underline decoration-double decoration-red-500 decoration-6 underline-offset-8 mb-6 text-red-600 z-10">
          THE GRILL
        </h1>
        <p className="text-4xl text-gray-700 max-w-2xl mb-28 font-semibold mt-11 z-10">
          A debate game where players have no mercy and only the best takes it all!
        </p>

        <div className="absolute top-20 left-10 rotate-12 text-6xl text-gray-500 opacity-20 animate-float delay-1">hehe</div>
        <div className="absolute bottom-32 right-10 -rotate-3 text-6xl text-red-400 opacity-20 animate-float delay-2">put off one scene 🤙</div>
        <div className="absolute top-32 right-10 rotate-45 text-6xl text-green-400 opacity-20 animate-float delay-3">@#$%^#</div>
        <div className="absolute top-40 left-80 -rotate-12 text-6xl text-amber-400 opacity-20 animate-float delay-4">yeaaa</div>
        <div className="absolute top-60 right-60 text-6xl text-cyan-400 opacity-20 animate-float delay-1">firrreeee</div>
        <div className="absolute bottom-20 left-30 -rotate-12 text-6xl text-fuchsia-400 opacity-20 animate-float delay-2">get ittt</div>
        <div className="absolute top-80 left-50 rotate-6 text-6xl text-orange-400 opacity-20 animate-float delay-3">insane brooo!!</div>
        <div className="absolute bottom-60 left-80 -rotate-12 text-6xl text-green-700 opacity-20 animate-float delay-3">FIGHT ME OVER IT</div>
        <div className="absolute top-30 right-90 rotate-20 text-6xl text-emerald-400 opacity-20 animate-float delay-3">HOW DARE YOU</div>

        {/* Main Action Button */}
        <Link 
          href="/kitchen" 
          className="z-10 bg-red-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-red-700 transition transform hover:scale-110 hover:shadow-[0px_4px_15px_0px_rgba(220,38,38,0.5)] active:scale-95"
        >
          ENTER THE KITCHEN
        </Link>
    </div>
  )
}