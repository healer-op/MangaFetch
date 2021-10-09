function render(){

  var link=prompt("⚡Enter Manga Name");
  var link = link.replace(` `, "-");
  var name = link.toLowerCase();
  if(!name){
    name ="the-thorn-that-pierces-me";
  }
  var ch = prompt("⚡Enter Chapter Number");
  alert("🧯We Scrape Data from MangaKomi");
  
  document.getElementById("name").innerHTML = `Displaying ${name} Chapter ${ch}`

fetch(`https://mapi.mrhealer.repl.co/api/${name}/${ch}`)
.then(res=> res.json())
.then(data => {
    img = data.imgs;
    for(var i=0;i<img.length;i++){
      var elem = document.createElement("img");
      elem.setAttribute("src", img[i]);
      elem.setAttribute("width", "720");
      elem.setAttribute("alt", "healdb");
      elem.setAttribute("id", "healdb");
      document.getElementById("root").appendChild(elem);
      var elem1 = document.createElement("br");
      document.getElementById("root").appendChild(elem1);
    }
});

}
