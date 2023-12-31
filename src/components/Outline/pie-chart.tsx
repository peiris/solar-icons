import * as React from "react";
import type { SVGProps } from "react";
const SvgPieChart = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14.254 1.365c-1.096-.306-2.122.024-2.851.695-.719.66-1.153 1.646-1.153 2.7v6.695a2.295 2.295 0 0 0 2.295 2.295h6.694c1.055 0 2.042-.434 2.701-1.153.67-.729 1.001-1.755.695-2.851a12.102 12.102 0 0 0-8.38-8.381ZM11.75 4.76c0-.652.27-1.232.668-1.597.386-.355.886-.508 1.433-.355 3.55.991 6.349 3.79 7.34 7.34.153.548 0 1.048-.355 1.434-.365.397-.945.667-1.597.667h-6.694a.795.795 0 0 1-.795-.795V4.761Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.672 4.716a.75.75 0 0 0-.45-1.432C4.183 4.554 1.25 8.328 1.25 12.79c0 5.501 4.46 9.961 9.96 9.961 4.462 0 8.237-2.932 9.505-6.973a.75.75 0 1 0-1.43-.45 8.465 8.465 0 0 1-8.074 5.923 8.46 8.46 0 0 1-8.461-8.46 8.465 8.465 0 0 1 5.922-8.074Z"
      />
    </svg>
  );
};
export default SvgPieChart;
