import * as React from "react";
import type { SVGProps } from "react";
const SvgUserHands = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      strokeWidth={props.strokeWidth ? props.strokeWidth : 1.5}
      width={24}
      height={24}
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM8 12.25a4.124 4.124 0 0 0-4.095 3.642l-.65 5.52a.75.75 0 0 0 1.49.176l.65-5.52a2.624 2.624 0 0 1 1.855-2.209v4.193c0 .899 0 1.648.08 2.242.084.628.27 1.195.726 1.65.455.456 1.022.642 1.65.726.594.08 1.344.08 2.242.08h.104c.899 0 1.648 0 2.243-.08.627-.084 1.194-.27 1.65-.726.455-.455.64-1.022.725-1.65.08-.594.08-1.343.08-2.242v-4.193a2.624 2.624 0 0 1 1.856 2.208l.65 5.52a.75.75 0 1 0 1.489-.175l-.65-5.52A4.124 4.124 0 0 0 16 12.25H8Z"
      />
    </svg>
  );
};
export default SvgUserHands;
