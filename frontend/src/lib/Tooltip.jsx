import React from "react";
import ReactDOM from "react-dom";

import styled from "styled-components/macro";

const StyledTooltip = styled.div`
  position: fixed;
  background: #000;
  padding: 4px 8px;
  font-size: 14px;
  color: #fff;

  left: ${({ left }) => `${left}px`};
  top: ${({ top }) => `${top}px`};
  max-width: calc(100vw - 50px);

  ${({ show }) => !show && "visibility: hidden;"}
`;

const Tooltip = (props) => {
  const { children, ...pos } = props;
  const [innerPos, setPos] = React.useState(pos);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const current = ref.current;
    if (current) {
      setPos({
        top: pos.top,
        left: pos.left - current.offsetWidth / 2,
        show: true,
      });
    }
  }, [ref]);
  return (
    <StyledTooltip {...innerPos} ref={ref}>
      {children}
    </StyledTooltip>
  );
};

export const useTooltip = (message) => {
  const ref = React.useRef(null);

  const shift = 4;
  let container = null;

  const hoverHandler = (current, flag) => {
    if (flag) {
      container = document.createElement("div");
      document.body.append(container);
      const { top, left } = current.getBoundingClientRect();
      const pos = {
        top: top + current.offsetHeight + shift,
        left: left + current.offsetWidth / 2,
      };
      ReactDOM.render(<Tooltip {...pos}>{message}</Tooltip>, container);
    } else {
      if (container) {
        container.remove();
      }
    }
  };

  React.useEffect(() => {
    const current = ref.current;
    if (current) {
      current.addEventListener("mouseover", () => hoverHandler(current, true));
      current.addEventListener("mouseout", () => hoverHandler(current, false));
    }
    return () => {
      if (container) {
        container.remove();
      }
    };
  }, []);

  return ref;
};
