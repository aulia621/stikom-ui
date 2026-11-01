'use client';
import styled, { useTheme } from 'styled-components';
import { useThemeToggle } from '../lib/providers';

export const Container = styled.div`
  width: 100%;
  max-width: ${(p) => p.theme.container};
  margin: 0 auto;
  padding: 0 ${(p) => p.theme.space.lg};
`;

export const Section = styled.section`
  padding: 4rem 0;
`;

export const SectionTitle = styled.h2`
  font-size: 1.9rem;
  margin-bottom: ${(p) => p.theme.space.sm};
`;

export const SectionDesc = styled.p`
  color: ${(p) => p.theme.color.muted};
  max-width: 560px;
  margin-bottom: ${(p) => p.theme.space.xl};
`;

export const Grid = styled.div`
  display: grid;
  gap: ${(p) => p.theme.space.lg};
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

/* ---------- Tombol ganti tema (emoji) ---------- */
const RoundButton = styled.button`
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  border-radius: 50%;
  cursor: pointer;
  background: ${(p) => p.theme.color.surface};
  border: 1px solid ${(p) => p.theme.color.border};
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: rotate(20deg) scale(1.1);
    box-shadow: ${(p) => p.theme.shadow.md};
  }
  &:focus-visible {
    outline: 3px solid ${(p) => p.theme.color.accent};
    outline-offset: 2px;
  }
`;

export function ThemeToggle() {
  const toggle = useThemeToggle();
  const theme = useTheme();
  const isDark = theme.name === 'dark';

  return (
    <RoundButton
      onClick={toggle}
      aria-label={isDark ? 'Ganti ke tema terang' : 'Ganti ke tema gelap'}
      title={isDark ? 'Tema terang' : 'Tema gelap'}
    >
      {isDark ? '☀️' : '🌙'}
    </RoundButton>
  );
}

/* ---------- Navbar ---------- */
const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${(p) => p.theme.color.bg}ee;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${(p) => p.theme.color.border};
`;

const BarInner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
`;

const Brand = styled.a`
  font-weight: 800;
  font-size: 1.1rem;
  color: ${(p) => p.theme.color.primary} !important;
`;

const Links = styled.nav`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.space.lg};

  a {
    font-weight: 500;
    color: ${(p) => p.theme.color.muted};
    transition: color 0.2s;
  }
  a:hover { color: ${(p) => p.theme.color.primary}; }

  @media (max-width: 640px) {
    a { display: none; }
  }
`;

export function Navbar() {
  return (
    <Bar>
      <BarInner>
        <Brand href="#">🎓 STIKOM UI</Brand>
        <Links>
          <a href="#tentang">Tentang</a>
          <a href="#matakuliah">Mata Kuliah</a>
          <a href="#karier">Karier</a>
          <a href="/katalog">Katalog</a>
          <ThemeToggle />
        </Links>
      </BarInner>
    </Bar>
  );
}