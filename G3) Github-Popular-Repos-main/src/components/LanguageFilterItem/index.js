// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {data, getPopularId, isActive} = props

  const {id, language} = data

  const languageStyle = isActive ? 'language-style' : ''

  const clickPopularId = () => {
    getPopularId(id)
  }

  return (
    <li>
      <button type="button" onClick={clickPopularId} className={languageStyle}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
