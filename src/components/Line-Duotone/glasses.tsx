import * as React from "react";
import type { SVGProps } from "react";
const SvgGlasses = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={18} cy={16} r={4} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={6} cy={16} r={4} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m14 16.214-.656-.234a3.999 3.999 0 0 0-2.688 0l-.656.234M2 16l.763-8.395c.115-1.264.173-1.896.543-2.363.37-.467.972-.668 2.176-1.07L6 4M22 16l-.763-8.395c-.115-1.264-.172-1.896-.542-2.363-.37-.467-.973-.668-2.177-1.07L18 4"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgGlasses;
