"use client";
import Image from "next/image";
import Header from "./header";
import TxtIcon from "@/public/txt.png";
import Mp4Icon from "@/public/mp4.png";
import JpgIcon from "@/public/jpg.png";
import TargetCursor from "@/components/TargetCursor";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Hero() {
    const [cursorActive, setCursorActive] = useState(false);
    return (
        <section
            className="h-[100vh] relative bg-black"
            onMouseEnter={() => setCursorActive(true)}
            onMouseLeave={() => setCursorActive(false)}
        >
           {cursorActive && (
                <TargetCursor
                    spinDuration={2}
                    hideDefaultCursor={true}
                    parallaxOn={true}
                />
            )} 
            <Header />
            <div className="w-[850px] mx-auto mt-44 text-center">
                <div>
                    <h2 className="w-full text-4xl font-bbh p-4 border-dashed border-[2px] border-gray-500 inline-block text-white">
                        Программист.
                        Видеомонтажер.
                        Редактор фото.
                    </h2>
                </div>
                <div className="grid grid-cols-[2fr_3fr_2fr]">
                    <div className="hover:bg-blue-400/30 transition border-dashed border-[2px] border-gray-500 inline-block border-t-0 border-r-0"></div>
                    <h3 className="cursor-target text-6xl font-bbh p-4 border-dashed border-[2px] border-gray-500 inline-block border-t-0 text-gray-300">SIROJIDDIN</h3>
                    <div className="hover:bg-blue-400/30 transition border-dashed border-[2px] border-gray-500 inline-block border-t-0 border-l-0"></div>
                </div>
                <div className="w-full h-20 border-dashed border-[2px] border-gray-500 border-t-0 flex items-center justify-center gap-12">
                    <Link href={"#websites"}>
                        <div className="cursor-target border-dashed border-[2px] border-transparent transition hover:bg-blue-400/20 rounded-sm w-[52px] h-[52px] flex items-center justify-center">
                            <Image src={TxtIcon} alt="Logo" width={42} height={42} />
                        </div>
                    </Link>
                    <Link href={"#edits"}>
                        <div className="cursor-target border-dashed border-[2px] border-transparent transition hover:bg-blue-400/20 rounded-sm w-[52px] h-[52px] flex items-center justify-center">
                            <Image src={Mp4Icon} alt="Logo" width={42} height={42} />
                        </div>
                    </Link>
                    <Link href={"#photos"}>
                        <div className="cursor-target border-dashed border-[2px] border-transparent transition hover:bg-blue-400/20 rounded-sm w-[52px] h-[52px] flex items-center justify-center">
                            <Image src={JpgIcon} alt="Logo" width={42} height={42} />
                        </div>
                    </Link>
                </div>
                <div className="flex items-center justify-center gap-4 mt-14">
                    <Link href={"#contact"}>
                        <Button variant={"outline"} size={"lg"} className="cursor-target">Contact</Button>
                    </Link>
                    <Link href={"/shop"}>
                        <Button variant={"default"} size={"lg"} className="cursor-target border-2 border-gray-400">Shop</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}