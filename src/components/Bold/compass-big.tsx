import * as React from "react";
import type { SVGProps } from "react";
const SvgCompassBig = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.554 21.529c1.797 1.221 4.943-.038 11.236-2.554 1.342-.537 2.013-.806 2.54-1.267.134-.118.26-.244.378-.378.461-.527.73-1.198 1.267-2.54C21.49 8.497 22.75 5.35 21.529 3.554a4.085 4.085 0 0 0-1.083-1.083c-1.797-1.221-4.944.037-11.236 2.554-1.342.537-2.013.806-2.54 1.267-.134.118-.26.244-.378.378-.461.527-.73 1.198-1.267 2.54-2.517 6.292-3.775 9.439-2.554 11.236.29.426.657.793 1.083 1.083ZM8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Zm1.5 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCompassBig;
