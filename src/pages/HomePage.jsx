import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import ProductListing from '../components/product-listing/ProductListing';

const HomePage = () => {
  return (
    <Layout>
      <Gallery
        slides={[
          '/public/home-slide-1.jpeg',
          '/public/home-slide-2.jpeg',
          '/public/home-slide-3.jpeg',
          '/public/home-slide-4.jpeg',
          '/public/home-slide-5.jpeg',
          '/public/home-slide-6.jpeg',
          '/public/home-slide-7.jpeg',
          '/public/home-slide-8.jpeg',
        ]}
      />
      <ProductListing/>
    </Layout>
  );
};

export default HomePage;
