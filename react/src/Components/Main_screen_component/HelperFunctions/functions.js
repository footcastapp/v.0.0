function getCity() {
  $.ajax("http://ip-api.com/json").then(
    function success(response) {
      let { city } = response;
      return city;
    },

    function fail(data, status) {
      return null;
    }
  );
}
function getHourly(countryCode, apiKey) {
  let hourlyUrl = `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${countryCode}?apikey=${apiKey}`;
  $.ajax({
    url: hourlyUrl,
    async: false,
    dataType: "json",
    success: function(data) {
      return data;
    }
  });
}

function getDaily(countryCode, apiKey) {
  let daily = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${countryCode}?apikey=${apiKey}`;
  $.ajax({
    url: daily,
    async: false,
    dateType: "json",
    success: function(data) {
      return data;
    }
  });
}

function getCurrent(countryCode,apiKey){
    let hourly = this.getHourly(countryCode,apiKey);
    return hourly[0];
}

export default getCity;
export default getHourly;
export default getDaily;
export default getCurrent;
