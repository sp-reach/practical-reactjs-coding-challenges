import './index.scss'

const BottomResultBox = ({ text }: { text: string }) => {
  const longestWord = text
    .split(' ')
    .sort((a, b) => a.length - b.length)
    .pop()

  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: '-',
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
