// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="project-image" />

      <div className="project-duration-container">
        <h1 className="project-title">{projectTitle}</h1>

        <div className="duration-container">
          <AiFillCalendar color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>

      <p className="description">{description}</p>

      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
