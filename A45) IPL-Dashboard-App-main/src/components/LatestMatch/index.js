// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="first-container">
        <div className="badge-container">
          <p className="competing-team-heading">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="description-style">{venue}</p>
          <p className="description-style"> {result}</p>
        </div>

        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="badge-design"
        />
      </div>

      <div className="second-container">
        <div className="info-container">
          <p className="description-style">First Innings</p>
          <p className="description-style">{firstInnings}</p>
        </div>

        <div className="info-container">
          <p className="description-style">Second Innings</p>
          <p className="description-style">{secondInnings}</p>
        </div>

        <div className="info-container">
          <p className="description-style">Man Of The Match</p>
          <p className="description-style">{manOfTheMatch}</p>
        </div>

        <div className="info-container">
          <p className="description-style">Umpires</p>
          <p className="description-style">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
