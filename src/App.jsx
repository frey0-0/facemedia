
import Landing from "./features/Landing"
import Services from "./features/Services"
import Founder from "./features/Founder"
import ShortFormContent from "./features/ShortFormContent"
import Work from "./features/Work"
import Questions from "./features/Questions"
import "./global.css"

const App = () => {
  return (
    <>
      <Landing />
      <Services />
      <Work />
      <ShortFormContent />
      <Founder />
      <Questions/>
    </>
  )
}
export default App
