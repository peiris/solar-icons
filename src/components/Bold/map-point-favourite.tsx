import * as React from "react";
import type { SVGProps } from "react";
const SvgMapPointFavourite = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 2c-4.418 0-8 3.646-8 8.143 0 4.462 2.553 9.67 6.537 11.531a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.606 20 10.144 20 5.645 16.418 2 12 2ZM9 8.757c0 1.02 1.165 2.097 2.043 2.765.42.319.63.478.957.478.328 0 .537-.16.957-.479C13.835 10.855 15 9.778 15 8.758c0-1.733-1.65-2.38-3-1.041-1.35-1.339-3-.692-3 1.041Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMapPointFavourite;
