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
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M5.025 9.21c.537-1.342.806-2.013 1.267-2.54.118-.134.244-.26.378-.378.527-.461 1.198-.73 2.54-1.267 6.292-2.517 9.439-3.775 11.236-2.554.426.29.793.657 1.083 1.083.951 1.4.398 3.619-1.083 7.506-.42 1.102-.915 2.34-1.471 3.73-.537 1.342-.806 2.013-1.267 2.54-.118.134-.244.26-.378.378-.527.461-1.198.73-2.54 1.267C8.497 21.49 5.35 22.75 3.554 21.529a4.086 4.086 0 0 1-1.083-1.083c-.946-1.393-.403-3.596 1.06-7.446"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12.5 14.959a3 3 0 1 1 2.459-2.459"
      />
    </svg>
  );
};
export default SvgCompassBig;
