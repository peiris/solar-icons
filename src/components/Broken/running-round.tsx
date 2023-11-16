import * as React from "react";
import type { SVGProps } from "react";
const SvgRunningRound = (props: SVGProps<SVGSVGElement>) => {
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
      <circle
        cx={18.5}
        cy={4.5}
        r={2.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14.4 22V21.04a7 7 0 0 0-2.837-5.554c-.04-.03-.06-.045-.075-.058a2 2 0 0 1-.136-3.022l.07-.064 1.04-.946c1.628-1.479 1.133-4.153-.916-4.95a2.962 2.962 0 0 0-2.271.05l-.522.23M5.44 8.61 4 9.636M9 17l-.26.311A7.473 7.473 0 0 1 3 20M16 12a8.246 8.246 0 0 0 4 0"
      />
    </svg>
  );
};
export default SvgRunningRound;
