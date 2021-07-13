# Web-Escape

pages link

## Project Name

Web Escape

## Project Description

This escape room based game is a puzzle lover's paradise. With 4 different challenges and only 15 minutes to complete, the player will feel the thrill. Upon completing each puzzle, one of the four locks displayed on the home page will unlock. Once all are unlocked, you win! At the end, add your name to the leaderboard with the time in which you completed the game to see where you stand against your friends.

## API and Data Sample

[API](https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple)

description

```json

```

## Wireframes

[Wireframe](https://wireframe.cc/9C0t7E)

### MVP/PostMVP

#### MVP

- Create a play button
- Have a navbar to display each of the puzzles
- Add win screen and lose screen
- Have four different puzzles
- Include a leaderboard for players to post their time and name in

#### PostMVP

- Make the game generate different puzzles each time
- Add pop-ups for when there is a certain amount of time left
- Add animations to the locks on the home screen
- Add animation to the timer when it runs out
- Have the leaderboard display in order of completion time


## Project Schedule

| Day     | Deliverable                                                     | Status   |
| ------- | --------------------------------------------------------------- | -------- |
| July 13 | Prompt / Wireframes / Priority Matrix / Timeframes              | Incomplete |
| July 14 | Project Approval / Core Application Structure (HTML, CSS, etc.) | Incomplete |
| July 15 | JavaScript + Functionality                                      | Incomplete |
| July 16 | Finish JavaScript / CSS for Appearance                          | Incomplete |
| July 19 | MVP/PMVP / Final Functionality Check                            | Incomplete |
| July 20 | Presentations                                                   | Incomplete |

## Priority Matrix

[Priority Matrix](https://wireframe.cc/17I3Cw)

## Timeframes

| Component                                   | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Basic HTML                                  |    H     |      1hrs      |    0.5hrs     |   0.5hrs    |
| Basic CSS to Define Page Elements           |    H     |      1hrs      |    0.5hrs     |   0.5hrs    |
| Adding API to JavaScript                    |    H     |      1hrs      |     1hrs      |    1hrs     |
| Creating Start Game Button                  |    H     |      1hrs      |    0.5hrs     |   0.5hrs    |
| Start Coding Main Functionaliy w/ API       |    H     |      2hrs      |     2hrs      |    2hrs     |
| Add Event Listeners                         |    H     |      1hrs      |     2hrs      |    2hrs     |
| Create Elements and Append to DOM           |    H     |      3hrs      |     2hrs      |    2hrs     |
| Add Question and Answer Elements            |    H     |      2hrs      |     2hrs      |    2hrs     |
| Make Answer Elements Functional             |    H     |      3hrs      |     2hrs      |    2hrs     |
| Style Question and Answer Elements          |    M     |      2hrs      |     1hrs      |    1hrs     |
| Remove Elements after Question is Answered  |    H     |      1hrs      |     2hrs      |    2hrs     |
| Make Sure Game is Functionable + Debugging  |    H     |      2hrs      |     4hrs      |    4hrs     |
| Create Answer Counter and Make Functionable |    M     |      2hrs      |     1hrs      |    1hrs     |
| Add Answer Counters to Each Question        |    M     |      2hrs      |     1hrs      |    1hrs     |
| Add Win or Lose Message                     |    H     |      1hrs      |     1hrs      |    1hrs     |
| Flexbox with All Elements                   |    H     |      1hrs      |     1hrs      |    1hrs     |
| Finish Styling Webpage                      |    H     |      2hrs      |     2hrs      |    2hrs     |
| Review of Functionality and Design          |    H     |      1hrs      |     2hrs      |    2hrs     |
| PMVP Styling                                |    L     |      3hrs      |     5hrs      |    5hrs     |
| Final Review                                |    H     |      1hrs      |     2hrs      |    2hrs     |
| Total                                       |    H     |     33hrs      |    34.5hrs    |   34.5hrs   |

## Code Snippet

The API used included questions with imbedded HTML styling. Since JavaScript was used for the actual game, the styling showed up in a string instead of actually styling the words. Adding this code allowed the content of the elements to apply that HTML styling within JavaScript.

```
currentQuestion.textContent = decodeURIComponent(questionData[i].question)

answerDiv.textContent = decodeURIComponent(answer)

```

## Change Log
