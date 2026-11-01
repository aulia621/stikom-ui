const base = {
  font: {
    family: "'Inter', system-ui, sans-serif",
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '2rem',
  },
  space: { xs: '0.25rem', sm: '0.5rem', md: '1rem', lg: '1.5rem', xl: '2.5rem' },
  radius: { sm: '4px', md: '8px', lg: '16px', pill: '999px' },
  container: '1100px',
};

export const lightTheme = {
  ...base,
  name: 'light',
  color: {
    bg: '#ffffff',
    surface: '#eef4fc',
    text: '#0b2341',
    muted: '#5b6b82',
    primary: '#1558a8',
    secondary: '#5b6b82',
    accent: '#f0a736',
    border: '#d3dff0',
    onPrimary: '#ffffff',
    heroFrom: '#e3eefc',
    heroTo: '#ffffff',
  },
  shadow: {
    sm: '0 1px 3px rgba(11, 35, 65, 0.08)',
    md: '0 10px 30px rgba(11, 35, 65, 0.12)',
  },
};

export const darkTheme = {
  ...base,
  name: 'dark',
  color: {
    bg: '#0b1a2e',
    surface: '#14283f',
    text: '#e8eef7',
    muted: '#9fb0c7',
    primary: '#4d92e0',
    secondary: '#8394ad',
    accent: '#f0a736',
    border: '#27415f',
    onPrimary: '#0b1a2e',
    heroFrom: '#10294a',
    heroTo: '#0b1a2e',
  },
  shadow: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.4)',
    md: '0 10px 30px rgba(0, 0, 0, 0.5)',
  },
};