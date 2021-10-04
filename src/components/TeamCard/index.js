// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {singleTeamCard} = props
  const {id, name, teamImageUrl} = singleTeamCard

  return (
    <Link to={`/ipl/${id}`} className="link-style">
      <li className="list-items">
        <img src={teamImageUrl} alt={name} className="single-image" />
        <p className="teamName">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
