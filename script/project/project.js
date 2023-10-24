var dataJson = [
  {
    img: "https://cdn-icons-png.flaticon.com/128/644/644667.png",
    title: "MIU Badge scanner",
    paragraph:
      "A badge scanning system for members of MIU students, professors, customers, gym memebers, TM teachers etc..",
    url: "https://github.com/yasminbelay/miu-badge-scanner",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/5806/5806364.png",
    title: "Integration project",
    paragraph:
      "Microservice system to collect and process CPU, RAM, DISK, and NETWORK data from different machines and presented those graphically in a web client.",
    url: "https://github.com/yasminbelay/INTEGRATION-PROJECT",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/1021/1021264.png",
    title: "Eri Gateway",
    paragraph:
      "An airbnb like service built with spring boot and microservices architecture",
    url: "https://github.com/yasminbelay/eri-gateway",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/2156/2156009.png",
    title: "Banking System",
    paragraph: "A spring boot bankend API endpoints for a banking system",
    url: "https://github.com/yasminbelay/banking-system",
  },
];

var raw_html = "";
dataJson.forEach(function (item) {
  raw_html += `<div
    class="col-lg-5"
    style="min-height: fit-content;">
    <div
      style="padding: 12px"
      class="project progress mb-5 align-items-center">
      <img
        class="img-fluid"
        style="height: 90px; width: 90px"
        src="${item.img}"
        alt="${item.title}"
        height="100px"
        width="120px"
      />
      <div class="mt-3 ms-3 row">
        <h2 style="color: txt-color">${item.title}</h2>
        <p style="color: txt-color; font-size: medium">
        ${item.paragraph}
        </p>
        <a
          rel="noopener"
          href="${item.url}"
          target="_blank"
          title="${item.title}">
          <button type="button" class="btn btn-secondary">
            View
          </button></a>
      </div>
    </div>
    </div>`;
});
document.getElementById("project-container").innerHTML = raw_html;
