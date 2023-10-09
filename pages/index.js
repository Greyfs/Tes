import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Starlynime - Portal berita seputar anime terlengkap</title>
        <meta
          name="description"
          content="Starlynime - Portal berita seputar anime"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Apa itu Starlynime?"
        title=" Berawal dari tim yang beranggotakan 3 orang">
        Dengan berfokus pada tema channel dan forum komunitas pecinta anime, Starlynime memberikan wadah untuk berdiskusi, berbagi pandangan, dan terhubung dengan sesama penggemar anime.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Tonton video"
        title="Kenapa kami membuat ini?">di bangun
        Kami adalah komunitas yang berkembang bersama-sama, mendukung penggemar anime di seluruh dunia. Dan Website ini dibangun dengan menggunakan teknologi Next.js dan TailwindCSS.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Apa yang akan kalian temui di Starlynime?"
        title="3 anggota tim yang bisa berubah suatu saat">
        Ke unggulan dari Starlynime dan segala isinya:
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Tanya jawab">
        Semua yang ada disini mungkin akan menjawab pertanyaan kalian semua
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;
