/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'arboblar.uz', pathname: '/**' },
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com', pathname: '/**' },
      { protocol: 'https', hostname: 'upload.wikimedia.org', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'pressa.tj', pathname: '/**' },
      { protocol: 'https', hostname: 'eponym.ru', pathname: '/**' },
      { protocol: 'https', hostname: 'ru.wikipedia-on-ipfs.org', pathname: '/**' },
      { protocol: 'https', hostname: 'cdnn1.img.sputnik.tj', pathname: '/**' },
      { protocol: 'https', hostname: 'lh6.googleusercontent.com', pathname: '/**' },
      { protocol: 'https', hostname: 'amit.tj', pathname: '/**' },
      { protocol: 'https', hostname: 'blogger.googleusercontent.com', pathname: '/**' }, // <-- добавлено
    ],
  },
};

export default nextConfig;
