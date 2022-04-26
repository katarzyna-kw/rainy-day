import {useEffect} from 'react'
import WebFont from 'webfontloader'

function FontOutput({font, bgColor, fontColor}) {

  const currentFont = font

  useEffect(() => {
    WebFont.load({
      google: {
        families: [`${font}`]
      }
    })
  }, [currentFont])

  return (
    <div className="show-font__container" style={{backgroundColor: `${bgColor}`}}>
    <h3 style={{fontFamily: `${font}`, color: `${fontColor}`}}>
      The brown dog jumped over the gray fox.
    </h3>
    {/* <h3 style={{fontFamily: `${font}`, color: `${fontColor}`}}>THE BROWN DOG JUMPED OVER THE GRAY FOX.</h3> */}
    </div>
    )
}

export default FontOutput