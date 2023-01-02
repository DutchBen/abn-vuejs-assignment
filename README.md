# VueJS TV series app for ABN AMRO

## Description
This is an app made for the code assessment part of my application for the Frontend Chapter lead position at ABN AMRO. It consist of a listing of TV Shows retrieved from the TV Maze api based on their category and rating. 

## Code assessment technical requirements
- The application should be responsive
- Keep the use of scaffolding and existing libraries to a minimum
- Create this readme file
- Include unit tests

## Code assessment feature requirements
- Use http://www.tvmaze.com/api to retrieve TV shows
- Show users a few list based on genre and rating
- Clicking on a tv show shows tv show details
- Users should be able to search for TV show to see details
- Make the UI eyecatching

## Missing and changed features
Due to lake of time I have not completed these requirements
- Clicking on a tv show shows tv show details
- Users should be able to search for TV show to see details
- Adding Unit tests

The TV Maze api currently does not have an endpoint that allows searching by genre although it has been requested https://www.tvmaze.com/threads/5267/adding-a-genre-endpoint. I have retrieved TV-shows based on Genre match in the name.

## Architectural decisions
**Framework choice**: VueJS version 3.   
VueJS was requested as the framework to build this assignment in. Version 3 is out since this year. Although this is quite fresh starting a greenfield project with few external dependencies makes the choice for the latest long term supported version a good choice.

**Language choice**: Typescript over plain javascript
Typescript mitigates if not avoids a whole category if mistakes. There are not many cases where it's not preferred over plain Javascript. 

## Installing the app
The app can be installed this command from the `abn-amro` folder
`cd abn-amro`
`npm install`

## Running the app
The app will run in development mode using this command from the `abn-amro` folder
`cd abn-amro`
`npm run dev`

The app will be available at http://localhost:5173[http://localhost:5173]



  