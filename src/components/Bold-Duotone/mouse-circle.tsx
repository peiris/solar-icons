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
        d="M2.535 11.916c0 5.267 4.238 9.537 9.465 9.537 5.227 0 9.465-4.27 9.465-9.537a9.544 9.544 0 0 0-5.335-8.584.776.776 0 0 1-.355-1.033.765.765 0 0 1 1.026-.358A11.092 11.092 0 0 1 23 11.916C23 18.038 18.075 23 12 23S1 18.038 1 11.916C1 6.548 4.787 2.073 9.815 1.051c1.689-.343 2.952 1.104 2.952 2.617v2.134c1.894.364 3.326 2.05 3.326 4.076V14c0 2.291-1.832 4.148-4.093 4.148-2.26 0-4.093-1.857-4.093-4.148V9.878c0-2.025 1.432-3.711 3.326-4.075V3.668c0-.766-.588-1.208-1.115-1.101-4.326.879-7.583 4.732-7.583 9.35Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M7.907 13.954c0 2.29 1.833 4.148 4.093 4.148s4.093-1.857 4.093-4.148v-3.37H7.907v3.37ZM12.768 9.338h3.253c-.312-1.667-1.608-3.292-3.253-3.609v3.61ZM11.233 9.338V5.73c-1.645.317-2.942 1.942-3.254 3.61h3.254Z"
      />
    </svg>
  );
};
export default SvgMouseCircle;
