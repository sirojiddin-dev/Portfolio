import Image from "next/image";
import LogoWhite from "@/public/logo-white.png"
import Link from "next/link";

export default function Header() {
  return (
    <div className="container mx-auto px-16 pt-12">
      <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image src={LogoWhite} alt="Logo" width={42} height={42} />
            </Link>
            <h2 className="font-bbh text-4xl font-bold tracking-[-2px]">SIROJIDDIN</h2>
          </div>  
          <nav className="flex gap-32">
            <Link className="font-mono" href="/shop">Shop</Link>
            <Link className="font-mono" href="#portfolio">Porfolio</Link>
            <Link className="font-mono" href="#contact">Contact</Link>
          </nav>
      </header>
    </div>
  );
}