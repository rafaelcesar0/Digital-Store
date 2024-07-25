import Layout from "../components/Layout"
import ProductListing from "../components/product-listing/ProductListing"
import BuyBox from "../components/BuyBox/BuyBox";

const HomePage = () => {
  return (
    <Layout>
      <BuyBox />
      <ProductListing />
    </Layout>
  );
}

export default HomePage