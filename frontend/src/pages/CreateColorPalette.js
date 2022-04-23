import {useState} from "react"
import UpdateColor from '../components/UpdateColor'

function CreateColorPalette() {

  const [baseColor, setBaseColor] = useState('FFFFFF')

  return (
    <section>
      <UpdateColor baseColor={baseColor} setBaseColor={setBaseColor}/>
    </section>
  )
}

export default CreateColorPalette