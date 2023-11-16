import * as React from "react";
import type { SVGProps } from "react";
const SvgSoundwave = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M12 4v16M16 7v10M8 7v10M20 11v2M4 11v2" />
    </svg>
  );
};
export default SvgSoundwave;
