const asciiPre = document.getElementById("ascii");
asciiPre.addEventListener("click", handleBratClick);

const ls = window.localStorage;
ls.clear();

function addToBratCount() {
  try {
    const ls = window.localStorage;
    let bratCount = (Number.parseInt(ls.getItem("bratCount")) || 0) + 1;
    ls.setItem("bratCount", bratCount);
    console.log("Brat Count: ", bratCount);
    return bratCount;
  } catch (error) {
    console.error("Error updating Brat Count:", error);
    return 0;
  }
}

function handleBratClick() {
  const bratCount = addToBratCount();
  const bratBtn = document.getElementById("brat-btn");
  if (bratCount > 4) {
    bratBtn.style.display = "inline-block";
  } else {
    bratBtn.style.display = "none";
  }
}
