import { useState, useEffect } from 'react'
import apiGeneratePalettes from '../../api/apiGeneratePalettes'
import apiCalls from '../../api/apiCalls'
import { HexColorPicker} from 'react-colorful'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


function LightenColor({currentPalette, currentColor, i, setColorChange}) {

  const [newColor, setNewColor] = useState(null)
  const [open, setOpen] = useState(false) 
  const [color, setColor] = useState(currentColor)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useEffect(() => {
    console.log("new col in lc: ", newColor)
    console.log("current pal in lc: ", currentPalette)
  }, [newColor])


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    bgcolor: '#ffffff',
    border: '0',
    boxShadow: 24,
    p: 4,
    display: "flex",
    justifyContent: "center",
    borderRadius: "10px"
  };
  
  const saveNewColor = async () => {
    let colorSeq = i+1
    let colorKey = `color${colorSeq}`
    console.log("currentColor, colorkey: ", currentColor, colorKey)

    let newColorData = {
      [colorKey]: color
    }

    const data = await apiCalls.updateColorPaletteById(currentPalette.id, newColorData)

    if (data) {
      console.log("OPEN in save: ", open)
      console.log("color has changed")
      console.log("color: ", color)
      setColorChange(true)
      setNewColor(color)
      currentColor = color

    }
    else {
      console.log("color has NOT changed")
    }
  }




  return (
    <div className='container'>
      <button style={{backgroundColor: `${newColor}`}} className='minus' onClick={handleOpen}>
        Edit
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <HexColorPicker color={color} onChange={setColor} onClick={saveNewColor} />
        </Box>
      </Modal>
    </div>

    )
}

export default LightenColor