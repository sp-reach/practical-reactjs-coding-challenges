import { pronouns } from '../../data/pronouns'
import './index.scss'

const ResultBox = ({ text }: { text: string }) => {
  const splitNoSpaces = text.split(' ').filter((v) => v.trim().length > 0)

  const resultBar = [
    {
      title: 'Words',
      value: splitNoSpaces.length > 0 ? splitNoSpaces.length : 0,
    },
    {
      title: 'Characters',
      value: text.length,
    },
    {
      title: 'Sentences',
      value: text.length > 0 ? text.split('.').filter((v) => v.trim().length > 0).length : 0,
    },
    {
      title: 'Paragraphs ',
      value: text.split('\n').map((v) => v.trim().length > 0).length,
    },
    {
      title: 'Pronouns',
      value: splitNoSpaces.filter((t) => pronouns.includes(t.toLowerCase())).length,
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
