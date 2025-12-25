// Tools
import Next from "@/public/tools/nextjs.png"
import TypeScript from "@/public/tools/typescript.png"
import TailwindCSS from "@/public/tools/tailwindcss.png"
import FramerMotion from "@/public/tools/framermotion.png"
import Shadcn from "@/public/tools/shadcn.png"
// Posters
import PaperUzbekhub from "@/public/websites/PaperUzbekhub.jpg"
import UzbekhubMessenger from "@/public/websites/MessagerUzbekhub.jpg"

export const websites = [
    {
        name: "Paper Uzbekhub",
        url: "https://paper.uzbekhub.uz",
        description: `Paper is a creative platform by UzBkeHub where messages become paper airplanes flying around the Earth.
Anyone can send a short message, release it into the world, and let others read it — anonymously.

No profiles. No likes. No pressure.
Just thoughts, feelings, ideas, and moments shared in the most human way.

Paper connects people through simplicity, curiosity, and motion — turning words into something you can feel.`,
        image: PaperUzbekhub,
        tools: [Next, TypeScript, TailwindCSS, FramerMotion, Shadcn]
    },
    {
        name: "Uzbekhub messenger",
        url: "https://uzbekhub.uz",
        description: `UzbekHub is a focused messenger built for real communities.
A place where developers talk to developers, designers to designers, and creators to creators — without noise.

No external links. No switching platforms.
Conversations live here, inside one ecosystem.

UzbekHub brings people together by interest, not algorithms — creating meaningful discussions, collaboration, and growth.`,
        image: UzbekhubMessenger,
        tools: [Next, TypeScript, TailwindCSS, FramerMotion, Shadcn]
    },
]