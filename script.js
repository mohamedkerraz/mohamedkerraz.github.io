const scenarios = document.getElementById("scenarios");

fetch("/assets/data/user_story.json", {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    data.scenarios.forEach((el) => {
      scenarios.innerHTML += `<div
  class="list-group-item list-group-item-action d-flex gap-3 py-3"
  aria-current="true"
>
  US
  <div class="d-flex gap-2 w-100 justify-content-between">
    <div>
      <h6 style="font-weight: bold" class="mb-0">${el.titre}</h6>
      <p class="mb-0 opacity-75">
        ${el.texte}
      </p>
    </div>
  </div>
</div>`;
    });
  });





const alternance = document.getElementById("alternance");

fetch("/assets/data/alternance.json", {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    data.alternance.forEach((el) => {
      alternance.innerHTML += `
      <div class="citations" >
          <p>${el.texte}</p>
          <p>${el.titre}</p>
      </div>`;
    });
  });
