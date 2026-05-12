import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-10 h-10 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 15 C22 10 27 6 32 6 L42 6 C47 6 52 10 52 15 L52 85 C52 90 47 94 42 94 L32 94 C27 94 22 90 22 85 Z" fill="#2563EB"/>
        <path d="M45 55 L85 10 C90 5 100 5 100 15 L75 50 Z" fill="#3B82F6"/>
        <path d="M45 45 L100 85 C100 95 90 95 85 90 L65 60 L45 45 Z" fill="#1E88FF"/>
      </svg>
      <div className="flex flex-col justify-center mt-1">
        <span className="font-display font-black text-[26px] tracking-[0.08em] text-[#0A1F44] leading-none mb-1">KAIROS</span>
        <div className="flex items-center gap-1.5 w-full">
          <div className="h-[1.5px] bg-[#1E88FF] flex-1"></div>
          <span className="text-[#1E88FF] text-[10px] font-bold tracking-[0.35em] leading-none">TECH</span>
          <div className="h-[1.5px] bg-[#1E88FF] flex-1"></div>
        </div>
      </div>
    </Link>
  );
}

export function LogoWhite({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
       <svg viewBox="0 0 100 100" className="w-10 h-10 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 15 C22 10 27 6 32 6 L42 6 C47 6 52 10 52 15 L52 85 C52 90 47 94 42 94 L32 94 C27 94 22 90 22 85 Z" fill="#2563EB"/>
        <path d="M45 55 L85 10 C90 5 100 5 100 15 L75 50 Z" fill="#3B82F6"/>
        <path d="M45 45 L100 85 C100 95 90 95 85 90 L65 60 L45 45 Z" fill="#1E88FF"/>
      </svg>
      <div className="flex flex-col justify-center mt-1">
        <span className="font-display font-black text-[26px] tracking-[0.08em] text-white leading-none mb-1">KAIROS</span>
        <div className="flex items-center gap-1.5 w-full">
          <div className="h-[1.5px] bg-[#1E88FF] flex-1"></div>
          <span className="text-[#1E88FF] text-[10px] font-bold tracking-[0.35em] leading-none">TECH</span>
          <div className="h-[1.5px] bg-[#1E88FF] flex-1"></div>
        </div>
      </div>
    </Link>
  );
}
