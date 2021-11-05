import { motion, MotionValue } from "framer-motion";
import { data } from "./data";
const BottomComp = ({ zIndex }: { zIndex: MotionValue<number> }) => {
  return (
    <motion.div className="bottom--wrapper" style={{ zIndex }}>
      <ul>
        {data.map((d) => {
          return (
            <li key={d.id}>
              <h2>{d.time}</h2>
              <p className="price">{d.price}</p>
              <p>per person</p>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};
export { BottomComp };
