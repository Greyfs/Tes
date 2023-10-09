import Link from 'next/link';

const Gallery = () => {
  // Daftar gambar beserta deskripsi
  const images = [
    { url: 'https://telegra.ph/file/1d5ae9d104855f2ee5e2c.jpg', description: 'Deskripsi Gambar 1' },
    { url: 'https://telegra.ph/file/1d5ae9d104855f2ee5e2c.jpg', description: 'Deskripsi Gambar 2' },
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
              <Link href={image.url} download>
                <a className="text-blue-500 hover:underline">Download</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
