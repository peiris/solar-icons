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
        strokeWidth={1.5}
        d="M6 17.983c-1.553-.047-2.48-.22-3.121-.862C2 16.243 2 14.828 2 12c0-2.828 0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12c0 2.828 0 4.243-.879 5.121-.641.642-1.567.815-3.121.862"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18 12v4c0 2.828 0 4.243-.879 5.121C16.243 22 14.828 22 12 22c-2.828 0-4.243 0-5.121-.879C6 20.243 6 18.828 6 16v-4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.983 6c-.047-1.553-.22-2.48-.861-3.121C16.242 2 14.829 2 12 2c-2.828 0-4.242 0-5.121.879-.641.641-.815 1.568-.861 3.121"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M19.5 12.443C17.873 11.713 15.412 11 12 11c-3.411 0-5.873.713-7.5 1.443"
      />
    </svg>
  );
};
export default SvgPrinterMinimalistic;
