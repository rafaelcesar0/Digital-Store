import ProductCard from "../product-card/ProductCard.jsx";
import ProductItens from "./ProductItens.jsx";


const ProductListing = () => {
  let cards = []
  for (let i = 0; i < ProductItens.length; i++){

    cards.push (<ProductCard props={ProductItens[i]} />)

  }
  return  <div className="flex flex-wrap gap-4 "> {cards} </div>
 
}

export default ProductListing

// --- Refaroração de @rafaelcesar0 ---
// const ProductListing = () => (
//   <div className="flex flex-wrap gap-4">
//     {ProductItens.map(({ name, image, price, priceDiscount }, index) => (
//       <ProductCard
//         key={index}
//         name={name}
//         image={image}
//         price={price}
//         priceDiscount={priceDiscount}
//       />
//     ))}
//   </div>
// );