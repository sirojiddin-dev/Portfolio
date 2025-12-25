"use client";
import TargetCursor from "@/components/TargetCursor";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Websites() {
    return (
        <>
            <div className="container mx-auto p-16 cursor-default">
                <div className="flex items-center justify-between">
                    <h2 className="font-mono font-bold text-7xl">Websites</h2>
                    <Button size={"lg"} variant={"outline"}>All <ArrowUpRight/></Button>
                </div>

            </div>
        </>
    );
}