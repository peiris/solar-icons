import * as React from "react";
import type { SVGProps } from "react";
const SvgTransmissionSquare = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M8 9v6M12 9v6M8 12h5c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C16 10.398 16 9.932 16 9" />
      <rect width={20} height={20} x={2} y={2} rx={5} />
    </svg>
  );
};
export default SvgTransmissionSquare;
