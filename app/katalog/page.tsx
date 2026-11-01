'use client';
import styled, { useTheme } from 'styled-components';
import { Button } from '../../design-system/Button';
import { Card } from '../../design-system/Card';
import { Badge } from '../../design-system/Badge';
import {
  Container, Section, SectionTitle, SectionDesc, Grid, Navbar,
} from '../../design-system/Layout';

const Row = styled.div`
  display: flex;
  gap: ${(p) => p.theme.space.md};
  flex-wrap: wrap;
  align-items: center;
`;

const Label = styled.p`
  font-size: ${(p) => p.theme.font.sm};
  color: ${(p) => p.theme.color.muted};
  margin: ${(p) => p.theme.space.md} 0 ${(p) => p.theme.space.sm};
`;

/* ---------- Token warna ---------- */
const Swatch = styled.div<{ $color: string }>`
  height: 64px;
  border-radius: ${(p) => p.theme.radius.md};
  border: 1px solid ${(p) => p.theme.color.border};
  background: ${(p) => p.$color};
  margin-bottom: ${(p) => p.theme.space.sm};
`;

const TokenName = styled.div`
  font-weight: 600;
  font-size: ${(p) => p.theme.font.sm};
`;

const TokenValue = styled.div`
  font-family: monospace;
  font-size: 0.8rem;
  color: ${(p) => p.theme.color.muted};
`;

const SwatchGrid = styled.div`
  display: grid;
  gap: ${(p) => p.theme.space.md};
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
`;

function ColorTokens() {
  const theme = useTheme();
  const entries = Object.entries(theme.color);

  return (
    <SwatchGrid>
      {entries.map(([name, value]) => (
        <Card key={name} style={{ padding: '0.75rem' }}>
          <Swatch $color={value} />
          <TokenName>{name}</TokenName>
          <TokenValue>{value}</TokenValue>
        </Card>
      ))}
    </SwatchGrid>
  );
}

/* ---------- Token spasi & radius ---------- */
const Box = styled.div<{ $radius: string }>`
  width: 64px;
  height: 64px;
  background: ${(p) => p.theme.color.primary};
  border-radius: ${(p) => p.$radius};
  margin-bottom: ${(p) => p.theme.space.sm};
`;

const Bar = styled.div<{ $width: string }>`
  height: 16px;
  width: ${(p) => p.$width};
  background: ${(p) => p.theme.color.accent};
  border-radius: ${(p) => p.theme.radius.sm};
`;

function OtherTokens() {
  const theme = useTheme();

  return (
    <Grid>
      <Card>
        <h3>Radius</h3>
        <Row>
          {Object.entries(theme.radius).map(([name, value]) => (
            <div key={name}>
              <Box $radius={value} />
              <TokenName>{name}</TokenName>
              <TokenValue>{value}</TokenValue>
            </div>
          ))}
        </Row>
      </Card>

      <Card>
        <h3>Spasi</h3>
        {Object.entries(theme.space).map(([name, value]) => (
          <Row key={name} style={{ marginBottom: '0.5rem' }}>
            <TokenName style={{ width: 32 }}>{name}</TokenName>
            <Bar $width={value} />
            <TokenValue>{value}</TokenValue>
          </Row>
        ))}
      </Card>

      <Card>
        <h3>Tipografi</h3>
        {(['sm', 'md', 'lg', 'xl'] as const).map((key) => (
          <p key={key} style={{ fontSize: theme.font[key], margin: '0 0 0.5rem' }}>
            {key} · {theme.font[key]} · Teknik Informatika
          </p>
        ))}
      </Card>
    </Grid>
  );
}

export default function Katalog() {
  return (
    <>
      <Navbar />

      <Section>
        <Container>
          <SectionTitle>Katalog STIKOM UI</SectionTitle>
          <SectionDesc>
            Daftar komponen dan token yang dipakai di mini design system ini.
            Klik tombol 🌙 / ☀️ di navbar untuk mengganti tema.
          </SectionDesc>

          <Grid>
            <Card>
              <h2>Button</h2>
              <Label>Variant</Label>
              <Row>
                <Button $variant="primary">Primary</Button>
                <Button $variant="secondary">Secondary</Button>
                <Button $variant="outline">Outline</Button>
              </Row>
              <Label>Ukuran</Label>
              <Row>
                <Button $size="sm">Small</Button>
                <Button $size="md">Medium</Button>
              </Row>
              <Label>Disabled</Label>
              <Row>
                <Button disabled>Disabled</Button>
              </Row>
            </Card>

            <Card>
              <h2>Badge</h2>
              <Row>
                <Badge>✅ Terakreditasi</Badge>
                <Badge $tone="accent">🆕 Baru</Badge>
              </Row>
            </Card>

            <Card>
              <h2>Card</h2>
              <p>Card mengikuti token warna, radius, spasi, dan bayangan dari tema aktif.</p>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section style={{ paddingTop: 0 }}>
        <Container>
          <SectionTitle>Token Warna</SectionTitle>
          <SectionDesc>Nilainya berubah otomatis mengikuti tema terang atau gelap.</SectionDesc>
          <ColorTokens />
        </Container>
      </Section>

      <Section style={{ paddingTop: 0 }}>
        <Container>
          <SectionTitle>Token Lainnya</SectionTitle>
          <SectionDesc>Radius, spasi, dan tipografi yang dipakai semua komponen.</SectionDesc>
          <OtherTokens />
        </Container>
      </Section>
    </>
  );
}