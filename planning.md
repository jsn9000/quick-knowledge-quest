# Planning Document for Claude

## Objective
We’re building a web-based learning incentive game. Players pick a subject, go through about two minutes of learning material on cards, and if they finish in time, a video plays as a reward.

## Tech Details
- **Framework:** Next.js with TypeScript  
- **UI:** A collapsible rules section, a timer that counts down from two minutes, and a sequence of cards for the learning content.

## User Flow
1. **Introduction:** A title explains the game.  
2. **Rules:** Users can click to expand and read the rules.  
3. **Choosing a Subject:** They select one of several subjects.  
4. **Starting the Timer:** Once they pick and hit start, the two-minute countdown begins.  
5. **Learning Cards:** The app displays a series of cards with the learning material. They click through each card.  
6. **Completion:** If they submit before the timer ends, the video `R2D2-video.mp4` plays.

## Notes
- All functionality happens on a single page.  
- Future customization can allow different themes, videos, or card sets.
