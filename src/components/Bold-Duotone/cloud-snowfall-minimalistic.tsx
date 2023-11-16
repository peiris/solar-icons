import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudSnowfallMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M13 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM16 19.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM16 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 19.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
      <path
        fill="currentColor"
        d="M12 19a.995.995 0 0 0 .781-.376.997.997 0 0 0-.182-1.425.995.995 0 0 0-1.198 0A.999.999 0 0 0 12 19ZM15 17.5a.995.995 0 0 1-.781-.376A1 1 0 1 1 15 17.5ZM9 15.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
      />
      <path
        fill="currentColor"
        d="M16.286 19C19.442 19 22 16.472 22 13.353c0-2.472-1.607-4.573-3.845-5.338C17.837 5.194 15.415 3 12.476 3 9.32 3 6.762 5.528 6.762 8.647c0 .69.125 1.35.354 1.962a4.351 4.351 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765 2 17.104 3.919 19 6.286 19h10Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgCloudSnowfallMinimalistic;
