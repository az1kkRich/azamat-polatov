// components/SlideInWhenVisible.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const directionVariants = {
  left: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  specialWork: {
    hidden: { opacity: 0, x: -10},
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  up: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },
};

const SlideInWhenVisible = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variant = directionVariants[direction] || directionVariants.up;

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideInWhenVisible;
