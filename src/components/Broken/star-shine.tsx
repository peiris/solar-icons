import * as React from "react";
import type { SVGProps } from "react";
const SvgStarShine = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M12 2v2M12 20v2M2 12h2M20 12h2M6 18l.343-.343M17.657 6.343 18 6M18 18l-.343-.343M6.343 6.343 6 6M15.265 14.627c.127 1.308.19 1.962-.193 2.253-.383.29-.958.026-2.11-.504l-.298-.138c-.327-.15-.49-.226-.664-.226-.173 0-.337.076-.664.226l-.298.138c-1.152.53-1.727.795-2.11.504-.383-.29-.32-.945-.193-2.253l.032-.338c.037-.372.055-.558 0-.73-.053-.172-.172-.312-.41-.59l-.217-.254c-.838-.98-1.258-1.47-1.111-1.941.106-.34.458-.508 1.111-.68m2.437-1.39C11.21 7.568 11.527 7 12 7c.473 0 .79.568 1.423 1.704l.164.294c.18.323.27.484.41.59.14.107.316.147.665.226l.318.072c1.23.278 1.845.417 1.991.888.106.34-.083.69-.512 1.226"
      />
    </svg>
  );
};
export default SvgStarShine;
