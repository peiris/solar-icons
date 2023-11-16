import * as React from "react";
import type { SVGProps } from "react";
const SvgFlashlightOn = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.955 7.25h12.09c.432 0 .83 0 1.152.043.355.048.731.16 1.04.47.31.309.422.684.47 1.04.043.323.043.72.043 1.152v.297c0 .325.002.677-.133 1.003-.136.327-.385.575-.616.805l-.057.056-3.242 3.243c-.622.621-.775.793-.857.991-.082.198-.095.428-.095 1.307V22a.75.75 0 0 1-1.5 0v-4.464c0-.284 0-.544.013-.786H9.737c.013.242.013.502.013.786V22a.75.75 0 0 1-1.5 0v-4.343c0-.879-.013-1.11-.095-1.307-.082-.198-.236-.37-.857-.991l-3.243-3.243L4 12.06c-.231-.23-.48-.478-.616-.805-.135-.326-.134-.678-.133-1.003v-.297c0-.433 0-.83.043-1.152.048-.356.16-.731.47-1.04.308-.31.684-.422 1.04-.47.322-.043.72-.043 1.152-.043Zm9.6 7.134c-.311.31-.582.581-.793.866H9.237c-.21-.285-.481-.555-.793-.867L5.81 11.75h12.38l-2.635 2.633Zm3.695-4.134V10c0-.493-.002-.787-.03-.997a.711.711 0 0 0-.037-.167l-.003-.006-.002-.004-.001-.003-.003-.001-.004-.002-.006-.003a.707.707 0 0 0-.167-.037c-.21-.028-.505-.03-.997-.03H6c-.493 0-.787.002-.998.03a.706.706 0 0 0-.176.042l-.003.001-.001.003a.706.706 0 0 0-.042.177c-.029.21-.03.504-.03.997v.25h14.5Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.53 2.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06-1.06l-2-2ZM18.53 2.47a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06ZM12.75 19a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z"
      />
    </svg>
  );
};
export default SvgFlashlightOn;