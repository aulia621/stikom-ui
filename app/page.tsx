'use client';
import styled from 'styled-components';
import { Button } from '../design-system/Button';
import { Card } from '../design-system/Card';
import { Badge } from '../design-system/Badge';
import {
  Container, Section, SectionTitle, SectionDesc, Grid, Navbar,
} from '../design-system/Layout';

const Hero = styled.section`
  background: linear-gradient(135deg, ${(p) => p.theme.color.heroFrom}, ${(p) => p.theme.color.heroTo});
  border-bottom: 1px solid ${(p) => p.theme.color.border};
  padding: 5rem 0 4rem;
`;

const HeroInner = styled(Container)`
  display: grid;
  gap: 3rem;
  align-items: center;
  grid-template-columns: 1.2fr 1fr;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3.2rem);
  line-height: 1.15;
  margin: ${(p) => p.theme.space.md} 0;
`;

const Highlight = styled.span`
  color: ${(p) => p.theme.color.primary};
`;

const HeroText = styled.p`
  font-size: ${(p) => p.theme.font.lg};
  color: ${(p) => p.theme.color.muted};
  margin-bottom: ${(p) => p.theme.space.lg};
`;

const Actions = styled.div`
  display: flex;
  gap: ${(p) => p.theme.space.md};
  flex-wrap: wrap;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${(p) => p.theme.space.md};
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  color: ${(p) => p.theme.color.primary};
`;

const StatLabel = styled.div`
  font-size: ${(p) => p.theme.font.sm};
  color: ${(p) => p.theme.color.muted};
`;

const Icon = styled.div`
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  font-size: 1.6rem;
  border-radius: ${(p) => p.theme.radius.md};
  background: ${(p) => p.theme.color.bg};
  border: 1px solid ${(p) => p.theme.color.border};
  margin-bottom: ${(p) => p.theme.space.md};
`;

const CardTitle = styled.h3`
  margin-bottom: ${(p) => p.theme.space.sm};
`;

const CardText = styled.p`
  color: ${(p) => p.theme.color.muted};
  margin-bottom: 0;
`;

const Cta = styled.div`
  background: linear-gradient(135deg, ${(p) => p.theme.color.primary}, ${(p) => p.theme.color.secondary});
  color: ${(p) => p.theme.color.onPrimary};
  border-radius: ${(p) => p.theme.radius.lg};
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: ${(p) => p.theme.shadow.md};

  h2 { margin-bottom: ${(p) => p.theme.space.sm}; font-size: 1.9rem; }
  p { opacity: 0.9; margin-bottom: ${(p) => p.theme.space.lg}; }
`;

const CtaButton = styled(Button)`
  background: ${(p) => p.theme.color.accent};
  color: #0b1a2e;
`;

const Footer = styled.footer`
  margin-top: 2rem;
  padding: 2rem 0;
  border-top: 1px solid ${(p) => p.theme.color.border};
  text-align: center;
  color: ${(p) => p.theme.color.muted};
  font-size: ${(p) => p.theme.font.sm};
`;

const matkul = [
  { icon: '🌐', title: 'Pemrograman Web', desc: 'HTML, CSS, JavaScript, React, dan Next.js untuk membangun aplikasi web modern.' },
  { icon: '🗄️', title: 'Basis Data', desc: 'Perancangan dan pengelolaan data dengan SQL dan model relasional.' },
  { icon: '🔌', title: 'Jaringan Komputer', desc: 'Konsep jaringan, protokol, dan keamanan dasar sistem terhubung.' },
  { icon: '📱', title: 'Pemrograman Mobile', desc: 'Membuat aplikasi Android dan lintas platform.' },
  { icon: '🤖', title: 'Kecerdasan Buatan', desc: 'Dasar machine learning dan penerapannya.' },
  { icon: '🧩', title: 'Rekayasa Perangkat Lunak', desc: 'Siklus pengembangan, analisis kebutuhan, dan pengujian.' },
];

const karier = [
  { icon: '💻', title: 'Web Developer', desc: 'Membangun situs dan aplikasi web untuk berbagai industri.' },
  { icon: '📊', title: 'Data Analyst', desc: 'Mengolah data menjadi wawasan untuk keputusan bisnis.' },
  { icon: '🛡️', title: 'Network Engineer', desc: 'Merancang dan menjaga infrastruktur jaringan.' },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero>
        <HeroInner>
          <div>
            <Badge>✅ Terakreditasi</Badge>
            <HeroTitle>
              Program Studi <Highlight>Teknik Informatika</Highlight>
            </HeroTitle>
            <HeroText>
              STIKOM PGRI Banyuwangi. Siapkan dirimu menjadi talenta digital
              yang siap kerja dan siap berkarya.
            </HeroText>
            <Actions>
              <Button>🚀 Daftar Sekarang</Button>
              <Button $variant="outline" as="a" href="#matakuliah">
                Lihat Mata Kuliah
              </Button>
            </Actions>
          </div>

          <Card>
            <Stats>
              <div><StatNumber>8</StatNumber><StatLabel>Semester</StatLabel></div>
              <div><StatNumber>144</StatNumber><StatLabel>SKS</StatLabel></div>
              <div><StatNumber>S1</StatNumber><StatLabel>Jenjang</StatLabel></div>
            </Stats>
          </Card>
        </HeroInner>
      </Hero>

      <Section id="tentang">
        <Container>
          <SectionTitle>Tentang Prodi</SectionTitle>
          <SectionDesc>
            Isi dengan deskripsi singkat program studi: visi, misi, dan
            keunggulan yang ingin kamu tonjolkan.
          </SectionDesc>
        </Container>
      </Section>

      <Section id="matakuliah" style={{ paddingTop: 0 }}>
        <Container>
          <SectionTitle>Mata Kuliah Unggulan</SectionTitle>
          <SectionDesc>Kurikulum yang dirancang mengikuti kebutuhan industri.</SectionDesc>
          <Grid>
            {matkul.map((m) => (
              <Card key={m.title}>
                <Icon>{m.icon}</Icon>
                <CardTitle>{m.title}</CardTitle>
                <CardText>{m.desc}</CardText>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section id="karier" style={{ paddingTop: 0 }}>
        <Container>
          <SectionTitle>Prospek Karier</SectionTitle>
          <SectionDesc>Ke mana lulusan Teknik Informatika bisa melangkah.</SectionDesc>
          <Grid>
            {karier.map((k) => (
              <Card key={k.title}>
                <Icon>{k.icon}</Icon>
                <CardTitle>{k.title}</CardTitle>
                <CardText>{k.desc}</CardText>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section style={{ paddingTop: 0 }}>
        <Container>
          <Cta>
            <h2>Siap Bergabung bersama Kami?</h2>
            <p>Pendaftaran mahasiswa baru telah dibuka. Mulai perjalanan karier digitalmu hari ini.</p>
            <CtaButton>🎓 Daftar Sekarang</CtaButton>
          </Cta>
        </Container>
      </Section>

      <Footer>
        <Container>© 2026 STIKOM PGRI Banyuwangi · Dibuat dengan STIKOM UI</Container>
      </Footer>
    </>
  );
}