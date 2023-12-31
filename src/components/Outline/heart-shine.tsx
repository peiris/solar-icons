import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartShine = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 8.899c-.971-.724-2.063-.825-2.991-.393-1.056.49-1.759 1.611-1.759 2.874 0 1.218.504 2.144 1.136 2.868.498.57 1.111 1.049 1.616 1.444l.314.247c.2.16.444.356.7.508.253.15.59.303.984.303.393 0 .731-.153.985-.303.255-.152.499-.347.7-.508.097-.078.203-.16.313-.247.505-.395 1.118-.875 1.616-1.444.632-.723 1.136-1.65 1.136-2.868 0-1.263-.703-2.384-1.759-2.874-.928-.432-2.02-.33-2.991.393Zm-2.359.967c-.494.23-.891.799-.891 1.514 0 .758.3 1.348.766 1.881.394.452.867.823 1.366 1.214l.372.294c.214.172.378.3.527.388.15.089.212.093.219.093.007 0 .069-.004.219-.093s.313-.216.527-.388l.372-.294c.499-.391.972-.762 1.366-1.214.466-.533.766-1.123.766-1.881 0-.715-.397-1.284-.891-1.514-.444-.206-1.105-.199-1.814.55a.75.75 0 0 1-1.09 0c-.709-.749-1.37-.756-1.814-.55Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.75 20a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2ZM1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75ZM20 11.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2ZM5.47 18.53a.75.75 0 0 1 0-1.06l.343-.343a.75.75 0 1 1 1.06 1.06l-.343.343a.75.75 0 0 1-1.06 0ZM17.126 5.813a.75.75 0 1 0 1.061 1.06l.343-.343a.75.75 0 0 0-1.06-1.06l-.344.343ZM18.53 18.53a.75.75 0 0 0 0-1.06l-.343-.343a.75.75 0 0 0-1.06 1.06l.343.343a.75.75 0 0 0 1.06 0ZM6.874 5.813a.75.75 0 0 1-1.061 1.06L5.47 6.53a.75.75 0 0 1 1.06-1.06l.344.343Z"
      />
    </svg>
  );
};
export default SvgHeartShine;
