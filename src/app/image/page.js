"use client";

import React, { useRef } from "react";
import { toPng } from "html-to-image";

export default function DownloadableLogo() {
  const ref = useRef(null);

  const handleDownload = async () => {
    if (!ref.current) return;
    const dataUrl = await toPng(ref.current, { width: 256, height: 256 });
    const link = document.createElement("a");
    link.download = "sugarmuse-icon.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-10">
      {/* Logo Preview */}
      <div className="mb-6 relative">
        <div
          ref={ref}
          className="
            flex items-center justify-center
            w-[256px] h-[256px]
            rounded-3xl shadow-2xl border-4 border-[#f8bbd0]
            bg-gradient-to-br from-[#3e2723] via-[#655853] to-[#ffe0b2]
            overflow-hidden
            transition-transform duration-200
            hover:scale-105
          "
          style={{
            background:
              "linear-gradient(135deg, #3e2723 10%, #655853 60%, #ffe0b2 100%)",
          }}
        >
          <span
            className="
              font-hello-paris
              text-[10.5rem] leading-none
              font-bold
              text-[#ffe0b2]
              drop-shadow-[0_8px_24px_#3e272399]
              tracking-wide
              select-none
              translate-x-1
              -translate-y-2
            "
          >
            <span className="inline-block -translate-y-4 translate-x-6 scale-x-125">
              S
            </span>
            <span className="inline-block translate-y-8 -translate-x-2">M</span>
          </span>
        </div>
        {/* Optional: Decorative Icon */}
        <div className="absolute -top-6 -right-6 opacity-70 pointer-events-none animate-pulse">
          <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="#f8bbd0" />
            <text x="24" y="33" fontSize="28" textAnchor="middle" fill="#fff">
              🍰
            </text>
          </svg>
        </div>
      </div>
      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="
          mt-3
          bg-[#f8bbd0]
          hover:bg-[#ffe0b2]
          text-[#3e2723]
          font-bold
          px-8 py-3
          rounded-full
          shadow-lg
          transition-all
          text-xl
          tracking-wide
          hover:scale-105
          focus:outline-none
          focus:ring-2 focus:ring-[#f8bbd0]/50
        "
      >
        Download as PNG
      </button>
      <p className="mt-2 text-[#8d6e63] text-sm opacity-80">
        (Click the button to download a <b>256x256px</b> PNG SugarMuse icon!)
      </p>
    </div>
  );
}
