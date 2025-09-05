// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const timelineViewCard = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard key={item.id} courseDetails={item} />
    }
    return <ProjectTimelineCard key={item.id} projectDetails={item} />
  }

  return (
    <div className="time-container">
      <div className="responsive-container">
        <div className="heading-container">
          <h1 className="main-heading">
            MY JOURNEY OF
            <span className="sub-heading">CCBP 4.0</span>
          </h1>
        </div>

        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{primary: '#0967d2', secondary: 'white'}}
        >
          {timelineItemsList.map(each => timelineViewCard(each))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
