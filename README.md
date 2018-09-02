# GA WDI-34 PROJECT 1 - CHAIN GAME



## Instructions


After pressing the Start button the computer will randomly generate a sequence of squares lighting up on the board. You have to remember the order of the pattern and then repeat it after the lights have turned off. If you're correct push the next level button to start the next computer sequence.
One square is added to the computer sequence each level.
When you lose don't forget to remember what level you reached & hit the restart button for your friend.

## GAME TUTORIAL


<img src="/images/chain1.gif" alt="Game Tutorial"/>


## REVIEW


For this first project we were given a week to come up with an idea for a web browser game, code it and then deploy to the world (wide web). I wrote the game with HTML, CSS (with help from SASS as seen in the image below), Javascript and a touch of jQuery. 

![image](https://github.com/sayersb/project-1-wdi/blob/master/SCSS.png?raw=true)

The project was truly enjoyable and rewarding, despite the stress and frustration leading up to the MVP (achieved half way through the week). After the main functions had been written and the MVP therefore had been achieved (the user choice function can be seen in the image below), any additions were bonuses and the extra time was used to style and add in the musical features.

![image](https://github.com/sayersb/project-1-wdi/blob/master/User%20choice%20function.png?raw=true)


The way that my grid was written (not in the HTML with divs) made it hard at first to establish the connection between each square and mirroring them in arrays. The grid written in the app.js file can be seen in the image below along with the computer choice function : 

![image](https://github.com/sayersb/project-1-wdi/blob/master/Board%20set%20up%20and%20computer%20choice.png?raw=true)


After this the main issue was finding a way that the classes could be added in order to animate the squares, then removed for both the computer and player choices each turn. The start game/next level function used for this can be seen in the image below : 

![image](https://github.com/sayersb/project-1-wdi/blob/master/Start%20and%20next%20level%20function.png?raw=true)

I am excited to use my newly acquired skills in the next projects and am looking forward to learning new libraries that I kept coming across when searching for help online!



## PLANNED FEATURES


Given a bit more time I would have added in a high score function that remembers & shows the highest score from the session. Another feature that could be implemented would be a welcome screen when you load the page or start the first game of the session. Similarly the game could have a GAME OVER screen that hides the main board and shows a funny photo after the person loses.
I could also do my best to find more songs that I love with the word CHAIN in the song name... On the music note I could also implement a feature that stops all of the music and then makes different sounds very time the squares are lit up.
Making the game more responsive, for mobile use etc would have been another feature added given more time.

