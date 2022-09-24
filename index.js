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
    document.querySelector("#main-card").style.display = "none";
    document.querySelector("#thanks-card").style.display = "flex";
    document.querySelector(
      "#result-text"
    ).innerHTML = `You selected ${rateSelected} out of 5`;
  });

  document.querySelector(".reset__button").addEventListener("click", (e) => {
    document.querySelector("#thanks-card").style.display = "none";
    document.querySelector("#main-card").style.display = "flex";
  });
});
