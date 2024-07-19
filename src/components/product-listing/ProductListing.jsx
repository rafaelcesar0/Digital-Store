import ProductCard from "../product-card/ProductCard.jsx";
import Product from "./ProductItens.jsx";


const ProductListing = () => {
  return (
    <div>
      <ProductCard props={Product[0]} />
    </div>
  )
}

export default ProductListing