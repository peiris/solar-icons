import * as React from "react";
import type { SVGProps } from "react";
const SvgOvenMitts = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.133 17.025a.75.75 0 1 0 1.05-1.07l-1.05 1.07Zm3.364 1.192a.75.75 0 1 0-1.039 1.082l1.04-1.082Zm-2.314-2.262-5.639-5.536-1.05 1.07 5.639 5.536 1.05-1.07Zm3.634 3.53-1.32-1.268-1.039 1.082 1.32 1.268 1.039-1.082Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M4.019 16.537C2.673 15.22 2 14.563 2 13.745c0-.536.29-1.004.87-1.634.59-.643.886-.964 1.02-1.3.133-.336.137-.714.144-1.47l.032-3.342C4.032 3.817 5.441 2.027 7.213 2c1.455-.022 2.702 1.152 3.121 2.78m9.744 8.616a6.314 6.314 0 0 0 0-9.072c-2.562-2.505-6.716-2.505-9.278 0l-.466.455m0 0-.962.941M17.416 16l-.728.711-3.39 3.315C11.952 21.342 11.278 22 10.443 22c-.837 0-1.51-.658-2.855-1.974L6.517 18.98"
      />
    </svg>
  );
};
export default SvgOvenMitts;
