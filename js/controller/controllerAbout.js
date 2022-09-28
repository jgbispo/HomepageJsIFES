export default function fillAbout({ website, text }) {
  const aboutHTML = `
      <div class="card-work">
        <p id="paragraph">${text}</p>
        <span>WebSite</span> <a href="${website}" target="_blank">${website}</a>
      </div >
    `
  return aboutHTML
}