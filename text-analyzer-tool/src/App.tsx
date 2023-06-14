import { useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'

const App = () => {
  const [textBoxText, setTextBoxText] = useState('')
  const words =
    textBoxText
      .match(/[^\s]*/gm)
      ?.map((w) => w.replace(/[^a-zA-Z]/gi, '').trim())
      .filter((w) => w.length > 0) ?? []

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox text={textBoxText} splitWords={words} />
          <TextArea text={textBoxText} setText={setTextBoxText} />
          <BottomResultBox splitWords={words} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
