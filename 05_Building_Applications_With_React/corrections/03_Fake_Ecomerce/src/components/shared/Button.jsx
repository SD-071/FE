
function Button({children, text, onClick, className = "btn", extraStyles = ""}) {
  return (
    <button className={`${className} ${extraStyles}`} onClick={onClick}>{children ? children : text}</button>
  )
}

export default Button;