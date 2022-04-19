import {useState} from "react"
import UpdateColor from '../components/UpdateColor'

function CreateColorPalette() {

  const [baseColor, setBaseColor] = useState('FFFFFF')

  return (
    <div className="create__container">
      <h2>Pick a base color:</h2>
      <UpdateColor baseColor={baseColor} setBaseColor={setBaseColor}/>
    </div>
  )
}

export default CreateColorPalette