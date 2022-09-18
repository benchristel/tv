// SCRAPING A CHANNEL, VIDEO, OR PLAYLIST PAGE
// Paste this into the JS console on YouTube.
// Right-click the text that gets printed and select "Copy Object".
navigator.permissions.query({ name: "geolocation" }).then()

navigator.clipboard.writeText(
  // Video page
  /\/watch\?/.test(window.location)
    ? [
        /v=(.{11})/.exec(window.location)?.[1],
        document.querySelector(".ytp-time-duration").innerText.trim(),
        document
          .querySelector(".title .ytd-video-primary-info-renderer")
          .innerText.split("\n")[0]
          .trim(),
      ].join(" ")
    : // Playlist
    /\/playlist\?/.test(window.location)
    ? [...document.querySelectorAll("ytd-playlist-video-renderer")]
        .map((v) => {
          const link = v.querySelector("a#video-title")?.href ?? ""
          const id = /v=(.{11})/.exec(link)?.[1]
          const time = v
            .querySelector(
              "span#text.ytd-thumbnail-overlay-time-status-renderer"
            )
            ?.innerText.trim()
          const title = v.querySelector("#video-title")?.innerText
          return `${id} ${time} ${title}`
        })
        .join("\n")
    : // Channel page
      [...document.querySelectorAll("ytd-grid-video-renderer")]
        .map((v) => {
          const link = v.querySelector("#thumbnail")?.href ?? ""
          const id = /v=(.{11})/.exec(link)?.[1]
          const time = v
            .querySelector(
              "span#text.ytd-thumbnail-overlay-time-status-renderer"
            )
            ?.innerText.trim()
          const title = v.querySelector("#video-title")?.innerText
          return `${id} ${time} ${title}`
        })
        .join("\n")
)
