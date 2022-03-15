export function Cart({items}) {
  return (
    <ul>
    {items.map((item)=>{
      return(
        <li key={item.id}>
          <span>{item}</span>
        </li>
        
      )
    }
    )}
    </ul>
  );
}
