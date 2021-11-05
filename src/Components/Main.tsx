import {
  AnimateSharedLayout,
  motion,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { BottomComp } from "./BottomComp";
import { MiddleComp } from "./MiddleComp";
import { TopComp } from "./TopComp";
const Main = () => {
  const { scrollYProgress, scrollY } = useViewportScroll();
  const image = useTransform(scrollYProgress, [0, 1], [0, -1000]);
    const image2 = useTransform(scrollYProgress, [0, 1], [-100, -1000]);

  const hei = useTransform(scrollYProgress, [0, 1], [198, 71]);
  const index = useTransform(scrollYProgress, [0, 1], [9000, 200000]);
  const height = useTransform(scrollYProgress, [0, 1], [486, 200]);
  const h2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity2 = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const width = useTransform(scrollYProgress, [0, 1], [480, 342]);
  const y = useTransform(scrollY, [0, 1], [0, -30]);
    const radius = useTransform(scrollY, [0, 1], [0, 10]);
  const color = useTransform(scrollYProgress, [0, 1], ["#FBF5FE", "#000000"]);
    const index2 = useTransform(scrollY, [0, 1], [10000, -10000]);

  return (
    <AnimateSharedLayout>
      <motion.main layout>
        <motion.div className="wrap" style={{ height }}>
          <TopComp image={image} height={height} image2={image2} />
          <MiddleComp
            height={hei}
            index={index}
            y={h2}
            opacity={opacity2}
            width={width}
            y2={y}
            color={color}
            radius={radius}
          />
        </motion.div>
        <motion.div className="wrap2">
          <BottomComp zIndex={index2} />
        </motion.div>
      </motion.main>
    </AnimateSharedLayout>
  );
};
export { Main };
