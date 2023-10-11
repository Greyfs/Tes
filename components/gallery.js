import { useState } from 'react';

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    { url: 'https://telegra.ph/fi', description: 'Deskripsi Gambar 1', downloadLink: 'https://example.com/download-link-1' },
    { url: 'https://telegra.', description: 'Deskripsi Gambar 2', downloadLink: 'https://example.com/download-link-2' },
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
            className={`border p-3 rounded-lg transition-transform transform ${
              hoveredIndex === index ? 'hover:scale-105 opacity-75' : 'opacity-100'
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleImageClick(index)}
          >
            <div className="relative">
              <img src={image.url} alt={`Image ${index}`} className="w-full h-auto" />
              <div
                className="absolute bottom-0 left-0 right-0 bg-black text-white text-center p-2 opacity-0 transition-opacity hover:opacity-90"
              >
                {image.description}
              </div>
            </div>
            <div className="mt-2">
              <p onCopy={handleTextCopy}>{image.description}</p>
              <a
                href={image.downloadLink}
                className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-full cursor-pointer text-center block"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
