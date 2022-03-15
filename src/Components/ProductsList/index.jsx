import { Product } from "../Product"
export function ProductsList({products, addToCart}) {
  return (
    <ul>{
    products.map((product)=>{
      return(
        <li key={product.id}>
          <Product {...product} addToCart={addToCart}/>
        </li>        
      )
    })
  }
  </ul>
  )
}
