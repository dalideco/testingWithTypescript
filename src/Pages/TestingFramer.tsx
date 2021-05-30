import React, { useState } from "react";
import { motion,useMotionValue ,useTransform} from "framer-motion";


const LittleComponent: React.FC = ()=>{
    const x = useMotionValue(0)
    const input = [-200, 0, 200]
    const output = [0, 1, 0]
    const opacity = useTransform(x, input, output)

    return <motion.div drag={true} style={{ x, opacity }} dragConstraints={{top:0,left:0,right:0,bottom:0}}
        dragElastic={0.9} >hello </motion.div>
}

const TestingFramer: React.FC = () => {
  const [shown, setShown] = useState<Boolean>(false);
  return (
    <>
      {/* <motion.button
        whileHover={{scale:1.2}}
      >
        hover me
      </motion.button>

      <motion.div
        drag={true}
        dragMomentum={false}
        dragElastic={0.9}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
          drague moi
      </motion.div> */}
      {/* <LittleComponent/> */}
      
    </>
  );
};

export default TestingFramer;
