import { motion, MotionValue } from "framer-motion";
const MiddleComp = ({
  height,
  index,
  y,
  opacity,
  width,
  y2,
  color,
  radius,
}: {
  height: MotionValue<number>;
  index: MotionValue<number>;
  y: MotionValue<number>;
  y2: MotionValue<number>;
  opacity: MotionValue<number>;
  width: MotionValue<number>;
  color: MotionValue<string>;
  radius: MotionValue<number>;
}) => {
  return (
    <motion.div
      className="middle--comp"
      style={{
        height,
        zIndex: index,
        maxWidth: width,
        y: y2,
        borderRadius: radius,
      }}
    >
      <div className="inner--wrapper">
        <motion.h2 style={{ y, opacity, color }}>December</motion.h2>
        <motion.ul style={{ y: y2 }}>
          <li className="active">today</li>
          <li>Fri 18</li>
          <li>Sat 19</li>
          <li>Sun 20</li>
          <li>Mon 21</li>
        </motion.ul>
      </div>
    </motion.div>
  );
};
export { MiddleComp };
