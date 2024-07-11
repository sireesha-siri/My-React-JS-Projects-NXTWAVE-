// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {cardDetails} = props

  const {name, id, teamImageUrl} = cardDetails

  return (
    <Link to={`/team-matches/${id}`} className="link-style">
      <li className="tem-style">
        <img src={teamImageUrl} alt={name} className="icon-design" />
        <p className="ipl-batch">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
