import './index.scss'

const BottomResultBox = ({ splitWords }: { splitWords: string[] }) => {
  const longestWord = [...splitWords].sort((a, b) => a.length - b.length).pop()

  const wordPerMinute = splitWords.length > 0 ? Math.ceil(splitWords.length / 238) : null

  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: `~${wordPerMinute} minute` ?? '-',
    },
    {
      title: 'Longest word:',
      value: longestWord ?? '-',
    },
  ]

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
