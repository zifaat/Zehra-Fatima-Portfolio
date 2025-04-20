import React, { ReactNode, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface SectionContainerProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  containerClassName?: string;
}

const SectionContainer = ({
  id,
  title,
  children,
  className = "",
  titleClassName = "",
  containerClassName = "",
}: SectionContainerProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id={id}
      className={`w-full py-16 md:py-24 bg-background ${className}`}
      ref={ref}
    >
      <motion.div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {title && (
          <motion.h2
            className={`text-3xl md:text-4xl font-bold mb-8 md:mb-12 ${titleClassName}`}
            variants={childVariants}
          >
            {title}
          </motion.h2>
        )}
        <motion.div variants={childVariants}>{children}</motion.div>
      </motion.div>
    </section>
  );
};

export default SectionContainer;
