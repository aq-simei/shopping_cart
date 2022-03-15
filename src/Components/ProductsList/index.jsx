export function ProductsList({products}) {
  return (
    <ul>
    {products.map((product)=>{
      return(
        <li key={product.id}>
          <span>{product.name}</span>
          <span>{product.description}</span>
        </li>
      )
    })}
    </ul>
  )
}
