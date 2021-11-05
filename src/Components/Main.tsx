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
  const image = useTransform(scrollY, [0, 1], [0, -1000]);
  const dec = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const deco = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const hei = useTransform(scrollYProgress, [0, 1], [198, 71]);
  const index = useTransform(scrollYProgress, [0, 1], [9000, 200000]);
  const height = useTransform(scrollY, [0, 1], [786, 200]);

  return (
    <AnimateSharedLayout>
      <motion.main layout>
        <motion.div className="wrap" style={{ height }}>
          <TopComp image={image} dec={dec} deco={deco} height={ height } />
          <MiddleComp height={hei} index={index} />
        </motion.div>
        <BottomComp />
      </motion.main>
    </AnimateSharedLayout>
  );
};
export { Main };
