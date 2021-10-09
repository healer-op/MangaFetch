function render(){

  alert("🧯Go to https://mangakomi.com and copy chapter link");
  alert("🧯Example : https://mangakomi.com/manga/the-thorn-that-pierces-me");
  var link=prompt("⚡Enter Link make sure not / in end");
  var name = link;
  var ch = prompt("⚡Enter Chapter Number");
  if(name){
     name = name.substring(28, name.length - 0);
  }
  else{
    name ="the-thorn-that-pierces-me";
  }
  if (!ch){
    ch=1;
  }
  
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
      base.setAttribute("id", "healdb");
      document.getElementById("root").appendChild(elem);
      var elem1 = document.createElement("br");
      document.getElementById("root").appendChild(elem1);
    }
});

}
