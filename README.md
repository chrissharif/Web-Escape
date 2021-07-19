# Web-Escape

https://vigorous-shockley-666855.netlify.app

## Project Name

Web Escape

## Project Description

This escape room based game is a puzzle lover's paradise. With 4 different challenges and only 15 minutes to complete, the player will feel the thrill. Upon completing each puzzle, one of the four locks displayed on the home page will unlock. Once all are unlocked, you win! At the end, add your name to the leaderboard with the time in which you completed the game to see where you stand against your friends.

## API and Data Sample

[Airtable API](https://airtable.com/tblmNSNzW1tn2IdlJ/viwZUeiriOsiwkMVo?blocks=hide)

The Airtable API I made will be used for the Leaderboards page. Players will be able to post their results after completing the game and will display it to everyone. Their post will include their name, time, rank, and the date of completion.

```json

{
    "fields": {
      "name": "Chris",
      "time": 900
    }
  },

```

## Wireframes

[Main Page](https://wireframe.cc/9C0t7E)

[Puzzle View](https://wireframe.cc/rdemeV)

[Leaderboards](https://wireframe.cc/dxLgbh)

[Mobile Puzzle View](https://whimsical.com/web-escape-mobile-CDPziUMy2QeMwgYcuqMdof)

## Component Hierarchy

[Component Hierarchy](https://whimsical.com/web-escape-hierarchy-BBTNoCb1wCAwrpDmo3SSYi)

### MVP/PostMVP

#### MVP

- Create a play button
- Have a navigation bar to display each of the puzzles
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

| Day     | Deliverable                                                     | Status     |
| ------- | --------------------------------------------------------------- | ---------- |
| July 13 | Prepare for Project Pitch / Project Approval                    | Complete   |
| July 14 | Project Approval / Core Application Structure (HTML, CSS, etc.) | Complete   |
| July 15 | Work on all things JavaScript + React                           | Complete   |
| July 16 | Finish Functionality / CSS for Appearance                       | Complete   |
| July 19 | MVP/PMVP / Final Functionality Check                            | Complete   |
| July 20 | Presentations                                                   | Incomplete |

## Timeframes

| Component                                    | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Basic React                                  |    H     |      1hrs      |     2hrs      |    2hrs     |
| Add in Components and React Router           |    H     |      1hrs      |     2hrs      |    2hrs     |
| Basic JSX for Each Component                 |    H     |      1hrs      |     1hrs      |    1hrs     |
| Work on Home Page Component                  |    H     |      2hrs      |     2hrs      |    2hrs     |
| Add in Play Game Button                      |    H     |      1hrs      |     1hrs      |    1hrs     |
| Add Event Listeners + Timer                  |    H     |      1hrs      |     3hrs      |    3hrs     |
| Add in Navigation Bar + Leaderboards Button  |    H     |      2hrs      |     2hrs      |    2hrs     |
| Start First Puzzle                           |    H     |      2hrs      |     2hrs      |    2hrs     |
| Add Functionality between Puzzle + Home Page |    H     |      2hrs      |     2hrs      |    2hrs     |
| Add Submit Button for First Puzzle           |    H     |      1hrs      |    0.5hrs     |   0.5hrs    |
| Start Second Puzzle                          |    H     |      2hrs      |     2hrs      |    2hrs     |
| Add Functionality between Puzzle + Home Page |    H     |      2hrs      |     2hrs      |    2hrs     |
| Add Submit Button for Second Puzzle          |    H     |      1hrs      |    0.5hrs     |   0.5hrs    |
| Start Third Puzzle                           |    H     |      2hrs      |     2hrs      |    2hrs     |
| Add Functionality between Puzzle + Home Page |    H     |      2hrs      |     2hrs      |    2hrs     |
| Add Submit Button for Third Puzzle           |    H     |      1hrs      |    0.5hrs     |   0.5hrs    |
| Start Fourth Puzzle                          |    H     |      2hrs      |     2hrs      |    2hrs     |
| Add Functionality between Puzzle + Home Page |    H     |      2hrs      |     1hrs      |    1hrs     |
| Add Submit Button for Fourth Puzzle          |    H     |      1hrs      |    0.5hrs     |   0.5hrs    |
| Add Win or Lose Screen                       |    H     |      2hrs      |     3hrs      |    3hrs     |
| Work on Leaderboards Component               |    H     |      3hrs      |     5hrs      |    5hrs     |
| Allow Player to Post on Leaderboards         |    H     |      2hrs      |     3hrs      |    3hrs     |
| Finish Up Functionality + Debugging          |    H     |      4hrs      |     6hrs      |    6hrs     |
| PMVP Styling                                 |    L     |      5hrs      |     5hrs      |    5hrs     |
| Final Review                                 |    H     |      1hrs      |     2hrs      |    2hrs     |
| Total                                        |    H     |     45hrs      |     55hrs     |    55hrs    |

## SWOT Analysis

### Strengths:

Actual JavaScript functionality should be fairly simple. The Puzzles will not be crazy difficult to complete or code in.

### Weaknesses:

State. I can understand what state is, just actually using it will be a bit tricky for me. I do have resources to use and hope that this project will help me understand this concept better.

### Opportunities:

Learning React completely. I'm still a little fuzzy with React as a whole, so this project should help clear some things up. It's more of the behind the scenes syntax that throws me for a loop.

### Threats:

The Leaderboard component. It shouldn't be the worst thing in the world, but like I said I still struggle with state a little bit, so having players be able to post on the API using state will be tough for me.
