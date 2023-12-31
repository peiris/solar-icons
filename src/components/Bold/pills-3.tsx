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
        d="M9.682 12.682a4.5 4.5 0 0 1-7.62-2.432h8.875a4.48 4.48 0 0 1-1.255 2.432ZM10.937 8.75H2.063a4.5 4.5 0 0 1 8.875 0ZM14.757 7.121A3 3 0 1 0 19 2.88a3 3 0 0 0-4.243 4.242ZM20.905 12.095a3.738 3.738 0 0 1 0 5.286l-1.027 1.027v-.003l-.732-.14a4.539 4.539 0 0 1-.754-.284c-.5-.242-1.2-.672-1.95-1.422-.75-.75-1.181-1.451-1.422-1.951-.12-.25-.194-.451-.236-.583a2.393 2.393 0 0 1-.048-.17l-.141-.733h-.003l1.027-1.027a3.738 3.738 0 0 1 5.286 0ZM13.326 14.388c.009.029.018.06.03.094.06.193.16.459.313.777.307.637.832 1.48 1.712 2.36.88.88 1.723 1.405 2.36 1.712a6.045 6.045 0 0 0 .871.343l-1.231 1.231a3.738 3.738 0 0 1-5.286-5.286l1.231-1.231Z"
      />
    </svg>
  );
};
export default SvgPills3;
