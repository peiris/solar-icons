import * as React from "react";
import type { SVGProps } from "react";
const SvgAccumulator = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M22 14v-2.025c0-1.846 0-2.768-.392-3.458a3 3 0 0 0-1.125-1.125C19.793 7 18.871 7 17.025 7h-.28c-.123 0-.184 0-.24-.006a1 1 0 0 1-.725-.448 2.223 2.223 0 0 1-.113-.213c-.11-.22-.165-.33-.228-.425a2 2 0 0 0-1.447-.895C13.878 5 13.755 5 13.509 5h-3.018c-.246 0-.37 0-.482.013a2 2 0 0 0-1.448.895c-.063.095-.118.205-.228.425-.055.11-.082.165-.113.213a1 1 0 0 1-.724.447C7.439 7 7.378 7 7.255 7h-.28c-1.846 0-2.768 0-3.458.392a3 3 0 0 0-1.125 1.125C2 9.207 2 10.129 2 11.975V14c0 2.828 0 4.243.879 5.121C3.757 20 5.172 20 8 20h8c2.828 0 4.243 0 5.121-.879C22 18.243 22 16.828 22 14Z" />
      <path d="M7 7V6c0-.943 0-1.414-.293-1.707C6.414 4 5.943 4 5 4c-.943 0-1.414 0-1.707.293C3 4.586 3 5.057 3 6v1.5M21 8V6c0-.943 0-1.414-.293-1.707C20.414 4 19.943 4 19 4c-.943 0-1.414 0-1.707.293C17 4.586 17 5.057 17 6v1M9 13.5H6M18 13.5h-1.5m0 0H15m1.5 0V12m0 1.5V15" />
    </svg>
  );
};
export default SvgAccumulator;
