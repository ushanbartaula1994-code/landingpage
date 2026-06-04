"use client";

import { useEffect, useState } from "react";

import AboutSection from "@/components/home/About";
import GuestsSection from "@/components/home/GuestSection";
import HeroSection from "@/components/home/HeroSection";
import MapSection from "@/components/home/MapSection";
import RegisterCard from "@/components/register/RegisterCard";

const Page = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <main className="relative">
      <div className={open ? "blur-sm pointer-events-none" : ""}>
        <HeroSection onRegister={() => setOpen(true)} />
        <AboutSection />
        <GuestsSection />
        <MapSection />
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
         
          <div className="absolute inset-0" onClick={() => setOpen(false)} />

          
          <div className="relative bg-white w-full max-w-lg rounded-xl p-6 z-10 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-sm text-white bg-red-500 px-2 rounded cursor-pointer"
            >
              close
            </button>

            
            <h2 className="text-xl font-bold mb-4">Register for Graduation</h2>

            <RegisterCard />
          </div>
        </div>
      )}
    </main>
  );
};

export default Page;
