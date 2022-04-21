function FontOutput({font}) {

  return (
    <div className="show-font__container">
    <h3 style={{fontFamily: `${font}`}}>
      The brown dog jumped over the gray fox.
    </h3>
    <h3 style={{fontFamily: `${font}`}}>THE BROWN DOG JUMPED OVER THE GRAY FOX.</h3>
    </div>
    )
}

export default FontOutput