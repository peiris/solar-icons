import * as React from "react";
import type { SVGProps } from "react";
const SvgMagnetWave = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M14.444 3H16.5A1.5 1.5 0 0 1 18 4.5V6a1.5 1.5 0 0 1-1.5 1.5h-2.056m0-4.5H11a9 9 0 1 0 0 18h3.444m0-18v4.5m0 0h-3.5a4.5 4.5 0 0 0 0 9h3.5m0 0H16.5A1.5 1.5 0 0 1 18 18v1.5a1.5 1.5 0 0 1-1.5 1.5h-2.056m0-4.5V21M21.5 6S23 7.8 23 12s-1.5 6-1.5 6M19.5 9s.5.9.5 3-.5 3-.5 3" />
    </svg>
  );
};
export default SvgMagnetWave;
