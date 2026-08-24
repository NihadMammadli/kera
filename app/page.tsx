import { Band } from '@/components/Band';
import { Foot } from '@/components/Foot';
import { Hero } from '@/components/Hero';
import { ArchDefs } from '@/components/Icons';
import { Kitchen } from '@/components/Kitchen';
import { Menu } from '@/components/Menu';
import { Motion } from '@/components/Motion';
import { NameSection } from '@/components/NameSection';
import { Nav } from '@/components/Nav';
import { Rooms } from '@/components/Rooms';
import { Visit } from '@/components/Visit';
import { Work } from '@/components/Work';

export default function Page() {
  return (
    <>
      <ArchDefs />
      <Nav />
      <main>
        <Hero />
        <Band />
        <NameSection />
        <Kitchen />
        <Rooms />
        <Menu />
        <Work />
        <Visit />
      </main>
      <Foot />
      <Motion />
    </>
  );
}
