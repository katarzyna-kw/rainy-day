import {useState} from "react"
import UpdateColor from '../components/UpdateColor'

function CreateColorPalette() {

  const [baseColor, setBaseColor] = useState('f21717')

  return (
    <section>
      <UpdateColor baseColor={baseColor} setBaseColor={setBaseColor}/>
    </section>
  )
}

export default CreateColorPalette