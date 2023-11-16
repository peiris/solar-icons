import * as React from "react";
import type { SVGProps } from "react";
const SvgVolumeKnob = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={5} />
      <path d="M12 7v4M13 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM20.5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM3.5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM6.697 5.282a1 1 0 1 1-1.414 1.415 1 1 0 0 1 1.414-1.415ZM18.717 17.303a1 1 0 1 1-1.414 1.415 1 1 0 0 1 1.414-1.415ZM18.717 6.697a1 1 0 1 1-1.414-1.415 1 1 0 0 1 1.414 1.415ZM6.697 18.718a1 1 0 1 1-1.414-1.415 1 1 0 0 1 1.414 1.415Z" />
    </svg>
  );
};
export default SvgVolumeKnob;
