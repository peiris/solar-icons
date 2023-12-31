import * as React from "react";
import type { SVGProps } from "react";
const SvgPills3 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14.757 7.121A3 3 0 1 0 19 2.88a3 3 0 0 0-4.243 4.242ZM20.905 17.381a3.738 3.738 0 0 0-5.286-5.286l-3.524 3.524a3.738 3.738 0 0 0 5.286 5.286l3.524-3.524Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M19.878 18.408v-.003l-.732-.14a4.539 4.539 0 0 1-.754-.284c-.5-.242-1.2-.672-1.95-1.422-.75-.75-1.18-1.451-1.422-1.951-.12-.25-.194-.451-.236-.583a3.16 3.16 0 0 1-.048-.17l-.141-.733h-.003l-1.266 1.266c.009.029.018.06.03.094.06.193.16.459.313.777.307.637.832 1.48 1.712 2.36.88.88 1.723 1.405 2.36 1.712a6.04 6.04 0 0 0 .871.343l1.266-1.266ZM9.727 12.682a4.61 4.61 0 0 1-6.454 0A4.458 4.458 0 0 1 2 10.25h9a4.458 4.458 0 0 1-1.273 2.432ZM11 8.75H2a4.458 4.458 0 0 1 1.273-2.432 4.61 4.61 0 0 1 6.454 0A4.458 4.458 0 0 1 11 8.75Z"
      />
    </svg>
  );
};
export default SvgPills3;
