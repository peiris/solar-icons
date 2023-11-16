import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarmPlay = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm1.026-11.725a14.49 14.49 0 0 0-.784-.508c-1.072-.652-1.609-.978-2.09-.617-.48.36-.524 1.117-.612 2.628-.024.427-.04.846-.04 1.222s.016.795.04 1.222c.088 1.512.132 2.268.613 2.629.48.36 1.017.034 2.089-.618.278-.169.547-.341.784-.508.27-.19.565-.418.862-.66C14.963 14.188 15.5 13.75 15.5 13s-.537-1.188-1.612-2.065c-.297-.242-.591-.47-.862-.66ZM8.136 1.603a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.795-1.272l4-2.5a.75.75 0 0 1 1.033.239Zm7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 1 1-.795 1.272l-4-2.5a.75.75 0 0 1-.239-1.033Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAlarmPlay;
