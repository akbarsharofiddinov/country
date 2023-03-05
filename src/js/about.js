import "../style/about.css";
import "../path/about.html";
import "./aboutUI";

import { aboutUI } from "./aboutUI";

const loading = document.querySelector(".loading");

const searchLocation = window.location.search;
const searchParams = new URLSearchParams(searchLocation);
const name = searchParams.get("name");

async function getCountry(name) {
  try {
    loading.classList.add("active");
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await res.json();

    if (res.status === 200) {
      aboutUI(data[0]);
    }
  } catch (error) {
    console.log(error);
  } finally {
    loading.classList.remove("active");
  }
}

getCountry(name);
