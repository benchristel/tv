function last(a) {return a[a.length - 1]}

function scrapeVideos() {
  if (/\/watch\?|\/embed\//.test(window.location))  {
    return [
      /v=(.{11})/.exec(window.location)?.[1] ?? /embed\/(.{11})/.exec(window.location)?.[1],
      last(document.querySelectorAll(".ytp-time-duration")).innerText.trim(),
      document.querySelector("a.ytp-title-link")
        .innerText.split("\n")[0]
        .trim(),
    ].join(" ")
  } else if (/\/playlist\?/.test(window.location)) {
    return [...document.querySelectorAll("ytd-playlist-video-renderer")]
      .map((v) => {
        const link = v.querySelector("a#video-title")?.href ?? "";
        const id = /v=(.{11})/.exec(link)?.[1];
        const time = v
          .querySelector(
            "span#text.ytd-thumbnail-overlay-time-status-renderer"
          )
          ?.innerText.trim();
        const title = v.querySelector("#video-title")?.innerText;
        return `${id} ${time} ${title}`
      })
      .join("\n")
  } else {
    return [...document.querySelectorAll("ytd-rich-grid-media")]
      .map((v) => {
        const link = v.querySelector("a#thumbnail")?.href ?? "";
        const id = /v=(.{11})/.exec(link)?.[1];
        const time = v
          .querySelector(
            "span#text.ytd-thumbnail-overlay-time-status-renderer"
          )
          ?.innerText.trim();
        const title = v.querySelector("#video-title")?.innerText;
        return `${id} ${time} ${title}`;
      })
      .join("\n");
  }
}

const videos = scrapeVideos();

console.log(videos);
navigator.clipboard.writeText(videos).catch((e) => console.error(e));
