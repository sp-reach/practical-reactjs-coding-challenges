import { useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'

const App = () => {
  const [textBoxText, setTextBoxText] = useState('')
  // const textRef = useRef<HTMLTextAreaElement>(null)

  // const currentText = textRef.current?.value ?? ''
  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox text={textBoxText} />
          <TextArea
            text={textBoxText}
            setText={setTextBoxText}
            // textRef={textRef}
          />
          <BottomResultBox />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
