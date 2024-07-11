// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateImage, activeImageId} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const changeBackground = () => {
    updateImage(id)
  }

  const activeImage = activeImageId === id ? 'active-button' : 'inactive-button'
  console.log(activeImageId === id)

  return (
    <li>
      <button type="button" onClick={changeBackground}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
