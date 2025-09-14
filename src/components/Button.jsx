const Button = ({
  title,
  id,
  rightIcon,
  leftIcon,
  containerClass,
  textClass,
}) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden  bg-blue-75 px-6 py-[10px] text-black text-2xl ${containerClass} hover:outline-3 hover:outline-blue-75 hover:text-blue-75 hover:bg-black transition-colors duration-400`}
    >
      {leftIcon}

      <span
        className={`relative inline-flex overflow-hidden font-general uppercase ${
          textClass ? textClass : "text-xs"
        }`}
      >
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
