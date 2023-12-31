import * as React from "react";
import type { SVGProps } from "react";
const SvgBed = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.25 10.5V7.25H9.5c-.964 0-1.612.002-2.095.067-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788-.064.483-.066 1.131-.066 2.095h5ZM17.75 10.5c0-.964-.002-1.612-.067-2.095-.061-.461-.169-.659-.3-.789-.13-.13-.327-.237-.788-.3-.483-.064-1.131-.066-2.095-.066h-1.75v3.25h5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 4h-2C7.229 4 5.343 4 4.172 5.172c-1.023 1.022-1.153 2.588-1.17 5.477v1.618a2 2 0 0 0-.85.968C2 13.602 2 14.068 2 15c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083c.252.104.55.137 1.015.147V20a.75.75 0 0 0 1.5 0v-2h12.5v2a.75.75 0 0 0 1.5 0v-2.005c.464-.01.763-.043 1.015-.147a2 2 0 0 0 1.083-1.083C22 16.398 22 15.932 22 15c0-.932 0-1.398-.152-1.765a2 2 0 0 0-.85-.968v-1.618c-.017-2.889-.147-4.455-1.17-5.477C18.658 4 16.772 4 13 4Zm6.25 8v-1.552c0-.898 0-1.648-.08-2.242-.084-.628-.27-1.195-.725-1.65-.456-.456-1.023-.642-1.65-.726-.595-.08-1.345-.08-2.243-.08H9.448c-.898 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.725-.456.456-.642 1.023-.726 1.65-.08.595-.08 1.345-.08 2.243V12h14.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBed;
