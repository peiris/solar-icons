import * as React from "react";
import type { SVGProps } from "react";
const SvgPlain2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5.796 18.204 21.512 2.488c-.988-.989-2.86-.364-6.606.884l-9.331 3.11c-2.082.694-3.123 1.041-3.439 1.804-.074.18-.12.37-.133.564-.059.824.717 1.6 2.269 3.151l.283.283c.254.254.382.382.478.523.19.28.297.607.31.945.008.171-.019.35-.072.705-.196 1.304-.294 1.956-.179 2.458.114.495.362.938.704 1.289Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m17.498 18.486 3.13-9.392c1.25-3.745 1.873-5.617.885-6.606L5.797 18.204c.348.356.794.617 1.296.74.5.122 1.153.033 2.46-.144l.071-.01c.369-.05.553-.075.73-.064.32.02.63.124.898.303.147.099.278.23.541.493l.251.251c1.51 1.51 2.266 2.265 3.067 2.226.22-.01.438-.062.64-.151.734-.323 1.072-1.336 1.747-3.362Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgPlain2;
