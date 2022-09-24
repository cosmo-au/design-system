/** @format */

import { default as NextImage, ImageProps } from 'next/image';
import React from 'react';

import { DefaultProps } from '../../stitches.config';

import { ImageStyled } from './Image.styles';

interface Props extends DefaultProps, ImageProps {
  borderRadius?: 1 | 2 | 3;
  hover?: boolean;
  fillHeight?: string | number;
}

export default function Image(props: Props): JSX.Element {
  const { borderRadius, css, hover, fillHeight, ...rest } = props;

  return (
    <ImageStyled
      borderRadius={borderRadius}
      css={{
        height: fillHeight || '100%',
        ...css,
      }}
      hover={hover}>
      <NextImage {...rest} />
    </ImageStyled>
  );
}

export const ThreesImage = Image;
