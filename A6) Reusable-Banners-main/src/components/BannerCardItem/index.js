// Write your code here.
import './index.css'

const BannerCardItem = props => {
  // eslint-disable-next-line no-unused-vars
  const {key, bannerCard} = props
  const {headerText, description, className} = bannerCard
  return (
    <li className={className}>
      <div className="card-style">
        <h1 className="heading"> {headerText} </h1>
        <p className="description"> {description} </p>
        <button type="button" className="button-style">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
