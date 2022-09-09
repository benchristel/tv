# Culture Machine

Like television, but for humans.

Hosted at https://benchristel.github.io/tv

## Why?

- There are a lot of videos on YouTube. The bad ones look like clickbait. The good ones also look like clickbait. They're all competing for your attention, and as a result, just choosing something to watch is exhausting.
- If you just let YouTube autoplay it will feed you absolute garbage.

The solution? Curate a set of videos that have some chance of being delightful or informative, and that have rewatch potential, and then just shuffle them.

## How can I change the library of videos?

- Fork this repo.
- See below for how to run a dev environment.
- Run the JavaScript snippets in `src/data/scrape.js` on YouTube pages to gather lists of videos.
- Edit the lists of videos in `src/data/shows.js` and `src/data/music.js`.
- Edit the set of channels in `src/data/channels.js`. Each channel is initialized with an array of `Episode`s, each of which has a list of videos. The videos of an episode always play in sequence, but the episodes play in a random order. This is how Channel 3 (the music channel) shuffles by album, not by song. A day's program of `Episode`s resets at 24 hours, allowing for the last episode to finish.

## Development

These instructions assume you have Node and Yarn installed.

- Run `yarn install` to install dependencies.
- `yarn flow` runs the typechecker.
- `yarn dev` runs the dev server. Tests run as part of the UI. You'll see a red banner at the top of the screen if there are any failures.

## Deployment

This repo is configured for deployment to GitHub Pages.

- Run `yarn build` and commit the changes.
- Push.
- Set up GitHub pages to deploy from the `docs/` directory.
