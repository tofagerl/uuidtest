If you're like me, you shave every three days and look into the mirror and think "there is no way UUID v4 is ACTUALLY made so that there will never be a conflict". If you're even more like me, you spend a few minutes making a utility to check. Since you (like me) want to run this in a background terminal, but still need to check that it's running without opening top, you need it to output something.
So you made this utility, and uploaded it to my github account! You sneaky bastard!

#Usage
`npm start`

#Behind the scenes
This total waste of time will create UUID's, match them against the UUID's already created, and let you know if one of them is the exact same UUID that it's made earlier.
In the mean time it will time how long it take to match 1000 UUIDs and let you know so that you don't have to wonder if it's stopped working.

#TODO
This thing only uses `array.prototype.includes()`, which might be slow. It's possible this would be much faster with a faster sort algorithm from lodash or something. I might look into that one day.