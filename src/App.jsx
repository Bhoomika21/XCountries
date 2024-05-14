import { useState, useEffect } from "react"

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try{
        const data = await fetch("https://restcountries.com/v3.1/all");
        if (!data.ok) {
          throw new Error('Failed to fetch data');
        }

        const response = await data.json();
        console.log(response[0].flags.png)
        setCountries(response)
      }
      catch(error){
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  },[])

  return (
    <>
      <div className="contry_wrapper">
        {countries.map(country => (
          <div key={country.cca2} className="single_contry">
            <img src={country.flags.png} alt={country.name.common} />
            <p>{country.name.official}</p>
          </div>
        ))}        
      </div>
    </>
  )
}

export default App
