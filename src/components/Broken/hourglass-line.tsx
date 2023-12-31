import * as React from "react";
import type { SVGProps } from "react";
const SvgHourglassLine = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m12 12-2.958 2.929c-2.922 2.894-4.383 4.341-3.974 5.59.035.107.078.211.13.312C5.8 22 7.867 22 12 22c4.133 0 6.2 0 6.802-1.17.052-.1.095-.204.13-.311.23-.703-.131-1.468-1.013-2.519M12 12l2.958 2.929M12 12l2.958-2.929c2.922-2.894 4.383-4.341 3.974-5.59a2.12 2.12 0 0 0-.13-.312C18.2 2 16.133 2 12 2 7.867 2 5.8 2 5.198 3.17c-.052.1-.095.204-.13.311-.23.703.131 1.468 1.013 2.519M12 12 9.042 9.071M10 5.5h4M10 18.5h4"
      />
    </svg>
  );
};
export default SvgHourglassLine;
