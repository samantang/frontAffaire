// pour le téléchargemnt des images ===============================================
window.URL = window.URL || window.webkitURL;

var fileSelect = document.getElementById("fileSelect"),
    fileElem = document.getElementById("fileElem"),
    fileList = document.getElementById("fileList");

    // fileSelect.addEventListener("click", function (e) {
    //     if (fileElem) {
    //       fileElem.click();
    //     }
    //     e.preventDefault(); // prevent navigation to "#"
    //   }, false);

function handleFiles(files) {
    console.log('entree dans la fonction handleFiles');
  if (!files.length) {
    fileList.innerHTML = "<p>No files selected!</p>";
  } else {
    fileList.innerHTML = "";
    var list = document.createElement("ul");
    fileList.appendChild(list);
    for (var i = 0; i < files.length; i++) {
      var li = document.createElement("li");
      list.appendChild(li);
      
      var img = document.createElement("img");
      img.src = window.URL.createObjectURL(files[i]);
      img.height = 60;
      img.onload = function() {
        window.URL.revokeObjectURL(this.src);
      }
      li.appendChild(img);
      var info = document.createElement("span");
      info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
      li.appendChild(info);
    }
  }
}
function handleFiles(){
console.log('dans la deuxime fonction qui na pas de parametres ')
};