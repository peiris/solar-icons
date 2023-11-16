import * as React from "react";
import type { SVGProps } from "react";
const SvgPlanet2 = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
      <path d="M17.671 6.225c2.102-.415 3.654-.268 4.158.538 1.011 1.616-2.57 5.271-7.998 8.163-5.429 2.893-10.649 3.927-11.66 2.31-.516-.823.163-2.178 1.672-3.69" />
    </svg>
  );
};
export default SvgPlanet2;
