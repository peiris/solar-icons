import * as React from "react";
import type { SVGProps } from "react";
const SvgInboxIn = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        
        d="M12 2v8m0 0 3-3m-3 3L9 7"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M2 13h3.16c.905 0 1.358 0 1.756.183.398.183.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214.398.183.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183.398-.183.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214.398-.183.85-.183 1.756-.183H22"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M17 2.127c1.625.16 2.72.521 3.535 1.338C22 4.929 22 7.286 22 12s0 7.071-1.465 8.536C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.464C2 19.07 2 16.714 2 12 2 7.286 2 4.93 3.464 3.465 4.281 2.648 5.374 2.287 7 2.127"
      />
    </svg>
  );
};
export default SvgInboxIn;
