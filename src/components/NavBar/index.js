// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, currentScore, result} = props
  return (
    <div>
      <nav className="nav-container">
        <div className="img-para-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="logo"
            alt="emoji logo"
          />
          <h1 className="navbar-para">Emoji Game</h1>
        </div>
        {result && (
          <div className="img-para-container">
            <p className="navbar-para">Score: {currentScore}</p>
            <p className="navbar-para">Top Score: {topScore}</p>
          </div>
        )}
      </nav>
    </div>
  )
}

export default NavBar
