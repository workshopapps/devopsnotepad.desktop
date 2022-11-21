const RoomCard = ({className, children}) => {
    return (
      <article className={`card ${className}`}>
      {children}
    </article>
    )
  }
  
  export default RoomCard