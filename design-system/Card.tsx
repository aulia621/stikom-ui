'use client';
import styled from 'styled-components';

export const Card = styled.div`
  background: ${(p) => p.theme.color.surface};
  color: ${(p) => p.theme.color.text};
  border: 1px solid ${(p) => p.theme.color.border};
  border-radius: ${(p) => p.theme.radius.lg};
  padding: ${(p) => p.theme.space.lg};
  box-shadow: ${(p) => p.theme.shadow.sm};
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${(p) => p.theme.shadow.md};
  }
`;