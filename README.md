# Getting Started with Create React App

### `npm i` `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### About the App

select the type of data and search it by name (e.g. type: people, input: luke)

if the type of data is people, the app will display rlated character's:

- Name
- Height
- Weight
- gender
- Birth year
- Avatar based on the skin hair and eyes color of the character.

If the type of data is films, only the name of the movies will display as a placeholder for future development

### My Apporach on building the app

## File Cleanup and setup

Since in the projects there are many features we are not implementing (e.g testing):

- Deleted all unused files
- Update favicon & page title
- Setup sass file framework

## API doc reading

- Checkout how will the api response on submtting differnt query
- Besides requied data about star wars character, also checked if there is extra data for development efficiency and improving UX

There are two property that is quite helpful:

- 'count': the total number of results from all pages
- 'previous' / 'next': url for next page of current results.

which helped me to implement search result count, display current page feature and an extra way to get data from API

## API doc testing

- I use Thunder client to send out test requests
- Checkout if there is 'unusual' data (there is, on skin_color, etc, will explain later)

## API fetch test

- fetch all data vs fetch by request

I understand in an comerical app, fetching all data from an API is propably not ok. But in our project:

- we only have 82 items on 'people' route.
- each page contains a maximum of 10 items only.

which means we are sending more requests than fetching all at once after 9 fetches

In the end, I chose fetch by request as it seems to be more practical.

However, I kept the fetch all function (src/utils, funciton getAllPeople) for reference and data testing.

## Coding Steps

basically finish compnents one by one, from parent to child

1. HTML markup with dummy data
2. Basic styling (so that displayed data is visual friendly at least)
3. implement functionality and display real data
4. styling touch-ups
5. bug testing
6. implement responsive design

I usually commit my codes after styling/implemented a stable features since commiting a code that is borken doesn't seems too helpful. I could be wrong though.
If there is good coding habit that I don't know, I am always willing to listen and learn.

## Challenges

Implementing dynamic colors for the avatar is certainly the most challenging part of the test.

# Problem 1: about half of the colors we get from the api are not a valid css color value

Which means I needed to identify each color's atucal value

- Solution:

1. Find out all of the unique colors, by fetching all data from 'people' and extract the unique colors by data manipulation(the code I used is disabled in App.js file)
2. Declare the color values in an separate scss file (colors.scss)
3. Export the variables to avatar component
4. Formatting color data values so that the values can be accpeted in JS and Sass as a variable(e.g. 'brown mottle' to 'brownmottle')

# Problem 2: body parts may have multiple or no colors

- Solution:

1. Use background-color to color if there the body part has only one color
2. Use background-image: linear-gradient to color if there the body part has multiple color.
3. If hair has no color, the character will be bald. (e.g. C-3PO)
4. If skin has no color, the character will use hair color as the skin color.(e.g Chewbacca)

Another possible solution is, instead of using linear-gradient for multi-color, we could divide body parts into multiple 'div's.

## Future improvement

- dry up codes as ome of it are repeataive
- use more advanced react features to make the code easier to manage(use universal state management with useContext?)

## Notice

- The Readme commit is the code finished within the time limit, please consider any further commit as post-submittion updates.
- Thank you for reading
- Hire me , plz.
