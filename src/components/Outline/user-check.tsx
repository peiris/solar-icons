import * as React from "react";
import type { SVGProps } from "react";
const SvgUserCheck = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5ZM8.75 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.856 14.573a.75.75 0 0 1 .015 1.06l-1.833 1.89a.75.75 0 0 1-1.114-.043l-.834-1a.75.75 0 0 1 1.153-.96l.3.36 1.252-1.291a.75.75 0 0 1 1.06-.016Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.775 12.513A14.487 14.487 0 0 0 12 12.25c-2.313 0-4.445.526-6.024 1.414C4.42 14.54 3.25 15.866 3.25 17.5v.102c-.001 1.162-.002 2.62 1.277 3.662.629.512 1.51.877 2.7 1.117 1.192.242 2.747.369 4.773.369 2.868 0 4.81-.254 6.12-.741 1.179-.44 1.877-1.082 2.25-1.892a4.75 4.75 0 1 0-5.596-7.604ZM14.75 16a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm-.994-2.135A4.751 4.751 0 0 0 17.31 20.7c-1.07.337-2.733.55-5.31.55-1.975 0-3.42-.125-4.477-.339-1.06-.214-1.68-.509-2.05-.81-.684-.557-.724-1.293-.724-2.601 0-.851.622-1.775 1.961-2.528 1.316-.74 3.184-1.222 5.29-1.222.605 0 1.193.04 1.755.115Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgUserCheck;
