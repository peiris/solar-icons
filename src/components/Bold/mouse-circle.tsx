import * as React from "react";
import type { SVGProps } from "react";
const SvgMouseCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 21.453c-5.227 0-9.465-4.27-9.465-9.537 0-4.617 3.257-8.47 7.583-9.349.527-.107 1.115.335 1.115 1.1V5.73h1.534V3.668c0-1.513-1.263-2.96-2.952-2.617C4.787 2.073 1 6.548 1 11.916 1 18.038 5.925 23 12 23s11-4.962 11-11.084c0-4.388-2.531-8.18-6.199-9.975a.765.765 0 0 0-1.026.358.776.776 0 0 0 .355 1.033 9.544 9.544 0 0 1 5.335 8.584c0 5.267-4.238 9.537-9.465 9.537Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.907 13.954c0 2.291 1.832 4.148 4.093 4.148 2.26 0 4.093-1.857 4.093-4.148v-3.37H7.907v3.37ZM12.767 9.338h3.254c-.312-1.667-1.609-3.292-3.254-3.608v3.608ZM11.233 9.338V5.73C9.587 6.046 8.29 7.67 7.979 9.338h3.254Z"
      />
    </svg>
  );
};
export default SvgMouseCircle;
