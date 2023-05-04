// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {result, score, gameEnd} = props

  const gameFinish = () => {
    gameEnd()
  }

  const win = () => (
    <div className="winLoseContainer">
      <div>
        <h1 className="winHeading">You Won</h1>
        <p className="win-para">Best Score</p>
        <p className="score-para"> {score}/12</p>
        <button className="winButton" type="button" onClick={gameFinish}>
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="win or lose"
      />
    </div>
  )

  const loose = () => (
    <div className="winLoseContainer">
      <div>
        <h1 className="winHeading">You Lose</h1>
        <p className="win-para"> Score</p>
        <p className="score-para"> {score}/12</p>
        <button className="winButton" type="button" onClick={gameFinish}>
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
      />
    </div>
  )

  return result ? win() : loose()
}
export default WinOrLoseCard
