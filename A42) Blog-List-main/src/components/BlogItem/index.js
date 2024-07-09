// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <div>
      <li>
        <div className="title-date-container">
          <h1 className="title">{title}</h1>
          <p className="date">{publishedDate}</p>
        </div>
        <p className="description">{description}</p>
      </li>
      <hr />
    </div>
  )
}

export default BlogItem
