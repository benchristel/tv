navigator.permissions.query({ name: "geolocation" }).then();
navigator.clipboard.writeText(/\/watch\?/.test(window.location) ? [
  /v=(.{11})/.exec(window.location)?.[1],
  document.querySelector(".ytp-time-duration").innerText.trim(),
  document.querySelector(".title .ytd-video-primary-info-renderer").innerText.split("\n")[0].trim()
].join(" ") : /\/playlist\?/.test(window.location) ? [...document.querySelectorAll("ytd-playlist-video-renderer")].map((v) => {
  const link = v.querySelector("a#video-title")?.href ?? "";
  const id = /v=(.{11})/.exec(link)?.[1];
  const time = v.querySelector("span#text.ytd-thumbnail-overlay-time-status-renderer")?.innerText.trim();
  const title = v.querySelector("#video-title")?.innerText;
  return `${id} ${time} ${title}`;
}).join("\n") : [...document.querySelectorAll("ytd-grid-video-renderer")].map((v) => {
  const link = v.querySelector("#thumbnail")?.href ?? "";
  const id = /v=(.{11})/.exec(link)?.[1];
  const time = v.querySelector("span#text.ytd-thumbnail-overlay-time-status-renderer")?.innerText.trim();
  const title = v.querySelector("#video-title")?.innerText;
  return `${id} ${time} ${title}`;
}).join("\n"));
