function isValidURL(string) {
  var res = string.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  return res !== null;
}

const urlPageBtn = document.getElementById("url-page");
const textPageBtn = document.getElementById("text-page");

textPageBtn.addEventListener("click", function () {
  const urlPage = document.getElementById("url");
  const textPage = document.getElementById("text");
  textPage.classList.remove("novisible");
  urlPage.classList.add("novisible");
});

urlPageBtn.addEventListener("click", function () {
  const urlPage = document.getElementById("url");
  const textPage = document.getElementById("text");
  urlPage.classList.remove("novisible");
  textPage.classList.add("novisible");
});

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let website = document.getElementById("website").value;
  if (isValidURL(website)) {
    let qrcode = document.getElementById("qrcode");
    let fcolor = document.getElementById("fcolor").value;
    let bcolor = document.getElementById("bcolor").value;
    let size = document.getElementById("size").value;
    qrcode.innerHTML = "";
    new QRious({
      element: qrcode,
      background: bcolor,
      backgroundAlpha: 1,
      foreground: fcolor,
      foregroundAlpha: 1,
      level: "H",
      padding: 12,
      size: size,
      value: website,
    });
  } else {
    alert("Please enter a valid URL");
  }
});

const btnText = document.getElementById("btn-text");

btnText.addEventListener("click", function () {
  let anytext = document.getElementById("anytext").value;
  if(anytext) {
    let qrcode = document.getElementById("qrcode-text");
  let fcolor = document.getElementById("fcolor-text").value;
  let bcolor = document.getElementById("bcolor-text").value;
  let size = document.getElementById("size-text").value;
  qrcode.innerHTML = "";
  new QRious({
    element: qrcode,
    background: bcolor,
    backgroundAlpha: 1,
    foreground: fcolor,
    foregroundAlpha: 1,
    level: "H",
    padding: 12,
    size: size,
    value: anytext,
  });
  } else {
    alert('enter some text')
  }
});