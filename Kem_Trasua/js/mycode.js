function CalTotal() {
  let total = 0;

  let menuListCart = document.querySelectorAll(".menu-list")[1];
  let totalPrice = document.getElementById("total-amount");
  let checkItems = document.querySelectorAll('input[type="checkbox"]:checked');
  let menuListFooter = menuListCart.querySelector(".menu-list-footer");
  let menuListCartContent = menuListCart.querySelector(".menu-content");

  menuListCartContent.innerHTML = "";

  checkItems.forEach((item) => {
    const itemName = item.parentElement.querySelector("label").innerText;
    total += Number(item.value);
    menuListCartContent.innerHTML += `<div class="menu-item"><div><label>${itemName}</label></div></div>`;
    console.log(item);
  });

  totalPrice.innerText = total;
  if (total > 0) {
    menuListCartContent.innerHTML += `<br>`;
    menuListFooter.style.display = "block";
  } else {
    menuListFooter.style.display = "none";
  }
}
