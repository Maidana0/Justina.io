
const SubmitButton = ({ children, onClick, addClassName }) => {
  return (
    <button type="submit"
      onClick={onClick}
      className={`font-poppins btn bg-magenta text-orange hover:text-accent hover:bg-magenta capitalize ${addClassName}`}
    >
      {children}
    </button>
  )
}

export default SubmitButton