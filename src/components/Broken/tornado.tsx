import * as React from "react";
import type { SVGProps } from "react";
const SvgTornado = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinecap="round"
        
        d="M12 6c4.97 0 9-.672 9-1.5 0-.52-1.588-.978-4-1.247M12 3c-4.97 0-9 .672-9 1.5 0 .589 2.037 1.099 5 1.344M20 8s-2.791 1-8.276 1C6.24 9 4 8 4 8M16 14s-1.258.5-4 .5-4-.5-4-.5M13 17c-1.352 0-2.342-.121-3-.245m6-.255a9.627 9.627 0 0 1-1 .289M11.719 19.46c.384.025.81.04 1.281.04a9.32 9.32 0 0 0 1.5-.114M18 11s-.515 1-6 1m-6-1s.219.425 1.892.721M13 22h.5"
      />
    </svg>
  );
};
export default SvgTornado;
