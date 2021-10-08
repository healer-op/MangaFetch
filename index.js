function render(){

  alert("🧯Go to https://mangakomi.com and copy chapter link");
  alert("🧯Example : https://mangakomi.com/manga/the-thorn-that-pierces-me");
  var link=prompt("⚡Enter Link make sure not / in end");
  var name = link;
  var ch = prompt("⚡Enter Chapter Number");

  if(!name){
    name ="the-thorn-that-pierces-me");
  }
  if (!ch){
    ch=1;
  }


  name = name.substring(28, name.length - 0);
  
  document.getElementById("name").innerHTML = `Displaying ${name} Chapter ${ch}`

fetch(`https://mapi.mrhealer.repl.co/api/${name}/${ch}`)
.then(res=> res.json())
.then(data => {
    img = data.imgs;
    
    var base = document.createElement("img");
    base.setAttribute("src", "https://cdn.discordapp.com/attachments/890466471187214426/895906601825894470/PicsArt_10-08-11.03.26.jpg");
    base.setAttribute("width", "720");
    base.setAttribute("alt", "healdb");
    base.setAttribute("id", "healdb");
    document.getElementById("root").appendChild(base);
    var elem1 = document.createElement("br");
    document.getElementById("root").appendChild(elem1);

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
