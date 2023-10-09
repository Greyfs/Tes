import Link from 'next/link';
import { useState } from 'react';

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    { url: 'https://telegra.ph/file/1d5ae9d104855f2ee5e2c.jpg', description: 'Deskripsi Gambar 1' },
    { url: 'https://telegra.ph/file/1d5ae9d104855f2ee5e2c.jpg', description: 'Deskripsi Gambar 2' },
    { url: 'https://telegra.ph/file/your_image_url_here', description: 'Deskripsi Gambar 3' },
    { url: 'https://telegra.ph/file/your_image_url_here', description: 'Deskripsi Gambar 4' },
    { url: 'https://telegra.ph/file/your_image_url_here', description: 'Deskripsi Gambar 5' },
    { url: 'https://telegra.ph/file/your_image_url_here', description: 'Deskripsi Gambar 6' },
    { url: 'https://telegra.ph/file/your_image_url_here', description: 'Deskripsi Gambar 7' },
    { url: 'https://telegra.ph/file/your_image_url_here', description: 'Deskripsi Gambar 8' },
    { url: 'https://telegra.ph/file/your_image_url_here', description: 'Deskripsi Gambar 9' },
    { url: 'https://telegra.ph/file/your_image_url_here', description: 'Deskripsi Gambar 10' },
    { url: 'https://telegra.ph/file/your_image_url_here', description: 'Deskripsi Gambar 11' },
    { url: 'https://telegra.ph/file/your_image_url_here', description: 'Deskripsi Gambar 12' },
    // Tambahkan gambar dan deskripsi lainnya di sini
  ];

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
          >
            <img
              src={image.url}
              alt={`Image ${index}`}
              className={`w-full h-auto ${hoveredIndex === index ? 'opacity-75' : 'opacity-100'}`}
            />
            <div className="mt-2">
              <p>{image.description}</p>
              <a href={image.url} download={`Image${index}.png`} className={`text-blue-500 hover:underline ${hoveredIndex === index ? 'opacity-75' : 'opacity-100'}`}>Download</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
