import { useEffect } from "react";
import { animate } from "framer-motion";

export default function SmoothScroll() {
  useEffect(() => {
    let currentY = window.scrollY;
    let targetY = currentY;
    let controls;

    const handleWheel = (e) => {
      e.preventDefault(); // prevent default jumpy scroll
      targetY += e.deltaY;
      targetY = Math.max(0, targetY); // keep above top

      if (controls) controls.stop(); // stop old animation

      controls = animate(currentY, targetY, {
        type: "spring",
        stiffness: 120,   // higher = snappier
        damping: 20,      // lower = more bouncy
        mass: 0.5,        // controls inertia
        onUpdate: (latest) => {
          window.scrollTo(0, latest);
          currentY = latest;
        },
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return null;
}
