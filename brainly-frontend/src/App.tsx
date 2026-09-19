import './App.css'
import {Button} from "./components/ui/Button.tsx"
import {ShareIcon} from "./icons/ShareIcon.tsx"

function App() {
  return (
    <>
      <Button 
       startIcon = {<ShareIcon size="lg"/>}
       title = {"Share"} 
       size = "lg">
      </Button>
      <Button title = "submit" size = "md"></Button>
      <Button title = "Waji" size = "sm"></Button>
      <ShareIcon size = "sm" />
      <ShareIcon size = "md" />
      <ShareIcon size = "lg" />

    </>
  )
}

export default App
