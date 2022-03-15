import { Button } from "../Button"

export function Product({name, description, addToCart}){
  return(
    <>
      <span>{name}</span>
      <span>{description}</span>
      <Button name='Add to cart' onClick={addToCart}/>  
    </>
  )
}
