import React from 'react'

const Result = ({guess,term}) => {
    let result;
    if (term) {
        if (term > guess) {
            result = "Higher";
        }
        else if (term < guess) {
            result = "Lower";
        }
        else if (term == guess) {
            result = "yippee! You guessed it!";
        }
        else {
            result = "Please enter a valid number!";
        }
    }
  return (
    <h3>
      You Guessed: {result}
    </h3>
  )
}

export default Result
