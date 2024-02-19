const CustomArrow = ({ onClick, className, style, children }) => {
    return (
      <button className={className} style={style} onClick={onClick}>
        {children}
      </button>
    );
  };
  
  export default CustomArrow;