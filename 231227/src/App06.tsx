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
  justify-content: center;
  align-items: center;
  gap: 200px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 50vw;
  div: first-child, div: last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  // width: 400px;
  height: 400px;
  background: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  // background: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const [id, setId] = useState<null | string>(null);
  const toggle = () => setClicked((prev) => !prev);
  const boxLength = [1, 2, 3, 4];
  return (
    <Wrapper onClick={toggle}>
      <Grid>
        {boxLength.map((n) => (
          // <Box onClick={() => setId(n + "")} key={n} layoutId={n + ""} />
          <Box onClick={() => setId(n + "")} key={n} layoutId={n + ""} />
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ background: "rgba(0, 0, 0, 0)" }}
            animate={{ background: "rgba(0, 0, 0, 0.5)" }}
            exit={{ background: "rgba(0, 0, 0, 0)" }}
          >
            <Box layoutId={id} style={{ width: 1400, height: 600 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
