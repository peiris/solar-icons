import * as React from "react";
import type { SVGProps } from "react";
const SvgSkateboardingRound = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m3 17 .608.676A4 4 0 0 0 6.581 19H17.42a4 4 0 0 0 2.973-1.324L21 17"
      />
      <circle cx={7} cy={21} r={1} fill="currentColor" />
      <circle cx={17} cy={21} r={1} fill="currentColor" />
      <circle cx={19} cy={4} r={2} stroke="currentColor"  />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M15 16.5v-2.133a1.85 1.85 0 0 0-.666-1.422l-.996-.83a1.59 1.59 0 0 1-.106-2.346l1.654-1.654a1.067 1.067 0 0 0-.335-1.736 4.269 4.269 0 0 0-3.943.304L8.5 8M11 14l-.621.621c-.434.434-.65.65-.926.765-.276.114-.583.114-1.196.114H7M16.5 10h3"
      />
    </svg>
  );
};
export default SvgSkateboardingRound;
