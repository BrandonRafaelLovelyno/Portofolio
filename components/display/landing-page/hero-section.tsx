"use client";

import { motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import Reveal from "../../animation/reveal";

const Title = [
  " Quantum echoes whispered through cosmic dimensions.",
  " Ethereal harmonies danced on celestial frequencies.",
  " Time's tapestry weaved tales of astral symphony.",
];

interface HeroProps {
  hide: boolean;
}

const Hero: React.FC<HeroProps> = ({ hide }) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (index == Title.length - 1) {
      setTimeout(() => setIndex(0), 3000);
    } else {
      setTimeout(() => setIndex(index + 1), 3000);
    }
  }, [index]);

  const title = useMemo(() => {
    return Title[index];
  }, [index]);

  return (
    <>
      <Reveal
        hide={hide}
        childrenDir="up"
        width="w-fit"
        isBlock={true}
        blockColor="bg-secondary"
        blockDir="right"
      >
        <p className="w-[80%] text-7xl font-semibold italic">
          Brandon Rafael Lovelyno
        </p>
      </Reveal>
      <Reveal
        hide={hide}
        childrenDir="up"
        width="w-fit"
        isBlock={true}
        blockColor="bg-secondary"
        blockDir="right"
      >
        <motion.p
          key={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-secondary w-[80%] text-3xl"
        >
          {title}
        </motion.p>
      </Reveal>
    </>
  );
};

export default Hero;
