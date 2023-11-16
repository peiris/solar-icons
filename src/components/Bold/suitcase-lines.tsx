import * as React from "react";
import type { SVGProps } from "react";
const SvgSuitcaseLines = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.052 1.25h-.104c-.899 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.725-.456.456-.642 1.023-.726 1.65-.08.595-.08 1.345-.08 2.243v.078c-2.021.066-3.235.302-4.078 1.146-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078-.843-.844-2.057-1.08-4.078-1.146v-.078c0-.898 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726-.594-.08-1.344-.08-2.242-.08Zm3.198 4.752V6c0-.964-.002-1.612-.066-2.095-.063-.461-.17-.659-.3-.789-.13-.13-.328-.237-.79-.3-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788C8.753 4.388 8.75 5.036 8.75 6v.002C9.142 6 9.558 6 10 6h4c.442 0 .858 0 1.25.002Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2 14c0-.839 0-1.585.013-2.25h19.974C22 12.415 22 13.161 22 14s0 1.585-.013 2.25H2.013C2 15.585 2 14.839 2 14ZM2.08 17.75c.115 1.44.397 2.384 1.092 3.078C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172.695-.694.977-1.639 1.093-3.078H2.079Z"
      />
    </svg>
  );
};
export default SvgSuitcaseLines;