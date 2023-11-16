import * as React from "react";
import type { SVGProps } from "react";
const SvgSun = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={6} />
      <path d="M12 2v1M12 21v1M22 12h-1M3 12H2M19.07 4.93l-.392.393M5.322 18.678l-.393.393M19.07 19.07l-.392-.393M5.322 5.322l-.393-.393" />
    </svg>
  );
};
export default SvgSun;
