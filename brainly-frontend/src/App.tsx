import './App.css'
import {Button} from "./components/Button.tsx"
import { Card } from './components/Card.tsx'
import { AddIcon } from './icons/AddIcon.tsx'
import {ShareIcon} from "./icons/ShareIcon.tsx"

function App() {
  return (
    <>
      <Button text = {"Share Brain"} variant={"secondary"} startIcon={<ShareIcon size = {"md"} />} ></Button>
      <Button text = {"Add Content"} variant={"primary"} startIcon={<AddIcon size = {"md"} />} ></Button>
      <div className="flex">
      <Card type = "youtube" title="Erwin AMV" link = "https://youtu.be/lLXsJB6m5TY?si=6xpWuaopMYIePglL" />
      <Card type = "twitter" title="First Tweet" link = "https://x.com/kirat_tw/status/1633685473821425666" />
      </div>



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
