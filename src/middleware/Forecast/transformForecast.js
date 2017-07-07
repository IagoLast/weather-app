import { mapState } from './mapper.js';

export default function(apiForecast) {
  const dateToday = new Date();
  let dateTomorrow = new Date();
  dateTomorrow.setDate(dateToday.getDate() + 1);

  let today = _transformForecast(apiForecast.today, dateToday);
  let tomorrow = _transformForecast(apiForecast.tomorrow, dateTomorrow);

  let value = {
    name: apiForecast.name,
    today: today,
    tomorrow: tomorrow,
    date: dateToday,
  }
  return value;
}

function _transformForecast(apiForecast, date) {
  let forecast = mapState(apiForecast.value);
  forecast.date = date;
  forecast.description = apiForecast.description;
  forecast.tmp = apiForecast.tmp.current || Math.floor(((apiForecast.tmp.max + apiForecast.tmp.min) / 2));
  forecast.max = apiForecast.tmp.max;
  forecast.min = apiForecast.tmp.min;
  forecast.rainProb = apiForecast.rainProb;
  return Object.assign({}, forecast);
}
