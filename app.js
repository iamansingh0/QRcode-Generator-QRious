const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let website = document.getElementById("website").value;
  if (website) {
    let qrcode = document.getElementById("qrcode");
    let fcolor = document.getElementById('fcolor').value 
    let bcolor = document.getElementById('bcolor').value 
    let size = document.getElementById('size').value 
    qrcode.innerHTML = "";
    new QRious({
      element: qrcode,
      background: bcolor,
      backgroundAlpha: 1,
      foreground: fcolor,
      foregroundAlpha: 1,
      level: "H",
      padding: 0,
      size: size,
      value: website,
    });
    document.getElementById("qrcode-container").style.display = "block";
  } else {
    alert("Please enter a valid URL");
  }
});
