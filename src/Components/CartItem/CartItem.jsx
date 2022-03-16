export const CartItem = ({addedProduct}) =>{
  return(
    <li key={addedProduct.id}>
      <span>{addedProduct.name}</span>
      <span>{addedProduct.description}</span>
    </li>

  )
}
