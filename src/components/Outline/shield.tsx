import * as React from "react";
import type { SVGProps } from "react";
const SvgShield = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8.723 2.051c1.444-.494 2.34-.801 3.277-.801.938 0 1.833.307 3.277.801l.727.25c1.481.506 2.625.898 3.443 1.23.412.167.767.33 1.052.495.275.16.55.359.737.626.185.263.281.587.341.9.063.324.1.713.125 1.16.048.886.048 2.102.048 3.678v1.601c0 6.101-4.608 9.026-7.348 10.224l-.027.011c-.34.149-.66.288-1.027.382-.387.1-.799.142-1.348.142-.55 0-.96-.042-1.348-.142-.367-.094-.687-.233-1.027-.382l-.027-.011C6.858 21.017 2.25 18.092 2.25 11.99V10.39c0-1.576 0-2.792.048-3.679.025-.446.062-.835.125-1.16.06-.312.156-.636.34-.9.188-.266.463-.465.738-.625.285-.165.64-.328 1.052-.495.818-.332 1.962-.724 3.443-1.23l.727-.25Zm2.527.787c-.498.108-1.135.322-2.17.676l-.572.196c-1.513.518-2.616.896-3.39 1.21a7.137 7.137 0 0 0-.864.404 1.648 1.648 0 0 0-.208.139.386.386 0 0 0-.055.05.409.409 0 0 0-.032.074c-.02.056-.042.136-.063.248a7.438 7.438 0 0 0-.1.958c-.041.76-.046 1.79-.046 3.166l7.5-2.5V2.838Zm1.5 0v4.621l7.5 2.5c0-1.376-.005-2.407-.046-3.166a7.423 7.423 0 0 0-.1-.958 1.738 1.738 0 0 0-.063-.248.408.408 0 0 0-.032-.074.385.385 0 0 0-.055-.05 1.64 1.64 0 0 0-.208-.14 7.135 7.135 0 0 0-.864-.402c-.774-.315-1.877-.693-3.39-1.21l-.573-.197c-1.034-.354-1.671-.568-2.169-.676Zm-1.5 6.203-7.5 2.5v.45c0 5.176 3.87 7.723 6.449 8.849.371.162.586.254.825.315.07.018.143.034.226.047V9.041Zm1.5 12.161V9.041l7.5 2.5v.45c0 5.176-3.87 7.723-6.449 8.849-.371.162-.586.254-.825.315-.07.018-.143.034-.226.047Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgShield;