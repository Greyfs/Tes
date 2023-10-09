import React from 'react';
import DisqusComments from './DisqusComments';

const Forum = () => {
  // Konfigurasi Disqus
  const disqusShortname = 'your-disqus-shortname'; // Ganti dengan shortname Anda
  const disqusConfig = {
    url: 'https://example.com/forum', // Ganti dengan URL forum Anda
    identifier: 'forum-page', // Ganti dengan identifier unik untuk halaman forum
    title: 'Forum Page', // Ganti dengan judul halaman forum Anda
  };

  return (
    <div>
      {/* Konten halaman forum Anda */}
      <h1>Forum Page</h1>
      <p>Welcome to the forum!</p>

      {/* Komponen DisqusComments */}
      <DisqusComments shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default Forum;
                                                          
