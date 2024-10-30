import { useState } from "react"
import { fondo1, fondo2, fondo3, fondo4 } from "./assets/images/"
import phrases from "./phrases.json"
import randomIndex from "./helpers/indexRandom"
import "./App.css"
import Headings from "./components/Headings"
import Cards from "./components/Cards"
import Buttons from "./components/Buttons"




const images = [fondo1, fondo2, fondo3, fondo4]


function App() {
  const [phrase, setPhrase] = useState(phrases[randomIndex(phrases.length)])
  const [img, setImg] = useState (images[randomIndex(images.length)])

  function changePhrase(){
    setPhrase(phrases[randomIndex(phrases.length)])
    setImg(images[randomIndex(images.length)])
  }

  return (
    <>
      <div className="wrapper" style={{backgroundImage: `url("${img}")`}}>
        <div className="container">
          {/* encabezado */}
          <Headings/>
          {/* contenido */}
          <Cards datos = {phrase}/>
          {/* boton */}
          <Buttons func = {changePhrase}/>
        </div>
      </div>
    </>
  )
}

export default App
