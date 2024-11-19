
import Navbar from './components/Navbar'
import Services from './components/Services'
import './App.css'

function App() {
  

  return (
    <>
     <Navbar/>
     <center>
      <h1 style={{"font-family":'Comic Neue,cursive',"font-weight":'bolder',"padding-top":'3rem'}}>Services</h1>
     </center>
     <Services/>
    </>
  )
}

export default App
