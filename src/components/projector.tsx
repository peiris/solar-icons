import * as React from "react";
import type { SVGProps } from "react";
const SvgProjector = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M18 6.017c1.553.047 2.48.22 3.121.862C22 7.757 22 9.172 22 12c0 2.828 0 4.243-.879 5.121C20.243 18 18.828 18 16 18H8c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12c0-2.828 0-4.243.879-5.121C3.757 6 5.172 6 8 6h2" />
      <path d="M18.33 20.335a.75.75 0 1 0 1.34-.67l-1.34.67Zm-1-2 1 2 1.34-.67-1-2-1.34.67ZM5.67 20.335a.75.75 0 1 1-1.34-.67l1.34.67Zm1-2-1 2-1.34-.67 1-2 1.34.67Z" />
      <circle cx={14} cy={9} r={5} />
      <path d="M12 9a2 2 0 1 0 2-2M5.5 9.5V11" />
    </svg>
  );
};
export default SvgProjector;