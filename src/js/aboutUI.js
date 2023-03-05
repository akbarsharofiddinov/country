const aboutBlock = document.querySelector(".about-block");

export function aboutUI(data) {
  const {
    name,
    tld,
    currencies,
    capital,
    region,
    subregion,
    languages,
    borders,
    area,
    population,
    fifa,
    flags,
  } = data;

  const values = Object.values(currencies)[0];
  const languagesValues = Object.values(languages)
  const { name: currencyName, symbol } = values;

  console.log(borders)

  aboutBlock.innerHTML = `
    <div class="flag">
        <img src=${flags.svg} alt="Flag-IMG">
    </div>
    <div class="country-info">
        <div class="country-info-top">
            <h2>Official: - ${name.official}</h2>
            <h2>Population: - ${population}</h2>
            <h2>Area: - ${area} km<sup>2</sup> </h2>
            <h2>Capital: - ${capital}</h2>
            <h2>Region: - ${region}</h2>
            <h2>Subregion: - ${subregion}</h2>
            <h2>Fifa: - ${fifa}</h2>
        </div>
        <div className="tld">
            Top lavel domain : ${tld.map((item) => item)}
        </div>
        <div class="currency-info">
            <p>Currency name: ${currencyName}</p>
            <p>Currency symbol: ${symbol}</p>
        </div>
        <div class="languages">
            Languages: ${languagesValues.map(item => item).join(", ")}
        </div>
        <div class="borders">
            Borders: ${borders ? borders.map(item => item).join(", ") : "Not borders" }
        </div>
    </div>
  `;
}
