const loading = document.querySelector(".loading");
import { getData, notFound } from ".";

class RequestAPI {
  static async getCountries(search = "") {
    try {
      loading.classList.add("active");
      const res = await fetch(
        search
          ? `https://restcountries.com/v3.1/name/${search}`
          : `https://restcountries.com/v3.1/all`
      );
      const data = await res.json();
      if (res.status === 200) {
        getData(data);
      }else throw Error("Country Not Found")
    } catch (error) {
      console.log(error.message);
      notFound(search);
    } finally {
      loading.classList.remove("active");
    }
  }
}

export default RequestAPI;
