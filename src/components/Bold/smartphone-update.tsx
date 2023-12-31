import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartphoneUpdate = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2.796 5.045C3.13 2.798 4.924 1 7.199 1c1.363 0 2.567.656 3.374 1.66a.757.757 0 0 1-.118 1.066.761.761 0 0 1-1.068-.117c-.55-.684-1.334-1.093-2.188-1.093-1.343 0-2.553 1.043-2.863 2.534a.757.757 0 0 1 .465 1.263l-.74.81a.76.76 0 0 1-1.122 0l-.74-.81a.757.757 0 0 1 .597-1.268Zm8.344-.81a.76.76 0 0 1 .561.247l.74.809a.757.757 0 0 1-.597 1.269c-.333 2.246-2.127 4.044-4.403 4.044-1.268 0-2.4-.568-3.2-1.456a.757.757 0 0 1 .056-1.07.761.761 0 0 1 1.074.056c.54.6 1.274.954 2.07.954 1.343 0 2.553-1.042 2.863-2.534a.757.757 0 0 1-.465-1.263l.74-.809a.76.76 0 0 1 .561-.247Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 11.868v4.044c0 3.813 0 5.72-1.187 6.904C18.626 24 16.715 24 12.893 24c-3.821 0-5.732 0-6.92-1.184-1.186-1.185-1.186-3.091-1.186-6.904V14.18c0-.269 0-.403.025-.514.087-.379.383-.674.763-.76.11-.026.246-.026.515-.026 1.614 0 2.42 0 3.087-.151a6.073 6.073 0 0 0 4.578-4.568c.152-.665.152-1.469.152-3.077 0-.266 0-.4.026-.512.087-.38.397-.682.78-.762.112-.024.242-.021.5-.016 2.332.047 3.682.255 4.6 1.17C21 6.15 21 8.056 21 11.869Zm-11.147 8.34a.76.76 0 1 0 0 1.517h6.08a.759.759 0 1 0 0-1.516h-6.08Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSmartphoneUpdate;
