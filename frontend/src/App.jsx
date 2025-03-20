import Welcome from "../pages/Welcome"
import About from "../pages/About"
import SignUp from "../pages/SignUp"
import LogIn from "../pages/LogIn"
import Newsfeed from "../pages/Newsfeed"
import StartingOnAGarden from "../pages/StartingOnAGarden"
import Annuals from "../components/Annuals.jsx"
import Perennial from "../../backend/models/p-model.js"
import Crop from "../../backend/models/crops-model.js"

function App() {


  return (
    <div>
      {/* <Welcome/> */}
      {/* <About/> */}
      {/* <SignUp/> */}
      {/* <LogIn/> */}
      {/* <Newsfeed/> */}
      {/* < StartingOnAGarden /> */}
      {/* <Annuals/> */}
      <Perennial/>
    </div>
  )
}

export default App
