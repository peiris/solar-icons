import * as React from "react";
import type { SVGProps } from "react";
const SvgSpeakerMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        fill="currentColor"
        d="M4 10c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172C20 4.343 20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828C17.657 22 15.771 22 12 22c-3.771 0-5.657 0-6.828-1.172C4 19.657 4 17.771 4 14v-4Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M10 5.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 9.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSpeakerMinimalistic;
