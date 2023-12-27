import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Box = styled(motion.div)`
  width: 500px;
  height: 500px;
  background: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 800;
  position: absolute;
  top: 200px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
  gap: 10px;
  margin-bottom: 150px;
`;

const ButtonP = styled.button`
  // position: absolute;
  // bottom: 160px;
  padding: 10px 35px;
  border-radius: 10px;
  border: none;
`;

const ButtonN = styled.button`
  // position: absolute;
  // bottom: 160px;
  padding: 10px 35px;
  border-radius: 10px;
  border: none;
`;

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const boxLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const box = {
    initial: (back: boolean) => ({
      x: back ? -500 : 500,
      opacity: 0,
      scale: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    exits: (back: boolean) => ({
      x: back ? 500 : -500,
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.5,
      },
    }),
  };
  return (
    <Wrapper>
      <AnimatePresence custom={back}>
        {boxLength.map((i) =>
          i === visible ? (
            <Box
              custom={back}
              variants={box}
              initial="initial"
              animate="visible"
              exit="exits"
              key={i}
            >
              {i}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <ButtonGroup>
        <ButtonP onClick={prevPlease}>prev</ButtonP>
        <ButtonN onClick={nextPlease}>next</ButtonN>
      </ButtonGroup>
    </Wrapper>
  );
}

export default App;
