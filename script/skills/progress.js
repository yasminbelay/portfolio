var dataJson = [
  {
    name: "Java",
    width: "85%",
  },
  {
    name: "Spring Boot",
    width: "80%",
  },
  {
    name: "JavaScript",
    width: "70%",
  },
  {
    name: "React.Js",
    width: "70%",
  },
  {
    name: "AWS",
    width: "85%",
  },
  {
    name: "SQL",
    width: "75%",
  },
];

var raw_html = "";
var raw_progress = "";

dataJson.forEach(function (item) {
  raw_progress += `<p class="fs-5 txt-color">${item.name}</p>
    <div class="progress mb-5 p-0">
      <div class="p1" style="width: ${item.width}">${item.width}</div>
    </div>`;
  createRow(raw_progress);
});

function createRow(data) {
  raw_html += '<div class="col-lg-6 col-sm-10 col-md-6">'.concat(
    data,
    "</div>"
  );
  raw_progress = "";
}
document.getElementById("progress-data").innerHTML = raw_html;
