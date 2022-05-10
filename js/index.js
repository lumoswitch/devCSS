function applyColor(color) {
    let bgArea = document.querySelector(".sample-area");
    console.log(bgArea.style.backgroundColor);

    let textArea = document.querySelector(".text-samples");
    bgArea.classList.remove(Array.from(bgArea.classList).pop());
    textArea.classList.remove(Array.from(textArea.classList).pop());
    bgArea.classList.add("bg-" + color);
    textArea.classList.add("text-" + color);
    document.querySelector(".label").innerHTML = color;

}


  function changeMode(){
    document.body.classList.toggle('dark');
    if (document.querySelector("body > nav > button").innerHTML === "Night mode") {
        document.querySelector("body > nav > button").innerHTML = "Light mode";
      } else {
        document.querySelector("body > nav > button").innerHTML = "Night mode";
      }
  }