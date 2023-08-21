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
- Open the "info" pane in the Culture Machine UI and bookmark the "Bookmarklet to scrape videos from YouTube" link.
  See ["What is a bookmarklet?"](#what-is-a-bookmarklet) below for details.
- Run the bookmarklet on YouTube pages to copy the video links on the page to your clipboard. The bookmark works
  on the following pages:

  - Individual video pages like https://www.youtube.com/watch?v=lrLCLfoxKb4
  - Playlist pages like https://www.youtube.com/playlist?list=PLB0C8D8F4E658C3BC
  - Channel video lists like https://www.youtube.com/@urbanology/videos

  Note that only videos whose thumbnails have loaded onto the page will be scraped. If you want to get all videos
  for a channel, you'll have to scroll down until no more videos load, and then run the bookmarklet. This can
  take a lot of scrolling.
- Paste the videos into `src/data/shows.js` or `src/data/music.js`.
- (Optional) Edit the set of channels in `src/data/channels.js`. Each channel is initialized with an array of `Episode`s, each of which has a list of videos. The videos of an episode always play in sequence, which is how Channel 3 (the music channel) shuffles by album, not by song.
- Commit your changes and follow the [deployment steps](#deployment) below.

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

## What is a bookmarklet?

If you click the "info" button below the video player, you'll see a "Bookmarklet to scrape videos from YouTube" link.
A bookmarklet is a small JavaScript program that you can bookmark, like a link. Clicking the bookmark in your browser
runs the program in the context of whatever page you're currently looking at.

To bookmark the bookmarklet, right-click the link and select "Bookmark Link" (or the equivalent in your browser). To
learn how to use the bookmarklet, see the section ["How can I change the library of videos?"](#how-can-i-change-the-library-of-videos) above.
