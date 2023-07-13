'use client'
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Services } from "@/components/Services";
import {BeforeAfter} from "@/components/BeforeAfter";
import { PackageDetails } from "@/components/PackageDetails";
import { Hospital } from "@/components/Hospital";
import { Faq } from "@/components/Faq";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Header />
      <HeroSection />
      <Services />
      <BeforeAfter />
      <PackageDetails />
      <Hospital />
      <Faq />
      <CallToAction />
      <Footer />
    </main>
  )
}
