import React from 'react';
import arcLogoSrc from '../../assets/ARC_LOGO.svg';

// Design System Constants
export const ARC = {
  bg: '#ebe9e5',
  surface: '#f3f1ed',
  surface2: '#f7f5f1',
  text: '#1a1a1a',
  muted: '#5e5d59',
  faint: '#86857f',
  border: 'rgba(40,30,20,0.10)',
  borderHi: 'rgba(255,255,255,0.85)',
  divider: 'rgba(40,30,20,0.08)',
  dark: '#2a2926',
  darkSoft: '#3a3936',
  accent: '#4ecdc4',
  accentLight: 'rgba(78,205,196,0.18)',
  accentText: '#16615c',
  saffron: '#aa5524',
  saffronOn: '#f7f5f1',
  success: '#3a9d8c',
  warning: '#a36a1f',
  error: '#b03a3a'
};

export const embossShadow =
  'inset 0 1px 0 rgba(255,255,255,0.7), ' +
  '0 1px 2px rgba(40,30,20,0.04), ' +
  '0 2px 6px rgba(40,30,20,0.03)';

export const outlineShadow =
  'inset 0 1px 0 rgba(255,255,255,0.6)';

export const embossedDivider = {
  height: 1,
  background: 'rgba(40,30,20,0.10)',
  boxShadow: '0 1px 0 rgba(255,255,255,0.7)',
  border: 'none',
  flex: '0 0 auto',
};

export const embossedDividerV = {
  width: 1,
  background: 'rgba(40,30,20,0.10)',
  boxShadow: '1px 0 0 rgba(255,255,255,0.7)',
  border: 'none',
  flex: '0 0 auto',
};

export const recessShadow =
  'inset 0 1px 2px rgba(40,30,20,0.07), ' +
  'inset 0 -1px 0 rgba(255,255,255,0.5)';

export const darkEmbossShadow =
  'inset 0 1px 0 rgba(255,255,255,0.18), ' +
  'inset 0 -1px 0 rgba(0,0,0,0.4), ' +
  '0 2px 4px rgba(0,0,0,0.18), ' +
  '0 10px 24px rgba(0,0,0,0.22)';

export const cardCopy = {
  margin: '0 0 14px 0', fontSize: 13, lineHeight: 1.5, color: ARC.muted
};

export const btnSecondary: any = {
  height: 44, padding: '0 16px', borderRadius: 12,
  background: 'transparent', color: ARC.text,
  border: `1px solid ${ARC.border}`, cursor: 'pointer',
  boxShadow: outlineShadow,
  fontFamily: 'inherit', fontSize: 13, fontWeight: 500
};

export const btnGhost: any = {
  height: 28, background: 'transparent', border: 'none', cursor: 'pointer',
  color: ARC.muted, fontFamily: 'inherit', fontSize: 13, fontWeight: 500
};

export const btnPrimary: any = {
  height: 44, padding: '0 18px', borderRadius: 12,
  background: ARC.dark, color: '#f7f5f1',
  border: `1px solid ${ARC.dark}`,
  boxShadow: darkEmbossShadow,
  cursor: 'pointer',
  fontFamily: 'inherit', fontSize: 13, fontWeight: 600,
  letterSpacing: '0.005em'
};

export function Card({ children, padding = 20 }: { children: React.ReactNode, padding?: number }) {
  return (
    <div style={{
      background: ARC.surface, borderRadius: 14,
      border: `1px solid ${ARC.border}`,
      boxShadow: embossShadow,
      padding, display: 'flex', flexDirection: 'column'
    }}>{children}</div>
  );
}

export function CardHeader({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
      {icon}
      <div style={{ fontSize: 15, fontWeight: 500 }}>{title}</div>
    </div>
  );
}

export const ArcLogo = ({ height = 28, style = {} }: any) => (
  <img 
    src={arcLogoSrc} 
    alt="Arc" 
    style={{ height, display: 'block', ...style }} 
  />
);

export const IconGoogle = ({ size = 18 }) =>
  <svg width={size} height={size} viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3a12 12 0 1 1-3.3-13l5.7-5.7A20 20 0 1 0 44 24c0-1.2-.1-2.4-.4-3.5z" />
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8A12 12 0 0 1 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7A20 20 0 0 0 6.3 14.7z" />
    <path fill="#4CAF50" d="M24 44a20 20 0 0 0 13.5-5.2l-6.2-5.3a12 12 0 0 1-18-6.2l-6.5 5A20 20 0 0 0 24 44z" />
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.1 5.5l6.2 5.3C40.4 36.1 44 30.6 44 24c0-1.2-.1-2.4-.4-3.5z" />
  </svg>;

export function Screen({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full mx-auto max-w-2xl h-full relative transition-all" style={{
      background: ARC.bg,
      paddingTop: 0, paddingBottom: 0,
      boxSizing: 'border-box',
      color: ARC.text,
      WebkitFontSmoothing: 'antialiased',
      letterSpacing: '-0.005em',
      display: 'flex', flexDirection: 'column'
    }}>{children}</div>
  );
}
