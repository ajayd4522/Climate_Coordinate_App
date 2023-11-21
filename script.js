
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd9ce7e928dmsha530eb1fef4ac4bp15963cjsn24f51d4a161c',
		'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
	}
};
const url = 'https://foreca-weather.p.rapidapi.com/location/search/delhi?lang=en&country=in';

// Wrap the code in an async function
async function fetchData() {
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Call the async function
  fetchData();