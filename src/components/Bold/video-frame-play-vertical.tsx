import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoFramePlayVertical = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 2c1.7 0 3.094 0 4.25.069V21.93C15.094 22 13.7 22 12 22c-1.7 0-3.094 0-4.25-.069V2.07C8.906 2 10.3 2 12 2Zm.411 8.404C13.471 11.116 14 11.472 14 12s-.53.884-1.589 1.596c-1.073.721-1.61 1.082-2.01.817C10 14.148 10 13.433 10 12c0-1.432 0-2.148.4-2.413.4-.265.938.096 2.011.817Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.25 6.25H2.22c.195-1.223.56-2.101 1.243-2.786.684-.684 1.563-1.048 2.786-1.242V6.25ZM21.778 6.25c-.194-1.223-.559-2.101-1.243-2.786-.684-.684-1.562-1.048-2.785-1.242V6.25h4.028ZM22 11.25c-.002-1.366-.01-2.519-.069-3.5H17.75v3.5H22ZM20.535 20.536c-.684.684-1.562 1.048-2.785 1.242V17.75h4.028c-.194 1.223-.559 2.102-1.243 2.785ZM22 12.75c-.002 1.366-.01 2.519-.069 3.5H17.75v-3.5H22ZM6.25 17.75v4.028c-1.223-.194-2.102-.558-2.786-1.242-.684-.684-1.048-1.563-1.243-2.786H6.25ZM6.25 16.25H2.069C2.01 15.269 2 14.116 2 12.75h4.25v3.5ZM6.25 11.25H2c.001-1.366.01-2.519.068-3.5H6.25v3.5Z"
      />
    </svg>
  );
};
export default SvgVideoFramePlayVertical;
