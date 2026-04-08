function ErrorMessage({ children, className = "" }) {
  if (!children) return null;

  return (
    <span className={`text-danger text-sm mt-3 block ${className}`}>
      {children}
    </span>
  );
}

export default ErrorMessage;
