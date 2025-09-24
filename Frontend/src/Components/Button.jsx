export default function Button({ children, className }) {
  return (
    <button className={`transition-colors ${className}`}>
      {children}
    </button>
  );
}
