import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareAcademicCap2 = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M3.092 6.637 9.782 3.5a5.17 5.17 0 0 1 4.435 0l6.692 3.137c1.455.682 1.455 3.044 0 3.726L14.218 13.5a5.17 5.17 0 0 1-4.435 0L5 11.258" />
      <path d="M2.5 15v-2.862c0-1.28 0-1.92.33-2.42.33-.501.919-.753 2.094-1.257L6 8M19 11.5v5.125c0 1.008-.503 1.952-1.385 2.44C16.146 19.88 13.796 21 12 21c-1.796 0-4.146-1.121-5.615-1.934C5.504 18.577 5 17.633 5 16.626V11.5" />
    </svg>
  );
};
export default SvgSquareAcademicCap2;
