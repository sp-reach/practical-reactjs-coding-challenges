import { Dispatch, SetStateAction } from 'react'
import './index.scss'

const TextArea = ({ setText, text }: { setText: Dispatch<SetStateAction<string>>; text: string }) =>
  // { textRef }: { textRef: RefObject<HTMLTextAreaElement> }
  {
    return (
      <textarea
        // ref={textRef}
        defaultValue={text}
        onChange={(event) => setText(event.target.value)}
        className="text-area"
        placeholder="Paste your text here..."
      />
    )
  }

export default TextArea
