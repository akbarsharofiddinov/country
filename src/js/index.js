import "../style/index.css";
import "../path/index.html";
import RequestAPI from "./apiClass";

const countryBlock = document.querySelector(".country-block");
const inputSearch = document.querySelector("#input-search");

const errorBlock = document.querySelector(".error-block");

RequestAPI.getCountries();

export function getData(data) {
  const countryItems = document.createElement("div");
  countryItems.className = "country-items";

  countryBlock.innerHTML = "";
  errorBlock.classList.remove("active");

  data.forEach((el) => {
    const countryItem = document.createElement("div");
    countryItem.className = "country-item";
    countryItem.innerHTML = `
        <div class="flag">
            <img src=${el.flags.svg} alt="Country-Flags" />
        </div>
        <div class="country-item-body">
            <h3>${el.name.common}</h3>
            <h4>population: ${el.population}</h4>
            <p class="fifa">fifa: ${el.fifa ? el.fifa : "NOT :-("}</p>
            <p class="official">${el.name.official}</p>
        </div>
        <a href="about.html?name=${el.name.common}" class="item-link"></a>
    `;
    countryItems.append(countryItem);
  });

  countryBlock.append(countryItems);
}

// Not Found Error

const errorInner = document.querySelector(".error-inner");
const errorBlockClose = document.querySelector(".error-block_close");

export function notFound(event) {
  inputSearch.setAttribute("readonly", "");
  errorBlock.classList.add("active");

  errorInner.innerHTML += `
    <h1 class="title">404 Error</h1>
    <div>
      <b style="text-transform: uppercase;">${event}</b> is Not Found
      <p class="desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus maxime id modi? Cumque, fugiat ullam.
      </p>
    </div>
  `;
}

errorBlock.append(errorInner);

errorBlockClose.addEventListener("click", ()=> {
  console.log("click");
})

// =======================================

function debounce(func, timeout = 400) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

async function saveInput(event) {
  const searchValue = event.target.value;
  RequestAPI.getCountries(searchValue);
}

const processChange = debounce((event) => saveInput(event));

inputSearch.addEventListener("input", processChange);
