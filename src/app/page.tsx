"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DesktopView } from "@/components/DesktopView";
import { MobileView } from "@/components/MobileView";

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [scale, setScale] = useState(1);
  const [desktopHeight, setDesktopHeight] = useState<number | undefined>(undefined);
  const [showSticky, setShowSticky] = useState(false);
  const desktopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const mobile = width < 820;
      setIsMobile(mobile);

      if (!mobile) {
        if (width < 1440) {
          const s = width / 1440;
          setScale(s);
          if (desktopRef.current) {
            setDesktopHeight(desktopRef.current.offsetHeight * s);
          }
        } else {
          setScale(1);
          setDesktopHeight(undefined);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#08080A] text-[#F6F5F3] overflow-x-hidden">
      {/* DESKTOP VIEW (>= 820px) */}
      <div
        className={
          isMobile === false
            ? "block"
            : isMobile === true
            ? "hidden"
            : "hidden md:block"
        }
        style={{
          height: desktopHeight ? `${desktopHeight}px` : undefined,
          overflow: "hidden",
        }}
      >
        <div
          ref={desktopRef}
          style={{
            transform: scale < 1 ? `scale(${scale})` : undefined,
            transformOrigin: "top center",
            width: "1440px",
            margin: "0 auto",
          }}
        >
          <DesktopView />
        </div>
      </div>

      {/* MOBILE VIEW (< 820px) */}
      <div
        className={
          isMobile === true
            ? "block"
            : isMobile === false
            ? "hidden"
            : "block md:hidden"
        }
      >
        <div className="w-full flex justify-center pb-24">
          <MobileView />
        </div>

        {/* Sticky Mobile CTA with Framer Motion from sticky.html spec */}
        <AnimatePresence>
          {showSticky && (
            <motion.div
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 90, opacity: 0 }}
              transition={{ type: "spring", stiffness: 380, damping: 26 }}
              className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                data-pencil-name="Sticky Bar"
                className="box-border w-full max-w-[390px] h-fit shrink-0 [box-shadow:0px_10px_35px_rgba(0,0,0,0.8)] flex flex-row gap-0 p-[10px_10px_10px_16px] justify-between items-center bg-[#101216]/95 backdrop-blur-md [outline:1px_solid_#2A2F36] [outline-offset:-0.5px] rounded-[999px]"
              >
                <div
                  data-pencil-name="Sticky Left"
                  className="box-border w-fit shrink-0 h-fit flex flex-col gap-[2px] justify-start items-start"
                >
                  <div
                    data-pencil-name="Sticky Price"
                    className="text-[16px]/[normal] box-border text-[#F6F5F3] font-['Inter_Tight',system-ui,sans-serif] font-bold tracking-[-0.4px] text-left [white-space:nowrap]"
                  >
                    $199 flat
                  </div>
                  <div
                    data-pencil-name="Sticky Sub"
                    className="text-[10px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    24-hour redline
                  </div>
                </div>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.04, filter: "brightness(1.1)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 450, damping: 18 }}
                  data-pencil-name="Sticky Btn"
                  className="box-border w-fit shrink-0 h-fit flex flex-row gap-[7px] p-[11px_16px] justify-start items-center [background-image:linear-gradient(180deg,_#F04A3B_0%,_#D62E23_100%)] bg-no-repeat bg-[length:100%_100%] rounded-[999px] shadow-[0_0_15px_rgba(240,74,59,0.35)] cursor-pointer"
                >
                  <span
                    data-pencil-name="Sticky Btn Label"
                    className="text-[12.5px]/[normal] box-border text-[#FFFFFF] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                  >
                    Review my contract
                  </span>
                  <svg
                    data-pencil-name="Sticky Btn Icon"
                    data-icon-name="chevron-right"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[13px] shrink-0 h-[13px]"
                  >
                    <path
                      d="M5.09619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.24268-0.04785 0.09229-0.05127 1.90381-1.8628 1.81494-1.81494 1.86279-1.9038 0.05127-0.09229 0.05127-0.25977 0-0.16748-0.04443-0.24951-0.04102-0.08545-1.85938-1.90723l-1.44238-1.42871q-0.33496-0.33496-0.46143-0.41699-0.09912-0.07178-0.19824-0.07178l-0.04102 0q-0.14014 0-0.18115 0.01367z"
                      fill="#FFFFFF"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
