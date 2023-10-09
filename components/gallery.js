import Link from 'next/link';
import { useEffect } from 'react';

const Gallery = () => {
  useEffect(() => {
    const pesen = "HAHA NICE TRY DUDE 😂, enak aja😎👍";

    function clickIE4() {
      if (event.button === 2) {
        alert(pesen);
        return false;
      }
    }

    function clickNS4(e) {
      if (document.layers || (document.getElementById && !document.all)) {
        if (e.which === 2 || e.which === 3) {
          alert(pesen);
          return false;
        }
      }
    }

    if (document.layers) {
      document.captureEvents(Event.MOUSEDOWN);
      document.onmousedown = clickNS4;
    } else if (document.all && !document.getElementById) {
      document.onmousedown = clickIE4;
    }
    document.oncontextmenu = new Function("alert(pesen);return false");
  }, []);

  const images = [
    { url: 'https://telegra.ph/file/1d5ae9d104855f2ee5e2c.jpg', description: 'Deskripsi Gambar 1', downloadLink: 'https://example.com/download-link-1' },
    { url: 'https://telegra.ph/file/1d5ae9d104855f2ee5e2c.jpg', description: 'Deskripsi Gambar 2', downloadLink: 'https://example.com/download-link-2' },
    // Tambahkan gambar dan deskripsi lainnya di sini
  ];

  return (
    <div className="container mx-auto mt-5 p-5">
      <h1 className="text-2xl font-bold mb-3">Gallery</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="border p-3 rounded-lg">
            <img src={image.url} alt={`Image ${index}`} className="w-full h-auto" />
            <div className="mt-2">
              <p>{image.description}</p>
              <Link href={image.downloadLink}>
                <a
                  className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-full cursor-pointer text-center block"
                >
                  Download
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
