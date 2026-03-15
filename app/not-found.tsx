import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#8B0000] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Chess pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-conic-gradient(#ffffff 0% 25%, transparent 0% 50%)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Large piece */}
      <div className="absolute opacity-5 font-display text-[400px] leading-none select-none pointer-events-none text-white">
        ♟
      </div>

      <div className="relative z-10 text-center max-w-lg">
        <p className="text-[#C9A84C] font-display font-black text-8xl md:text-9xl mb-4 leading-none">
          404
        </p>
        <h1 className="font-display font-black text-white text-2xl md:text-3xl mb-3">
          This Square Does Not Exist
        </h1>
        <p className="text-white/65 font-body text-base leading-relaxed mb-8">
          Looks like you moved your piece off the board. Let&apos;s get you back
          in the game.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#8B0000] font-body font-bold text-base rounded tracking-wide hover:bg-[#e8c96a] transition-colors shadow-lg"
        >
          ← Go Back Home
        </Link>
      </div>
    </div>
  );
}
