import * as React from "react";
import type { SVGProps } from "react";
const SvgStethoscope = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M9 14.235V17a5 5 0 0 0 5 5h.882a4.12 4.12 0 0 0 3.964-3"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M5.429 3h-.092c-.313 0-.47 0-.601.012a3 3 0 0 0-2.724 2.724C2 5.868 2 6.024 2 6.336v.9a7 7 0 0 0 7 7 6.714 6.714 0 0 0 6.714-6.715V6.337c0-.313 0-.47-.011-.601a3 3 0 0 0-2.724-2.724C12.847 3 12.69 3 12.377 3h-.091"
      />
      <circle cx={19} cy={16} r={3} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 2v2M6 2v2"
      />
    </svg>
  );
};
export default SvgStethoscope;
