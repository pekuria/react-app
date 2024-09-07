let childElement: JSX.Element[]


const Card = ({ children = childElement , bg = 'bg-gray-100' }) => {
  return (
    <div className={`${bg} p-6 round-lg shadow-md`}>{children}</div>
  )
}

export default Card