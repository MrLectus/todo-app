let container = document.querySelector(".box");
let todo_item = document.querySelector("#todo-item");
let store = localStorage;
store.setItem("10", "23");
store.setItem("100", "223");
console.log(store);
let box = [];
todo_item.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        e.preventDefault();
        let foo = document.createElement("div");
        foo.innerHTML = `
     <div class="flex flex-row justify-items-stretch justify-between border-b border-b-dark-gray-blue-800">
          <div
            class="inline-block self-center my-3 ml-4 cursor-pointer border bg-dark-gray-blue-801 rounded-full border-dark-gray-blue-500 outline-none w-5 h-5">
          </div>
          <p class="self-center basis-8/12 text-dark-gray-blue-101 text-xs">
            ${todo_item.value}
          </p>
          <div class="bg-icon-check self-center w-4 h-4 mr-3"></div>
        </div> 
    `;
        container.appendChild(foo);
        todo_item.value = "";
    }
});
