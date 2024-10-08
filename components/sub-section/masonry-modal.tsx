import React, { useContext } from "react";
import { Variants, motion } from "framer-motion";
import { Project } from "@/data/project/project-data";
import { twMerge } from "tailwind-merge";
import { ProjectContext } from "@/components/provider/project-provider";
import { RxCross2 } from "react-icons/rx";
import Masonry from "react-masonry-css";
import Image from "next/image";
import MasonryModalCard from "../trigger/display/feature-card";

interface MasonryModalProps {
  projects: Project[];
}

const PROJECT_DASHBOARD_VARIANTS: Variants = {
  hidden: {
    y: "100%",
  },
  show: {
    y: 0,
  },
};

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

const MasonryModal: React.FC<MasonryModalProps> = ({ projects }) => {
  const {
    isLearnFeature,
    isSelectingProject,
    setIsLearnFeature,
    projectIndex,
  } = useContext(ProjectContext);
  return (
    <motion.div
      className={twMerge(
        "absolute z-[21]",
        "w-screen h-screen overflow-y-scroll no-scrollbar",
        "flex flex-col gap-y-5",
        "px-5 pt-5",
        "bg-neutral-600 bg-opacity-50 backdrop-blur-lg"
      )}
      variants={PROJECT_DASHBOARD_VARIANTS}
      animate={!isSelectingProject && isLearnFeature ? "show" : "hidden"}
      initial="hidden"
      transition={{
        type: "easeInOut",
        stiffness: 500,
        damping: 30,
        delay: 0.2,
      }}
    >
      <button className="ml-auto" onClick={() => setIsLearnFeature(false)}>
        <RxCross2 size={40} className="text-white" />
      </button>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid w-full h-fit pb-8"
        columnClassName="my-masonry-grid_column"
      >
        {projects[projectIndex].Component.Dashboard.features.map(
          (feat, index) => (
            <MasonryModalCard
              key={`${projectIndex}-${index}`}
              description={feat.description}
              title={feat.title}
              video={feat.video}
              bgColor="bg-white"
              textColor={projects[projectIndex].Component.Dashboard.textColor}
              projectName={projects[projectIndex].name}
              image={
                <Image
                  src={projects[projectIndex].image.logo}
                  alt="logo"
                  width={30}
                  height={30}
                />
              }
            />
          )
        )}
      </Masonry>
    </motion.div>
  );
};

export default MasonryModal;
