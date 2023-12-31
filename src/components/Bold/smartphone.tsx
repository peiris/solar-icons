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
        fillRule="evenodd"
        d="M12.052 2h-.104c-1.68 0-3.01 0-4.052.142-1.072.147-1.94.456-2.624 1.152-.684.696-.988 1.58-1.132 2.67C4 7.024 4 8.378 4 10.087v3.826c0 1.71 0 3.064.14 4.123.144 1.09.448 1.974 1.132 2.67.684.696 1.552 1.005 2.624 1.152C8.937 22 10.268 22 11.948 22h.104c1.68 0 3.01 0 4.052-.142 1.072-.147 1.94-.456 2.624-1.152.684-.696.988-1.58 1.132-2.67.14-1.06.14-2.414.14-4.123v-3.826c0-1.71 0-3.064-.14-4.123-.144-1.09-.448-1.974-1.132-2.67-.684-.696-1.552-1.005-2.624-1.152C15.063 2 13.732 2 12.052 2Zm-3.48 16.512c0-.386.306-.698.685-.698h5.486c.379 0 .686.312.686.698a.692.692 0 0 1-.686.697H9.257a.692.692 0 0 1-.686-.697Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSmartphone;
