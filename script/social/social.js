var dataJson = [
  {
    link: "https://www.instagram.com/yasmine_faithbased/",
    title: "Instagram",
    icon: "./res/instagram.svg",
  },
  {
    link: "https://github.com/yasminbelay/",
    title: "GitHub",
    icon: "./res/github.svg",
  },
  {
    link: "https://t.me/yasminebelay",
    title: "Telegram",
    icon: "./res/telegram.svg",
  },
  {
    link: "https://api.whatsapp.com/send?phone=2026501884",
    title: "Whatsapp",
    icon: "./res/whatsapp.svg",
  },
];

var raw_html = "";
dataJson.forEach(function (item) {
  raw_html += `<li>
    <a
      rel="noopener"
      href="${item.link}"
      target="_blank"
      title="${item.title}">
      <img title="${item.title}" src="${item.icon}" class="svg-icon"/>
      </a>
  </li>`;
});

document.getElementById("social-links").innerHTML = `<ul>${raw_html}</ul>`;
