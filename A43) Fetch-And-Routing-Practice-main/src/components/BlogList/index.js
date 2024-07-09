// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {isLoading: true, blogDataList: []}

  componentDidMount() {
    this.getBlogListData()
  }

  getBlogListData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const dataInCamelCase = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))

    this.setState({blogDataList: dataInCamelCase, isLoading: false})
  }

  render() {
    const {isLoading, blogDataList} = this.state

    return (
      <div className="blog-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogDataList.map(each => (
            <BlogItem key={each.id} blogDataListData={each} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
