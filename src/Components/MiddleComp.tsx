import { motion, MotionValue } from "framer-motion";
const MiddleComp = ({
  height,
  index,
}: {
  height: MotionValue<number>;
  index: MotionValue<number>;
}) => {
  return (
    <motion.div className="middle--comp" style={{ height, zIndex: index }}>
      <div className="inner--wrapper">
        <h2>December</h2>
        <ul>
          <li className="active">today</li>
          <li>Fri 18</li>
          <li>Sat 19</li>
          <li>Sun 20</li>
          <li>Mon 21</li>
        </ul>
      </div>
    </motion.div>
  );
};
export { MiddleComp };
