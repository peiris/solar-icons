import * as React from "react";
import type { SVGProps } from "react";
const SvgWirelessCharge = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M12.065 18A7.845 7.845 0 0 0 20 10.065c-.036-4.419-3.646-8.03-8.065-8.065A7.846 7.846 0 0 0 4 9.935c.036 4.419 3.646 8.03 8.065 8.065ZM11.25 22a.75.75 0 0 0 1.5 0h-1.5Zm0-1v1h1.5v-1h-1.5Z" />
      <path d="M12.857 7 10 10h4l-2.857 3M13.5 18v1.5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C12.699 21 12.466 21 12 21s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883V18" />
    </svg>
  );
};
export default SvgWirelessCharge;
