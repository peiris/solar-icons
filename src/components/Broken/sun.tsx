import * as React from "react";
import type { SVGProps } from "react";
const SvgSun = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M12 2v1M12 21v1M22 12h-1M3 12H2M19.07 4.93l-.392.393M5.322 18.678l-.393.393M19.07 19.07l-.392-.393M5.322 5.322l-.393-.393M6.341 10A6 6 0 1 0 10 6.341"
      />
    </svg>
  );
};
export default SvgSun;
