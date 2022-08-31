import React, { HTMLAttributes, ReactNode } from 'react';

import { breakpoints, DefaultProps } from '../../stitches.config';
import { Loading } from '../Loading';

import { ButtonIconStyled, ButtonStyled } from './Button.styles';

export interface Props extends HTMLAttributes<HTMLButtonElement>, Omit<DefaultProps, 'spacing'> {
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  theme?: 'default' | 'fill' | 'minimal' | 'solid';
  block?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  inline?: DefaultProps['spacing'] | 'auto';
  small?: boolean;
  ariaLabel: string;
  name: string;
}

export default function Button(props: Props): JSX.Element {
  return (
    <ButtonStyled
      aria-label={props.ariaLabel}
      name={props.name}
      block={props.block || false}
      css={{
        ...props.css,
        ...(props.inline && {
          alignSelf: 'center',
          marginRight: props.inline === 'auto' ? 'auto' : `$${props.inline}`,
          verticalAlign: 'middle',
          [breakpoints.phone]: {
            marginRight: props.inline === 'auto' ? 'auto' : `calc($${props.inline} * 0.8)`,
          },
        }),
      }}
      disabled={props.disabled || props.loading || false}
      id={props.id}
      onClick={props.onClick}
      small={props.small}
      theme={props.theme || 'default'}>
      {props.loading && (
        <ButtonIconStyled align='left'>
          <Loading />
        </ButtonIconStyled>
      )}
      {props.icon && (props.iconPosition === 'left' || !props.iconPosition) && <ButtonIconStyled align='left'>{props.icon}</ButtonIconStyled>}
      {props.children}
      {props.icon && props.iconPosition === 'right' && <ButtonIconStyled align='right'>{props.icon}</ButtonIconStyled>}
    </ButtonStyled>
  );
}
