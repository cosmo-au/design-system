import { LogoProps } from "../../types";

import { LogoStyled } from "./Logo.styles";

export const Logo = (props: LogoProps): JSX.Element => {
  const { height = 70.7, width = 231.85, css, inline, ...rest } = props;

  return (
    <LogoStyled
      css={{
        ...(inline && {
          marginRight: inline === "auto" ? "auto" : `$${inline}`,
        }),
        ...css,
      }}>
      <svg height={height} viewBox="0 0 463.7 141.4" width={width} {...rest}>
        <g fill="currentColor">
          <path d="m182.9 105.9c-10.5 0-18.7-3.1-24.5-9.3s-8.7-14.6-8.7-25.2v-.8c0-10.1 3.1-18.4 9.4-24.9 6.2-6.5 14.1-9.7 23.6-9.7 8.1 0 14.8 2 20.1 6.1 5.3 4 8.3 9.9 9.1 17.7h-12.8c-1.5-9.1-6.9-13.7-16.2-13.7-6 0-10.8 2.2-14.4 6.6s-5.4 10.4-5.4 17.9v.8c0 7.7 1.7 13.6 5.2 17.9s8.4 6.4 14.6 6.4c4.8 0 8.7-1.2 11.8-3.7 3.1-2.4 4.9-6 5.6-10.7h12.3c-1 8-4.1 14.1-9.4 18.3-5.2 4.2-12 6.3-20.3 6.3z" />
          <path d="m263.1 98.9c-4.8 4.7-10.9 7-18.3 7s-13.5-2.3-18.3-7-7.2-10.8-7.2-18.2v-.8c0-7.6 2.4-13.8 7.2-18.5s10.9-7.1 18.3-7.1c7.3 0 13.4 2.3 18.2 7s7.2 10.8 7.2 18.3v.8c.1 7.6-2.3 13.8-7.1 18.5zm-18.2-1.9c4.2 0 7.6-1.5 10-4.4s3.7-7 3.7-12.1v-.7c0-5.1-1.2-9.2-3.7-12.1s-5.8-4.4-10-4.4c-4.3 0-7.7 1.5-10.1 4.4s-3.7 6.9-3.7 12.1v.8c0 5.1 1.2 9.2 3.7 12.1 2.4 2.8 5.8 4.3 10.1 4.3z" />
          <path d="m297.7 105.9c-6.4 0-11.4-1.4-15-4.3-3.6-2.8-5.5-6.9-5.8-12.2h10.8c.3 2.7 1.2 4.7 2.8 6 1.5 1.3 3.9 2 7.1 2 6 0 8.9-2.1 8.9-6.4 0-2-.8-3.4-2.4-4.4s-4.4-1.8-8.2-2.4c-6.7-1.1-11.3-2.7-14-4.9s-4-5.6-4-10.2c0-4.7 1.8-8.3 5.5-11 3.7-2.6 8-3.9 13.1-3.9 11.9 0 18.4 5 19.5 15h-10.6c-.5-2.3-1.4-4-2.8-5-1.4-1.1-3.4-1.6-6-1.6-2.5 0-4.4.5-5.8 1.6s-2.1 2.5-2.1 4.3.7 3.1 2.2 4 4.1 1.7 8.1 2.4c6.5 1 11.2 2.6 14.2 4.7s4.5 5.6 4.5 10.5c0 5.1-1.7 9-5.2 11.7-3.6 2.7-8.5 4.1-14.8 4.1z" />
          <path d="m327.6 104.9v-49.6h11.5v7.6c1.3-2.5 3.2-4.5 5.9-6.2 2.7-1.6 5.7-2.5 9.2-2.5 7 0 11.6 3 14.1 8.9 1.8-2.9 4.3-5.1 7.3-6.7 3-1.5 6.2-2.3 9.5-2.3 4.9 0 8.8 1.6 11.9 4.8s4.6 8 4.6 14.5v31.4h-11.5v-30.5c0-7-2.9-10.4-8.8-10.4-3 0-5.6 1-7.7 3s-3.2 4.8-3.2 8.4v29.7h-11.5v-30.7c0-7-2.9-10.4-8.8-10.4-3 0-5.6 1-7.7 3s-3.2 4.8-3.2 8.4v29.7z" />
          <path d="m455.2 98.9c-4.8 4.7-10.9 7-18.3 7s-13.5-2.3-18.3-7-7.2-10.8-7.2-18.2v-.8c0-7.6 2.4-13.8 7.2-18.5s10.9-7.1 18.3-7.1c7.3 0 13.4 2.3 18.2 7s7.2 10.8 7.2 18.3v.8c.1 7.6-2.3 13.8-7.1 18.5zm-18.2-1.9c4.2 0 7.6-1.5 10-4.4s3.7-7 3.7-12.1v-.7c0-5.1-1.2-9.2-3.7-12.1-2.4-2.9-5.8-4.4-10-4.4-4.3 0-7.7 1.5-10.1 4.4s-3.7 6.9-3.7 12.1v.8c0 5.1 1.2 9.2 3.7 12.1s5.8 4.3 10.1 4.3z" />
        </g>
        <path
          d="m44.4 96.3c-7.5-10.3-13.3-22.9-16.1-35.8-7.3 6.4-14.7 16.2-18.4 27.2 7.2 5.7 21 7.9 34.5 8.6z"
          fill="#583749"
        />
        <path
          d="m44.4 96.3c-13.5-.7-27.3-2.9-34.6-8.6-2.9 8.4-3.7 17.5-.9 26.5 6.5 20.7 28.6 28.7 44.7 25.9 15.3-2.6 21.9-10.1 25.7-18.3-12.8-2.5-25.3-12.2-34.9-25.5z"
          fill="#3170b7"
        />
        <path
          d="m28.3 60.4c5.4-4.7 8.1-7.2 11.1-9.8 1.4-1.2 3-2.5 4.7-3.8 3.6-2.8 8.6-6.5 17.2-12.8 9.8-6.6 24.7-10 38.4-6.8-1.7-29-35.5-31.8-52.3-19.7-16.8 12.2-11.6 28.9-19.1 39.3-3.7 5.2-14.3 6.1-21.1 12.5-6.9 6.6-9.8 18.7 2.6 28.4 3.8-11.1 11.1-20.9 18.5-27.3z"
          fill="#ee363d"
        />
        <path
          d="m131 61.5c-4.3-20.7-17.1-31-31.3-34.3.7 10.8-1.7 22.9-4.9 34 8.7 9.6 13.2 18.4 9.1 25.6-4.3 7.5-11.1 6.4-15.4 11.9-4.4 5.7-5.5 14.8-9.4 23.1 2.1.4 4.2.6 6.3.6 25.2 0 54.1-20.1 45.6-60.9z"
          fill="#a9c3ca"
        />
        <path
          d="m104 86.8c4.1-7.2-.4-16-9.1-25.6-5.4 18.6-13.3 34-13.3 34s-18.4 2.1-37.2 1.1c9.6 13.2 22.1 23 34.9 25.4 3.9-8.3 5-17.4 9.4-23.1 4.2-5.5 11.1-4.3 15.3-11.8z"
          fill="#295f9c"
        />
        <path
          d="m61.3 34.1c19.5 12.5 23.2 15.9 32.6 26 .3.4.7.7 1 1.1 3.2-11 5.5-23.2 4.9-34-13.8-3.2-28.7.2-38.5 6.9z"
          fill="#ae282e"
        />
        <path
          d="m61.3 34.1c-8.7 6.3-13.7 10-17.2 12.8-1.7 1.3-3.2 2.6-4.7 3.8-3 2.5-5.7 5-11.1 9.8 2.8 12.9 8.6 25.5 16.2 35.9 18.8.9 37.2-1.1 37.2-1.1s7.9-15.4 13.3-34c-.3-.4-.7-.7-1-1.1-9.5-10.2-13.2-13.6-32.7-26.1z"
          fill="#ffffff"
        />
      </svg>
    </LogoStyled>
  );
};

export function LogoIcon(props: LogoProps): JSX.Element {
  const { height = 50, width = 50, inline, css, ...rest } = props;

  return (
    <LogoStyled
      css={{
        ...(inline && {
          marginRight: inline === "auto" ? "auto" : `$${inline}`,
        }),
        ...css,
      }}>
      <svg height={height} viewBox="0 0 133.9 141.4" width={width} x="0px" y="0px" {...rest}>
        <path
          d="M44.4,96.3C44.4,96.3,44.4,96.3,44.4,96.3c-7.5-10.3-13.3-22.9-16.1-35.8c-7.3,6.4-14.7,16.2-18.4,27.2
	C17.1,93.4,30.9,95.6,44.4,96.3C44.4,96.3,44.4,96.3,44.4,96.3z"
          fill="#583749"
        />
        <path
          d="M44.4,96.3C44.4,96.3,44.4,96.3,44.4,96.3c-13.5-0.7-27.3-2.9-34.6-8.6c-2.9,8.4-3.7,17.5-0.9,26.5
	c6.5,20.7,28.6,28.7,44.7,25.9c15.3-2.6,21.9-10.1,25.7-18.3C66.5,119.3,54,109.6,44.4,96.3z"
          fill="#3170B7"
        />
        <path
          d="M28.3,60.4c5.4-4.7,8.1-7.2,11.1-9.8c1.4-1.2,3-2.5,4.7-3.8c3.6-2.8,8.6-6.5,17.2-12.8
	C71.1,27.4,86,24,99.7,27.2c0,0,0,0,0,0C98-1.8,64.2-4.6,47.4,7.5C30.6,19.7,35.8,36.4,28.3,46.8c-3.7,5.2-14.3,6.1-21.1,12.5
	c-6.9,6.6-9.8,18.7,2.6,28.4c0,0,0,0,0,0C13.6,76.6,20.9,66.8,28.3,60.4z"
          fill="#EE363D"
        />
        <path
          d="M131,61.5c-4.3-20.7-17.1-31-31.3-34.3c0.7,10.8-1.7,22.9-4.9,34c8.7,9.6,13.2,18.4,9.1,25.6
	c-4.3,7.5-11.1,6.4-15.4,11.9c-4.4,5.7-5.5,14.8-9.4,23.1c2.1,0.4,4.2,0.6,6.3,0.6C110.6,122.4,139.5,102.3,131,61.5z"
          fill="#A9C3CA"
        />
        <path
          d="M104,86.8c4.1-7.2-0.4-16-9.1-25.6l0,0c-5.4,18.6-13.3,34-13.3,34s-18.4,2.1-37.2,1.1c0,0,0,0,0,0c0,0,0,0,0,0
	c9.6,13.2,22.1,23,34.9,25.4c3.9-8.3,5-17.4,9.4-23.1C92.9,93.1,99.8,94.3,104,86.8z"
          fill="#295F9C"
        />
        <path
          d="M61.3,34.1c19.5,12.5,23.2,15.9,32.6,26c0.3,0.4,0.7,0.7,1,1.1c3.2-11,5.5-23.2,4.9-34
	C86,24,71.1,27.4,61.3,34.1z"
          fill="#AE282E"
        />
        <path
          d="M61.3,34.1c-8.7,6.3-13.7,10-17.2,12.8c-1.7,1.3-3.2,2.6-4.7,3.8c-3,2.5-5.7,5-11.1,9.8
	c2.8,12.9,8.6,25.5,16.2,35.9c18.8,0.9,37.2-1.1,37.2-1.1s7.9-15.4,13.3-34c-0.3-0.4-0.7-0.7-1-1.1C84.5,50,80.8,46.6,61.3,34.1z"
          fill="#FFFFFF"
        />
      </svg>
    </LogoStyled>
  );
}
