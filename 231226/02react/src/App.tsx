import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const Circle = styled(motion.div)`
  background: #fff;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.3);
  place-self: center;
`;

// const myVars = {
//   start: { scale: 0 },
//   end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } },
// };

const boxVariants = {
  start: { opacity: 0, scale: 0.5 },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const circleVariants = {
  start: { opacity: 0, y: -200 },
  end: {
    opacity: 1,
    y: 0,
  },
};

function App() {
  return (
    <Wrapper>
      {/* <Box variants={myVars} initial="start" animate="end" /> */}
      <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </Wrapper>
  );
}

export default App;
