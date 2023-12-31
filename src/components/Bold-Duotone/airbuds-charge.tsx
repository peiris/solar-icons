import * as React from "react";
import type { SVGProps } from "react";
const SvgAirbudsCharge = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 18a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M18.416 15.876a.75.75 0 0 1 .208 1.04l-.223.334H19a.75.75 0 0 1 .624 1.166l-1 1.5a.75.75 0 1 1-1.248-.832l.223-.334H17a.75.75 0 0 1-.624-1.166l1-1.5a.75.75 0 0 1 1.04-.208Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 7.3V5.188c0-.175 0-.262-.004-.335-.08-1.541-1.385-2.774-3.017-2.85C18.901 2 18.81 2 18.625 2c-.307 0-.46 0-.59.006-2.72.126-4.895 2.18-5.029 4.749-.006.122-.006.267-.006.558v8.393a5.502 5.502 0 0 1 4.765-3.201V11.3c0-.552.474-1 1.058-1 1.755 0 3.177-1.343 3.177-3ZM20.25 5a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0V5Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2 9.3V7.187c0-.174 0-.26.004-.334.08-1.541 1.385-2.774 3.017-2.85C5.098 4 5.19 4 5.375 4c.307 0 .46 0 .59.006 2.72.126 4.895 2.18 5.029 4.749.006.122.006.267.006.557V19.75C11 20.993 9.933 22 8.618 22c-1.316 0-2.383-1.007-2.383-2.25V13.3c0-.552-.474-1-1.059-1C3.422 12.3 2 10.957 2 9.3Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M11 18.25H6.235v1.5H11v-1.5ZM4.5 6.25a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-.75-.75Z"
      />
    </svg>
  );
};
export default SvgAirbudsCharge;
