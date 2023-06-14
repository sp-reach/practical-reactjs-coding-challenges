import { pronouns } from '../../data/pronouns'
import './index.scss'

const ResultBox = ({ text, splitWords = [] }: { text: string; splitWords: string[] }) => {
  const completeSentences = text.match(/[^.!?]*[.!?]/gm)
  const pronounMatches = splitWords.filter((t) => pronouns.includes(t.toLowerCase()))
  const firstWordOfParagraph = text.match(/\b(^\w+)/gm)

  const resultBar = [
    {
      title: 'Words',
      value: splitWords.length ?? 0,
    },
    {
      title: 'Characters',
      value: text.length,
    },
    {
      title: 'Sentences',
      value: completeSentences?.length ?? 0,
    },
    {
      title: 'Paragraphs ',
      value: firstWordOfParagraph?.length ?? 0,
    },
    {
      title: 'Pronouns',
      value: pronounMatches.length,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
