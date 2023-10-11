import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Membuat hari kalian menyenangkan",
  desc: "Diwebsite Starlynime Kalian bisa mendapatkan berbagai informasi dan hal menarik seperti gambar dengan resolusi tinggi dengan gratis untuk kalian pakai sebagai wallpaper kalian.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Website yang menyenangkan",
      desc: "Website dan blog yang mudah di jelajahi dengan tidak banyaknya iklan",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Konten Terupdate",
      desc: "Kita memberikan konten terupdate dan terpopuler.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Kualitas terpilih website Starlynime",
      desc: "Website yang Responsive dan tidak banyak bug yang menyebabkan lag",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Selain itu kami juga menyesuaikan Website dengan Gaya modern",
  desc: "Di tahun 2023 ini orang orang lebih menyukai memakai ponsel di banding Computer, karena lebih efisien hemat dan cepat, berikut dibawah ini adalah fitur dan tampilan website yang telah disesuaikan agar cocok di perangkat mobile.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Responsif untuk Ponsel",
      desc: "Starlynime dirancang sebagai Website responsif ponsel.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Ditenagai oleh Next.js & TailwindCSS",
      desc: "Website ini didukung oleh teknologi dan alat terbaru.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Mode Gelap & Terang",
      desc: "Starlynime dilengkapi dengan mode gelap & terang ini cocok untuk kalian sesuai lebih suka yang mana.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
