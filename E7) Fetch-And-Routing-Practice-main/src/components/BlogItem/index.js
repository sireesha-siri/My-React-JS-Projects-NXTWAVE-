// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogDataListData} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogDataListData

  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="blog-item-container">
        <img src={imageUrl} alt={`title${id}`} className="blog-item-image" />
        <div className="blog-item-info">
          <p className="blog-item-topic">{topic}</p>
          <p className="blog-item-title">{title}</p>
          <div className="blog-author-info">
            <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
