# Context

At Cliq Digital we provide streaming services that bundle movies & series, music, audiobooks, sports and games to consumers globally.

Your job is to create a new interface on our streaming platform that displays **a list of movies and the details of a movie when clicking on it.**

You will have **2 hours**.

You will have to send us your source code hosted on GitHub.

In addition to your code, a `README.md` file explaining your thought process and your choices would be appreciated for us to comprehend how and why you made some choices

# Exercise

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, fork this project.

Then, install the dependencies and run the development server:

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## What is expected

- To render a list of movies, you can be inspired by [themoviedb.org](https://www.themoviedb.org/) or other popular streaming platforms

- Display another carousel than the existing one with the most popular series and TV shows / or the different movies by genre (animation, comedy, adventure, etc...)

- Filter these contents by popularity, release date, note, etc...

- Allow users to view details about a movie by clicking on it

- As your application can be used by thousands of users, make sure to provide some robust safety guards. Some `any` types have been left there on purpose. Please type the any that have been left in the application.

- Feel free to upgrade, modify, adapt any existing code

- Feel free to propose any ameliorations to our code, UX, architecture, security, code quality....

## API

The request can be passed using:
API key (v3): `92b418e837b833be308bbfb1fb2aca1e`

Documentation:
https://developers.themoviedb.org/3/

HTTP request example:

```
    GET
    https://api.themoviedb.org/3/discover/movie?api_key=92b418e837b833be308bbfb1fb2aca1e&language=en-
US&sort_by=popularity.desc&page=1&timezone=America/New_York&include_null_first_air_dates=false
```
