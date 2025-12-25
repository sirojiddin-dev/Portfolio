import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import Websites from "./components/websites";

export default function Home() {
  return (
    <>
      <Hero /> 
      <Websites />
    </>
  );
}
