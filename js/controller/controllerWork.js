export default function fillWork({
  workTitle,
  text,
  stack,
  repository,
  platform
}) {

  const source = `<span>SOURCE</span> <a href="https://${repository}" target="_blank"> ${repository}</a>`
  const platformHTML = `<p id="platform"> <span>PLATFORM</span> ${platform}</p>`
  const stackHTML = `<p id="platform"> <span>STACK</span> ${stack}</p>`

  const workBlock = `
    <div class="card-work">
        <h2 id="subTitle">${workTitle}</h2>
        <p id="paragraph">${text}</p>
        <ul>
          <li>
            <p id="sourcer">${source}</p>
          </li>
          <li>
            <p id="platform">${platformHTML}</p>
          </li>
          <li>
            <p id="stack">${stackHTML}</p>
          </li>
        </ul>
      </div>
    `

  return workBlock;
}
