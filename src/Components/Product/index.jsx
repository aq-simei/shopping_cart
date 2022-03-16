import { Button } from "../Button"

export function Product({product, addToCart}){
  const {name, description} = product
  return(
    <>
      <span>{name}</span>
      <span>{description}</span>
      <Button name='Add to cart' onClick={()=>addToCart(product)}/>  
    </>
  )
}
