
function Button({text, onClick, disabled, className, type}) {
  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>{text}</button>
  )
}

export default Button