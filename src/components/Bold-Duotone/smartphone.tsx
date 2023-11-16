import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartphone = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.052 2c1.68 0 3.01 0 4.052.142 1.072.147 1.94.456 2.624 1.152.684.696.988 1.58 1.132 2.67.14 1.06.14 2.414.14 4.123v3.826c0 1.71 0 3.064-.14 4.123-.144 1.09-.448 1.974-1.132 2.67-.684.696-1.552 1.005-2.624 1.152-1.041.142-2.372.142-4.052.142h-.104c-1.68 0-3.01 0-4.052-.142-1.072-.147-1.94-.456-2.624-1.152-.684-.696-.988-1.58-1.132-2.67C4 16.976 4 15.622 4 13.913v-3.826c0-1.71 0-3.064.14-4.123.144-1.09.448-1.974 1.132-2.67.684-.696 1.552-1.005 2.624-1.152C8.937 2 10.268 2 11.948 2h.104Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M8.571 18.511c0-.385.307-.697.686-.697h5.486c.378 0 .685.312.685.697a.692.692 0 0 1-.685.698H9.257a.692.692 0 0 1-.686-.698Z"
      />
    </svg>
  );
};
export default SvgSmartphone;
