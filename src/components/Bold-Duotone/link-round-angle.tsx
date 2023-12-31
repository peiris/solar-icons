import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkRoundAngle = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M2.277 7.934a6.75 6.75 0 0 0 4.397 11.513.75.75 0 0 0 .083-1.498 5.25 5.25 0 0 1-3.42-8.954l2.829-2.829a5.25 5.25 0 1 1 7.425 7.425l-1.415 1.414a.75.75 0 1 0 1.061 1.06l1.414-1.413a6.75 6.75 0 0 0-9.546-9.546L2.277 7.934Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.409 17.834a5.25 5.25 0 0 1 0-7.425l1.414-1.414a.75.75 0 1 0-1.06-1.06L9.347 9.347a6.75 6.75 0 1 0 9.546 9.546l2.829-2.828a6.75 6.75 0 0 0-4.398-11.513.75.75 0 0 0-.083 1.498 5.25 5.25 0 0 1 3.42 8.954l-2.829 2.829a5.25 5.25 0 0 1-7.424 0Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgLinkRoundAngle;
