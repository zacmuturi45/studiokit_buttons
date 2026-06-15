"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface buttonProps {
  title: string;
  bg: string;
  color: string;
  href: string;
}

export default function StudioKitButton({
  title = "shop women",
  bg = "#000000",
  color = "#ffffff",
  href = "/",
}: buttonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const shaftRef = useRef<HTMLDivElement>(null);
  const arrowBoxRef = useRef<HTMLDivElement>(null);
  const [restWidth, setRestWidth] = useState<number | null>(null);
  const [expandedWidth, setExpandedWidth] = useState<number | null>(null);
  const [totalWidth, setTotalWidth] = useState<number | null>(null);

  useEffect(() => {
    /* This is the browser's native media query API - the same thing CSS uses for @media - but called from JavaScript. (pointer: coarse) is a media feature that asks: "is the primary pointer device low-precision?"
    A finger on a touchscreen is coarse. A mouse or trackpad is fine. This is more reliable than checking screen width because it describes how the user is interacting, now how big their screen is. A tablet in landscape mode could be wide enough to pass a desktop breakpoint but its pointer is still coarse.
    */
    const mq = window.matchMedia("(pointer: coarse)");

    /*
    mq.matches - matchMedia returns a MediaQueryList object. Its .matches property is a boolean - true if the media query currently applies. So setIsMobiel(mq.matches) sets the initial state synchronously on mount, before any interaction happens. 
    */
    setIsMobile(mq.matches);

    /*
    The handler & addEventListener
    MediaQueryList fires a change event whenever the query's result flips - e.g. a user connects a mouse to their tablet, switching the pointer from coarse to fine. The handler updates isMobile reactively when that happens. e.matches on the event is the new currrent value, same shape as mq.matches
    */
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (shaftRef.current && arrowBoxRef.current) {
      const shaftWidth = shaftRef.current.offsetWidth;
      const arrowWidth = arrowBoxRef.current.offsetWidth;
      const gap = 4;
      setRestWidth(shaftWidth);
      setExpandedWidth(shaftWidth + arrowWidth - gap);
      setTotalWidth(shaftWidth + gap + arrowWidth);
    }
  }, []);

  return (
    <Link href={href}>
      <div
        className="group relative flex cursor-pointer"
        style={{ width: totalWidth ?? "auto" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Shaft */}
        <div
          ref={shaftRef}
          style={{
            width: restWidth
              ? isHovered && expandedWidth && !isMobile
                ? expandedWidth
                : restWidth
              : undefined,
            transition: "width 450ms cubic-bezier(0.625,0.05,0,1)",
            backgroundColor: bg,
          }}
          className="text-white font-bold font-p-n-montreal tracking-wide inline-flex items-center text-sm h-10 uppercase overflow-hidden px-4 py-3 z-1"
        >
          <span className="relative inline-flex overflow-hidden leading-none">
            {[...title].map((char, index) => (
              <span
                key={index}
                style={{ transitionDelay: `${index * 0.01}s`, color: color }}
                className={`
                  inline-block
                  [text-shadow:0_1.2em_currentColor]
                  ${!isMobile ? "transition-transform duration-450 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-[1.2em]" : ""}
                `}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </div>

        {/* Arrow box — fixed to right edge, doesn't move */}
        {/* Arrow box — fixed to right edge, doesn't move */}
        <div
          ref={arrowBoxRef}
          style={{
            backgroundColor: isMobile ? bg : isHovered ? "#ffffff" : bg,
            transform: isMobile
              ? "translateX(0px) scale(1) rotate(0deg)"
              : isHovered
                ? "translateX(-8px) scale(0.8) rotate(90deg)"
                : "translateX(0px) scale(1) rotate(0deg)",
            transition: isHovered
              ? "background-color 300ms ease 100ms, transform 450ms cubic-bezier(0.625,0.05,0,1)"
              : "background-color 300ms ease 0ms, transform 450ms cubic-bezier(0.625,0.05,0,1)",
          }}
          className="z-2 absolute right-0 top-0 bottom-0 flex justify-center items-center w-10 p-0 h-10"
        >
          <svg
            style={{
              transform: isMobile
                ? "rotate(-45deg)"
                : isHovered
                  ? "rotate(-135deg)"
                  : "rotate(-45deg)",
              transition: isHovered
                ? "transform 400ms cubic-bezier(0.625,0.05,0,1), color 150ms ease 100ms"
                : "transform 400ms cubic-bezier(0.625,0.05,0,1), color 150ms ease 0ms",
              color: isMobile ? "#ffffff" : isHovered ? "#000000" : "#ffffff",
            }}
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M10,0 L8.565,1.393 L16.172,9 L0,9 L0,11 L16.172,11 L8.586,18.586 L10,20 C13.661,16.339 16.496,13.504 20,10 L10,0"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
