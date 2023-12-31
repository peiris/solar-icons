import * as React from "react";
import type { SVGProps } from "react";
const SvgBoltCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.357 6.792c.37-.223 1.014-.545 1.632-.159.632.396.599 1.128.544 1.55-.061.48-.231 1.114-.431 1.86l-.055.206c-.04.145-.07.26-.094.36a3.12 3.12 0 0 0-.028.127c.111.04.274.087.536.157l.05.014c.493.132.938.251 1.266.39.326.138.77.39.914.921l.002.008.002.008.002.008.002.008.002.008.001.008.002.009.002.008c.11.546-.183.969-.425 1.234-.25.274-.619.572-1.026.896l-2.06 1.64c-.613.489-1.133.902-1.552 1.155-.37.223-1.014.545-1.632.159-.632-.396-.599-1.128-.544-1.55.061-.48.231-1.114.431-1.86l.055-.206a15.07 15.07 0 0 0 .12-.475 4.402 4.402 0 0 0-.534-.17c-.519-.138-.983-.265-1.327-.416-.328-.144-.765-.402-.907-.927l-.002-.008-.002-.008-.002-.008-.002-.008-.002-.008-.002-.008-.002-.008-.001-.008c-.112-.554.191-.974.434-1.233.239-.256.593-.538.979-.845l2.102-1.674c.613-.489 1.133-.903 1.552-1.155Zm-.662 2.364c.597-.476 1.014-.806 1.327-1.011-.062.358-.194.855-.384 1.566l-.05.187a5.836 5.836 0 0 0-.165.735c-.033.26-.026.577.158.89l.004.006.004.007c.186.3.457.459.695.56.225.094.505.17.79.246.454.122.763.206.981.284-.158.15-.393.341-.735.614l-2.015 1.604c-.597.476-1.014.806-1.327 1.011.062-.358.194-.856.384-1.566l.05-.187c.068-.253.137-.511.165-.735.033-.26.026-.577-.158-.889l-.003.002c-.177-.273-.431-.435-.664-.544a5.146 5.146 0 0 0-.825-.278c-.454-.122-.766-.21-.983-.29.16-.148.394-.336.736-.608l2.015-1.604Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25ZM2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBoltCircle;
