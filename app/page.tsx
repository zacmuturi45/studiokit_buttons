import React from "react";
import "./css/index.css";
import StudioKitButton from "./components/Buttons/studiokit-button-001";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col md:flex-row overflow-hidden">
      {/* IMAGE SECTION (mobile-first visual anchor) */}
      <div className="w-full md:w-1/2 order-1 md:order-2">
        <div className="relative w-full aspect-4/5 md:aspect-auto md:h-screen overflow-hidden">
          <Image
            src={"/assets/reebok.webp"}
            alt="dunya_cap"
            fill
            priority
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      {/* TEXT SECTION */}
      <div className="w-full md:w-1/2 order-2 md:order-1 flex items-center justify-center px-6 md:px-16 py-12 md:py-0">
        <div className="flex flex-col max-w-xl w-full">
          {/* Title */}
          <h4 className="text-xl md:text-2xl font-bold font-p-n-montreal tracking-tight">
            Reebok Essentials
          </h4>

          {/* Description */}
          <p className="text-sm md:text-base font-p-n-montreal tracking-wide text-black/70 mt-4 leading-relaxed">
            With roots dating back 130 years, Reebok is one of the most iconic
            and recognisable brands in fitness — and the world. Reebok is
            founded on athletic footwear that changed the direction of sport.
          </p>

          {/* Button */}
          <div className="mt-8 md:mt-12 w-full md:w-auto">
            <StudioKitButton
              href="/dummy_page"
              bg="black"
              color="white"
              title="shop now"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
