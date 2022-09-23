document.addEventListener("DOMContentLoaded", function (e) {
  const rateButtons = document.querySelectorAll("li");
  let isSelected = undefined;
  let rateSelected = 0;
  console.log(rateButtons);

  rateButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      console.log(isSelected);
      if (isSelected != btn && isSelected != undefined) {
        isSelected.classList.remove("marked");
      }

      btn.classList.toggle("marked");
      isSelected = btn;
      rateSelected = +document.querySelector(".marked").querySelector("a")
        .innerHTML;
    });
  });

  document.querySelector("#submit__btn").addEventListener("click", (e) => {
    console.log(rateSelected);
  });
});
