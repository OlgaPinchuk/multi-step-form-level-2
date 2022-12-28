export const Button = ({
  id,
  type = "button",
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <button
      className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed"
      data-testid={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
