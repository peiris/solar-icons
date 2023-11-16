import * as React from "react";
import type { SVGProps } from "react";
const SvgUserPlusRounded = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={6} r={4} />
      <circle cx={17} cy={18} r={4} />
      <path d="M17 16.667v2.666M15.667 18h2.666M14 20.834c-.634.108-1.305.166-2 .166-3.866 0-7-1.79-7-4s3.134-4 7-4c1.713 0 3.283.352 4.5.936" />
    </svg>
  );
};
export default SvgUserPlusRounded;
