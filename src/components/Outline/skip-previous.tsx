import * as React from "react";
import type { SVGProps } from "react";
const SvgSkipPrevious = (props: SVGProps<SVGSVGElement>) => {
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
        d="M21.14 1.804c.966.66 1.61 1.841 1.61 3.229v13.934c0 1.388-.644 2.568-1.61 3.23-.98.669-2.275.786-3.418.048L6.933 15.277C5.783 14.535 5.25 13.235 5.25 12s.533-2.535 1.683-3.277l10.79-6.968c1.142-.738 2.437-.62 3.416.049Zm-.848 1.238c-.522-.358-1.162-.41-1.756-.026L7.747 9.983c-.637.41-.997 1.18-.997 2.017 0 .836.36 1.606.997 2.017l10.789 6.968c.594.383 1.234.33 1.756-.027.535-.365.958-1.07.958-1.99V5.032c0-.921-.423-1.625-.958-1.991ZM2 4.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V5A.75.75 0 0 1 2 4.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSkipPrevious;
