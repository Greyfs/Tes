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
  title: "Highlightkan Keuntungan Anda",
  desc: "Anda dapat menggunakan ruang ini untuk menyoroti keuntungan pertama atau fitur produk Anda. Ini juga dapat berisi gambar atau ilustrasi seperti contoh di atas bersama dengan beberapa poin poin penting.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Mengerti Pelanggan Anda",
      desc: "Kemudian jelaskan poin pertama secara singkat dalam satu atau dua kalimat.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Meningkatkan Akuisisi",
      desc: "Di sini Anda dapat menambahkan poin keuntungan berikutnya.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Mendorong Retensi Pelanggan",
      desc: "Ini akan menjadi poin terakhir Anda dalam bagian ini.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Tawarkan Lebih Banyak Keuntungan di Sini",
  desc: "Anda dapat menggunakan tata letak yang sama dengan gambar berbalik untuk menyoroti sisa keuntungan produk Anda. Ini juga dapat berisi gambar atau ilustrasi seperti bagian di atas bersama dengan beberapa poin penting.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Template Responsif untuk Ponsel",
      desc: "Nextly dirancang sebagai template responsif ponsel pertama.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Ditenagai oleh Next.js & TailwindCSS",
      desc: "Template ini didukung oleh teknologi dan alat terbaru.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Mode Gelap & Terang",
      desc: "Nextly dilengkapi dengan mode gelap & terang tanpa konfigurasi. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
