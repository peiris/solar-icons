import * as React from "react";
import type { SVGProps } from "react";
const SvgTestTubeMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14.87 2.224a.76.76 0 1 0-1.078 1.072l.694.697-6.95 6.98.69.076a2.995 2.995 0 0 1 2.642 2.65c.058.53.395.985.878 1.195l1.967.816 6.22-6.246.768.772a.76.76 0 0 0 1.078-1.072l-6.91-6.94ZM4.128 14.396l2.038-2.047 1.892.211c.681.076 1.223.617 1.299 1.306.118 1.073.802 2 1.792 2.426l1.405.583-2.98 2.992a3.84 3.84 0 0 1-5.446 0 3.88 3.88 0 0 1 0-5.471Z"
      />
    </svg>
  );
};
export default SvgTestTubeMinimalistic;
