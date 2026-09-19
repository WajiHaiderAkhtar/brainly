import './App.css'
import {Button} from "./components/ui/Button.tsx"
import { AddIcon } from './icons/AddIcon.tsx'
import {ShareIcon} from "./icons/ShareIcon.tsx"

function App() {
  return (
    <>
      <Button text = {"Share"} variant={"primary"} startIcon={<ShareIcon size = {"md"} />} ></Button>

      <Button text = {"Add Content"} variant={"secondary"} startIcon={<AddIcon size = {"md"} />} ></Button>





    {/* THIS PART WAS JUST TO LEARN  */}
      {/* <Button 
       startIcon = {<ShareIcon size="lg"/>}
       title = {"Share"} 
       size = "lg">
      </Button>
      <Button title = "submit" size = "md"></Button>
      <Button title = "Waji" size = "sm"></Button>
      <ShareIcon size = "sm" />
      <ShareIcon size = "md" />
      <ShareIcon size = "lg" /> */}

    </>
  )
}

export default App
