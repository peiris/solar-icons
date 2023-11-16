import * as React from "react";
import type { SVGProps } from "react";
const SvgStarFallMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.725 8.156c1.55-.918 2.326-1.377 2.895-1.051.57.325.556 1.22.529 3.01l-.007.463c-.008.509-.012.763.083.986.095.224.277.391.643.726l.332.305c1.286 1.178 1.93 1.766 1.778 2.428-.15.661-.995.957-2.684 1.548l-.437.153c-.48.169-.72.253-.904.421-.184.169-.291.402-.506.87l-.196.426c-.756 1.646-1.134 2.47-1.796 2.553-.663.082-1.171-.63-2.188-2.054l-.263-.368c-.289-.405-.433-.607-.642-.727-.208-.119-.457-.142-.956-.187l-.453-.042c-1.753-.16-2.63-.24-2.888-.85-.259-.61.271-1.347 1.332-2.818l.275-.381c.301-.418.452-.627.507-.87.055-.242.009-.49-.084-.986l-.085-.451c-.328-1.746-.492-2.618.011-3.078.503-.46 1.339-.203 3.011.311l.433.134c.475.146.713.219.955.188.243-.03.463-.16.904-.421l.4-.238Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M13.5 6.5 13 6M9.5 2.5l2 2M6.5 6.5 4 4M6 12l-1.5-1.5M2 8l.5.5"
      />
    </svg>
  );
};
export default SvgStarFallMinimalistic;