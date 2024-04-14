"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Magnetic({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(ref.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const yTo = gsap.quickTo(ref.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const mouseMove = (e) => {
      const { clientX, clientY } = e;

      const { height, width, left, top } = ref.current.getBoundingClientRect();

      const x = clientX - (left + width / 2);

      const y = clientY - (top + height / 2);

      xTo(x);

      yTo(y);
    };

    const mouseLeave = (e) => {
      gsap.to(ref.current, { x: 0, duration: 1 });

      gsap.to(ref.current, { y: 0, duration: 1 });

      xTo(0);

      yTo(0);
    };

    ref.current.addEventListener("mousemove", mouseMove);

    ref.current.addEventListener("mouseleave", mouseLeave);

    return () => {
      // ref.current.removeEventListener("mousemove", mouseMove);
      // ref.current.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return React.cloneElement(children, { ref: ref });
}
