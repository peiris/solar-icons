import * as React from "react";
import type { SVGProps } from "react";
const SvgWiFiRouter = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7.693 5.684a4.752 4.752 0 0 1 8.781 0 .75.75 0 0 0 1.386-.574 6.252 6.252 0 0 0-11.553 0 .75.75 0 0 0 1.386.574ZM7 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13.25 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.628 3.349a.75.75 0 0 1 1.023.279l3.784 6.622h9.13l3.784-6.622a.75.75 0 0 1 1.302.744l-3.359 5.878c.793 0 1.462.007 2.002.08.628.084 1.195.27 1.65.726.456.455.642 1.022.726 1.65.08.594.08 1.344.08 2.242v.104c0 .899 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.343.08-2.242.08H5.948c-.898 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.344-.08-2.242v-.104c0-.899 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.541-.073 1.21-.08 2.003-.08l-3.36-5.878a.75.75 0 0 1 .28-1.023Zm14.357 8.401H18c.964 0 1.612.002 2.095.066.461.063.659.17.789.3.13.13.237.328.3.79.064.482.066 1.13.066 2.094s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789-.13.13-.327.237-.788.3-.483.064-1.131.066-2.095.066H6c-.964 0-1.612-.002-2.095-.067-.461-.062-.659-.169-.789-.3-.13-.13-.237-.327-.3-.788-.064-.483-.066-1.131-.066-2.095 0-.964.002-1.612.067-2.095.062-.461.169-.659.3-.789.13-.13.327-.237.788-.3.483-.064 1.131-.066 2.095-.066H16.985Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.084 5.25a2.251 2.251 0 0 0-2.16 1.618.75.75 0 0 1-1.44-.42 3.751 3.751 0 0 1 7.2 0 .75.75 0 0 1-1.44.42 2.251 2.251 0 0 0-2.16-1.618Z"
      />
      <path fill="currentColor" d="M12.084 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </svg>
  );
};
export default SvgWiFiRouter;
