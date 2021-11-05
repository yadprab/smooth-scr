import { motion, MotionValue } from "framer-motion";
import IMG from "../images/vr.png";
const TopComp = ({
  image,
  height,
}: {
  image: MotionValue<number>;
  
  height: MotionValue<number>;
}) => {
  return (
    <motion.div
      className="top--wrapper"
      style={{ height }}
      transition={{ delay: 0.5, duration: 1.5 }}
    >
      <motion.img src={IMG} alt="" style={{ y: image }} />
      <motion.h1 style={{ y: image }}>
        <span>VR-</span>
        <span> CITY R</span>
      </motion.h1>

    
    </motion.div>
  );
};
export { TopComp };
