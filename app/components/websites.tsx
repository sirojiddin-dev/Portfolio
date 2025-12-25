"use client";
import TargetCursor from "@/components/TargetCursor";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { websites } from "../data/websites";
import Image from "next/image";
import Link from "next/link";

export default function Websites() {
    return (
        <>
            <div id="websites" className="container mx-auto p-16 cursor-default">
                <div className="flex items-center justify-between">
                    <h2 className="font-mono font-bold text-7xl">Websites</h2>
                    <Button size={"lg"} variant={"outline"}>All <ArrowUpRight/></Button>
                </div>
                <div className="grid grid-cols-3 gap-8 mt-16">
                    {
                        websites.map((website) => (
                            <div key={website.url} className="shadow-lg rounded-[35px] hover:scale-[1.02] transition-transform duration-300">
                                <Link href={website.url} target="_blank" rel="noopener noreferrer">
                                    <div className="rounded-[35px] relative">
                                        <Image src={website.image} alt={website.name} className="w-full h-full rounded-[35px]" />
                                        <div className="absolute inset-0 bg-black/50 hover:opacity-100 opacity-0 backdrop-blur-[2px] transition duration-700 rounded-[35px] flex items-center justify-center">
                                            <div className="w-14 h-14 flex items-center rounded-md bg-black/70">
                                                <ArrowUpRight size={42} className="ml-2 text-white"/>
                                            </div>    
                                        </div>
                                    </div>
                                </Link>
                                <h3 className="text-2xl mt-6 px-7 font-medium">{website.name}</h3>
                                <Link href={`/${website.name}`}>
                                    <p className="px-7 mb-6 text-gray-700">read more</p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}