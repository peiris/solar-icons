import * as React from "react";
import type { SVGProps } from "react";
const SvgBagCross = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M3.742 20.555C4.942 22 7.174 22 11.64 22h.72c4.466 0 6.699 0 7.899-1.445m-16.517 0c-1.2-1.446-.788-3.64.035-8.03.585-3.12.877-4.681 1.988-5.603M3.742 20.555Zm16.517 0c1.2-1.446.788-3.64-.035-8.03-.585-3.12-.878-4.681-1.989-5.603m2.024 13.633ZM18.235 6.922C17.125 6 15.536 6 12.361 6h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0ZM14 12l-4 4m0-4 4 4M9 6V5a3 3 0 1 1 6 0v1" />
    </svg>
  );
};
export default SvgBagCross;
