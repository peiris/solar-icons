import * as React from "react";
import type { SVGProps } from "react";
const SvgEmojiFunnyCircle = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M8.913 15.934c1.258.315 2.685.315 4.122-.07 1.437-.385 2.673-1.099 3.605-2.001"
      />
      <ellipse
        cx={14.509}
        cy={9.774}
        fill="currentColor"
        rx={1}
        ry={1.5}
        transform="rotate(-15 14.51 9.774)"
      />
      <ellipse
        cx={8.714}
        cy={11.328}
        fill="currentColor"
        rx={1}
        ry={1.5}
        transform="rotate(-15 8.714 11.328)"
      />
      <path
        stroke="currentColor"
        
        d="m13 16 .478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M4.928 4.927A9.954 9.954 0 0 1 9.412 2.34C14.746.91 20.23 4.077 21.659 9.411c1.43 5.335-1.736 10.818-7.07 12.248-5.335 1.43-10.819-1.737-12.248-7.071a9.954 9.954 0 0 1-.002-5.176"
      />
    </svg>
  );
};
export default SvgEmojiFunnyCircle;
