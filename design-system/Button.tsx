'use client';
import styled, { css } from 'styled-components';

type Variant = 'primary' | 'secondary' | 'outline';
type Size = 'sm' | 'md';

const variants = {
  primary: css`
    background: ${(p) => p.theme.color.primary};
    color: ${(p) => p.theme.color.onPrimary};
    border: 2px solid transparent;
  `,
  secondary: css`
    background: ${(p) => p.theme.color.secondary};
    color: ${(p) => p.theme.color.onPrimary};
    border: 2px solid transparent;
  `,
  outline: css`
    background: transparent;
    color: ${(p) => p.theme.color.primary};
    border: 2px solid ${(p) => p.theme.color.primary};
  `,
};

const sizes = {
  sm: css`
    padding: ${(p) => p.theme.space.xs} ${(p) => p.theme.space.md};
    font-size: ${(p) => p.theme.font.sm};
  `,
  md: css`
    padding: ${(p) => p.theme.space.sm} ${(p) => p.theme.space.lg};
    font-size: ${(p) => p.theme.font.md};
  `,
};

export const Button = styled.button<{ $variant?: Variant; $size?: Size }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(p) => p.theme.space.sm};
  font-family: ${(p) => p.theme.font.family};
  font-weight: 600;
  border-radius: ${(p) => p.theme.radius.md};
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s, filter 0.15s;
  ${(p) => variants[p.$variant ?? 'primary']}
  ${(p) => sizes[p.$size ?? 'md']}

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${(p) => p.theme.shadow.md};
    filter: brightness(1.08);
  }
  &:focus-visible {
    outline: 3px solid ${(p) => p.theme.color.accent};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;