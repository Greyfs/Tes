import Link from 'next/link';
import { useState } from 'react';

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    { url: 'https://telegra.ph/file/1d5ae9d104855f2ee5e2c.jpg', description: 'Deskripsi Gambar 1', downloadLink: 'https://example.com/download-link-1' },
    { url: 'https://telegra.ph/file/1d5ae9d104855f2ee5e2c.jpg', description: 'Deskripsi Gambar 2', downloadLink: 'https://example.com/download-link-2' },
    // Tambahkan gambar dan deskripsi lainnya di sini
  ];

  const handleImageClick = (index) => {
    alert('Klik tombol "Download" untuk mengunduh gambar.');
  };

  const handleTextCopy = () => {
    alert('Salinan teks dilarang.');
  };

  return (
    <div className="container mx-auto mt-5 p-5">
      <h1 className="text-2xl font-bold mb-3">Gallery</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="border p-3 rounded-lg transition-transform transform hover:scale-105"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image.url}
              alt={`Image ${index}`}
              className={`w-full h-auto ${hoveredIndex === index ? 'opacity-75' : 'opacity-100'}`}
            />
            <div className="mt-2">
              <p onCopy={handleTextCopy}>{image.description}</p>
              <Link href={image.downloadLink}>
                <a
                  className={`text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-full cursor-pointer text-center block`}
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
