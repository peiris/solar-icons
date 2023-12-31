import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterOpened = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.658 2 17.772 2 14c0-3.771 0-5.657 1.172-6.828C3.825 6.518 4.7 6.229 6 6.102m12 0c1.3.127 2.175.416 2.828 1.07.654.653.943 1.528 1.07 2.828M10 6h4M11 9h2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M14 2.002c1.707.014 2.647.11 3.268.73.732.732.732 1.91.732 4.267v2.064c0 .46 0 .69-.094.892-.095.202-.272.35-.626.644l-.72.6M10 2.002c-1.707.014-2.647.11-3.268.73C6 3.464 6 4.642 6 6.999v2.064c0 .46 0 .69.094.892.095.202.272.35.626.644l1.439 1.2c1.837 1.53 2.755 2.295 3.841 2.295.65 0 1.239-.273 2-.82"
      />
    </svg>
  );
};
export default SvgLetterOpened;
