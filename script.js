const btn = document.getElementById("button");
const placeholder = document.getElementById("placeholder");
const list = document.querySelector(".list");
btn.addEventListener("click",addEls);
placeholder.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addEls();
  }
});
function addEls(){
    if (placeholder.value.trim() === "") return;
    const container = document.createElement("div");
    container.classList.add("wrapper");
    const tick = document.createElement("div");
    tick.classList.add("tick");
    tick.textContent=" ";
    const item = document.createElement("div");
    item.classList.add("item");
    item.textContent = placeholder.value;
    const cross = document.createElement("div");
    cross.classList.add("cross");
    cross.textContent="❌";
    container.appendChild(tick);
    container.appendChild(item);
    container.appendChild(cross);
    list.appendChild(container);
    cross.addEventListener("click",()=>{
        container.remove();
    });
    item.addEventListener("click",()=>{
        item.classList.toggle("strike");
        tick.textContent=item.classList.contains("strike")?"✅":"";
    });
    placeholder.value="";
    placeholder.focus();
}