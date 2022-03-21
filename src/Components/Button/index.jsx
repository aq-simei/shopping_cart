export function Button({ name, onClick, ariaLabel }) {
  return (
    <button name={name} onClick={onClick} aria-label={ariaLabel}>
      {name}
    </button>
  );
}
