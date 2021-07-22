# EmojiSearch: Save Your Favorite Emojis

![screenshot of EmojiHunt home page](https://emoji-search-app.netlify.app/img/eh-screenshot.png)

EmojiHunt is an application that allows the user to search the currently available emojis from unicode.org. They can also save their favorite emojis so they can quickly access them and easily copy any emoji to the clipboard.

**Link to project:** https://emoji-search-app.netlify.app/

## How It's Made:

**Tech used:** React, HTML, CSS, TailwindCSS

This application was built with a React front-end, using the TailwindCSS utility class framework for the design and implementation of dark mode. The list of emojis was pulled directly from emoji-api.com and archived in JSON format for speed, since the list does not change often.

Once the emojis are searched, infinite scrolling is used if the number of results is greater than 20. The options on each result are simple: the user can copy the emoji to the clipboard or save the emoji to their favorites. When the favorites list is changed, the data is persisted to the web browser's local storage.

# Features:

- Users can search a comprehensive list of emojis.
- If the search results are longer than 20, infinite scrolling is utilized.
- Users can save their favorite emojis into a list that is persisted to the browser's local storage.
- Users can copy the emoji from any search result to their clipboard.
- Users can switch theme from light to dark

## Lessons Learned:

- How to work with useContext and useReducer to manage application-level state
- How to implement infinite scrolling
- How to copy information to the clipboard
- How to implement toast alerts

## Optimizations:

- I would like to add auto theme switching depending on the system setting

## Additional Projects:

- [GroceryMapper](https://github.com/Ttesori/react-grocery-app) (React)
- [ExpenseTracker](https://github.com/Ttesori/app-expense-tracker) (NodeJS)
