import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {
    checkingEmojiList: [],
    topScore: 0,
    result: true,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  gettingScore = presentScore => {
    const {topScore} = this.state
    let newScore = topScore

    if (presentScore > topScore) {
      newScore = presentScore
    }

    this.setState({topScore: newScore, result: false})
  }

  gettingEmoji = unique => {
    const {checkingEmojiList} = this.state
    const {emojisList} = this.props
    const emojiState = checkingEmojiList.includes(unique)
    const scoreLength = checkingEmojiList.length

    if (emojiState) {
      this.gettingScore(scoreLength)
    } else {
      if (checkingEmojiList.length === emojisList.length) {
        this.gettingScore(emojisList.length)
      }
      this.setState(previousState => ({
        checkingEmojiList: [...previousState.checkingEmojiList, unique],
      }))
    }
  }

  gameEnd = () => this.setState({checkingEmojiList: [], result: true})

  render() {
    const {topScore, result, checkingEmojiList} = this.state
    const emojiLogoList = this.shuffledEmojisList()
    const realWin = checkingEmojiList.length === emojiLogoList.length
    return (
      <div className="emojigame-container">
        <NavBar
          topScore={topScore}
          currentScore={checkingEmojiList.length}
          result={result}
        />
        {result ? (
          <ul className="emoji-shuffle-container">
            {emojiLogoList.map(each => (
              <EmojiCard
                emojis={each}
                key={each.id}
                gettingEmoji={this.gettingEmoji}
              />
            ))}
          </ul>
        ) : (
          <WinOrLoseCard
            score={checkingEmojiList.length}
            result={realWin}
            gameEnd={this.gameEnd}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
