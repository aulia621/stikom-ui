'use client';
import styled from 'styled-components';

type Tone = 'default' | 'accent';

export const Badge = styled.span<{ $tone?: Tone }>`
  display: inline-flex;
  align-items: center;
  padding: ${(p) => p.theme.space.xs} ${(p) => p.theme.space.sm};
  font-size: ${(p) => p.theme.font.sm};
  font-weight: 600;
  line-height: 1.5;
  border-radius: ${(p) => p.theme.radius.pill};
  border: 1px solid ${(p) => p.theme.color.border};
  background: ${(p) =>
    p.$tone === 'accent' ? p.theme.color.accent : p.theme.color.surface};
  color: ${(p) => (p.$tone === 'accent' ? p.theme.color.onPrimary : p.theme.color.text)};
`;
