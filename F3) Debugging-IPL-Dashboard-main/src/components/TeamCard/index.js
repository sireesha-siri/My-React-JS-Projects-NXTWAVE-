import './index.css'

import {Link} from 'react-router-dom' // 8

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageURL} = teamDetails

  return (
    <li className="team-item ">
      <Link to={`/team-matches/${id}`} className="link">
        {/* 7,+1, css class name */}
        <img src={teamImageURL} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
