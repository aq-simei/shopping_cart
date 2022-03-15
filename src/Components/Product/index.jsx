import { Button } from "../Button"

export function Product({props, addToCart}){
  let {name, description} = props
  return(
    <>
      <span>{name}</span>
      <span>{description}</span>
      <Button name='Add to cart' onClick={addToCart}/>
    </>
  )
}
