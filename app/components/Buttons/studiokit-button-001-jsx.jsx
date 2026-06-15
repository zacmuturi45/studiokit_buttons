import React, { useEffect, useRef, useState } from "react";
import "../../css/index.css";

export default function StudioKitButtonJsx({
  title = "shop women",
  bg = "#000000",
  color = "#ffffff",
  href = "/",
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const shaftRef = useRef(null);
  const arrowBoxRef = useRef(null);
  const [restWidth, setRestWidth] = useState(null);
  const [expandedWidth, setExpandedWidth] = useState(null);
  const [totalWidth, setTotalWidth] = useState(null);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    setIsMobile(mq.matches);

    const handler = (e) => setIsMobile(e.matches);
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

  // Helper variables to handle state conditional inline styles smoothly
  const calculatedShaftWidth = restWidth
    ? isHovered && expandedWidth && !isMobile
      ? expandedWidth
      : restWidth
    : undefined;

  const arrowBoxBg = isMobile ? bg : isHovered ? "#ffffff" : bg;
  const arrowBoxTransform = isMobile
    ? "translateX(0px) scale(1) rotate(0deg)"
    : isHovered
      ? "translateX(-8px) scale(0.8) rotate(90deg)"
      : "translateX(0px) scale(1) rotate(0deg)";

  const svgTransform = isMobile
    ? "rotate(-45deg)"
    : isHovered
      ? "rotate(-135deg)"
      : "rotate(-45deg)";

  const svgColor = isMobile ? "#ffffff" : isHovered ? "#000000" : "#ffffff";

  return (
    <a href={href} className="studiokit-link-wrapper">
      <div
        className={`studiokit-button-container ${isHovered ? "is-hovered" : ""} ${isMobile ? "is-mobile" : ""}`}
        style={{ width: totalWidth ?? "auto" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Shaft */}
        <div
          ref={shaftRef}
          style={{
            width: calculatedShaftWidth,
            backgroundColor: bg,
          }}
          className="studiokit-button-shaft"
        >
          <span className="studiokit-text-wrapper">
            {[...title].map((char, index) => (
              <span
                key={index}
                style={{
                  transitionDelay: `${index * 0.01}s`,
                  color: color,
                }}
                className="studiokit-char"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </div>

        {/* Arrow box */}
        <div
          ref={arrowBoxRef}
          style={{
            backgroundColor: arrowBoxBg,
            transform: arrowBoxTransform,
          }}
          className="studiokit-arrow-box"
        >
          <svg
            style={{
              transform: svgTransform,
              color: svgColor,
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
    </a>
  );
}
