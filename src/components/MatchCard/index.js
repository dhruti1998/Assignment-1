// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchDetails
  const classValue = matchStatus === 'Won' ? 'won-status' : 'lost-status'
  return (
    <li className="li-element">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="teamLogo-image"
      />
      <p className="team-name1">{competingTeam}</p>
      <p className="result-para">{result}</p>
      <p className={classValue}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
