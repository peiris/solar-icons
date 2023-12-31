import * as React from "react";
import type { SVGProps } from "react";
const SvgUserHandUp = (props: SVGProps<SVGSVGElement>) => {
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
      <path fill="currentColor" d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path
        fill="currentColor"
        d="M2.728 5.818a.75.75 0 1 0-1.455.364l.382 1.528a8.21 8.21 0 0 0 5.595 5.869v4.473c0 .898 0 1.648.08 2.242.084.628.27 1.195.726 1.65.455.456 1.022.642 1.65.726.595.08 1.344.08 2.242.08h.104c.899 0 1.648 0 2.243-.08.627-.084 1.194-.27 1.65-.726.455-.455.64-1.022.725-1.65.08-.594.08-1.344.08-2.242v-4.193a2.624 2.624 0 0 1 1.856 2.208l.65 5.52a.75.75 0 0 0 1.489-.175l-.65-5.52A4.124 4.124 0 0 0 16 12.25H8.085A6.709 6.709 0 0 1 3.11 7.346l-.382-1.528Z"
      />
    </svg>
  );
};
export default SvgUserHandUp;
