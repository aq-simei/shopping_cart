export function Button({ name, onClick, product }) {
  return (
    <button name={name} onClick={()=> onClick(product)} >
      {name}
    </button>
  );
}
