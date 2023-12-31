import * as React from "react";
import type { SVGProps } from "react";
const SvgPrinterMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M22 12c0 2.828 0 4.243-.879 5.121-.641.642-1.567.815-3.121.862m-12 0c-1.553-.047-2.48-.22-3.121-.862C2 16.243 2 14.828 2 12c0-2.828 0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879.3.3.498.662.628 1.121"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M17.983 6c-.047-1.553-.22-2.48-.862-3.121C16.243 2 14.828 2 12 2c-2.828 0-4.243 0-5.121.879-.642.641-.815 1.568-.862 3.121M18 12v4c0 2.828 0 4.243-.879 5.121-.641.642-1.567.815-3.121.862M6 12v4c0 2.828 0 4.243.879 5.121.641.642 1.568.815 3.121.862"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 11c3.412 0 5.873.713 7.5 1.443m-15 0a15.792 15.792 0 0 1 3.5-1.08"
      />
    </svg>
  );
};
export default SvgPrinterMinimalistic;
