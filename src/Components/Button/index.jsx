export function Button({ name, onClick}) {
  return (
    <button name={name} onClick={()=> onClick()} >
      {name}
    </button>
  );
}
