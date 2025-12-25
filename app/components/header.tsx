import Image from "next/image";
import LogoWhite from "@/public/logo-white.png"
import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky bg-black/70 backdrop-blur-sm top-0 container mx-auto px-16 pt-12 pb-6">
      <header className="text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link className="cursor-target " href="/">
              <Image src={LogoWhite} alt="Logo" width={42} height={42} />
            </Link>
            <h2 className="font-bbh text-4xl font-bold tracking-[-2px]">SIROJIDDIN</h2>
          </div>  
          <nav className="flex gap-26">
            <Link className="cursor-target p-2 font-mono" href="/shop">Shop</Link>
            <Link className="cursor-target p-2 font-mono" href="#portfolio">Porfolio</Link>
            <Link className="cursor-target p-2 font-mono" href="#contact">Contact</Link>
          </nav>
      </header>
    </div>
  );
}