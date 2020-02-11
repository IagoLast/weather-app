import cache from 'memory-cache';
import mapper from './mapper';

const FIVE_MINUTES = 5 * 60 * 1000;

export function getWeather(id) {
    if (cache.get(id)) {
        return Promise.resolve(cache.get(id));
    }
    return fetch(`https://meteosapi-server.herokuapp.com/api/v1/simple/${id}`)
        .then(response => response.json())
        .then(response => {
            const forecast = apiForecastToInternalForecast(response);
            cache.put(id, forecast, FIVE_MINUTES);
            return forecast;
        });
}

function apiForecastToInternalForecast(apiForecast) {
    const dateToday = new Date();
    let dateTomorrow = new Date();
    dateTomorrow.setDate(dateToday.getDate() + 1);

    let today = _transformForecast(apiForecast.today, dateToday);
    let tomorrow = _transformForecast(apiForecast.tomorrow, dateTomorrow, true);

    today.name = apiForecast.name;
    tomorrow.name = apiForecast.name;

    let value = {
        name: apiForecast.name,
        today: today,
        tomorrow: tomorrow,
        date: dateToday,
    }
    return value;
}

function _transformForecast(apiForecast, date, forceDay) {
    let forecast = mapper.mapState(apiForecast.value, forceDay);

    forecast.date = date;
    forecast.tmp = apiForecast.tmp.current || Math.floor(((apiForecast.tmp.max + apiForecast.tmp.min) / 2));
    forecast.max = apiForecast.tmp.max;
    forecast.min = apiForecast.tmp.min;
    forecast.rainProb = apiForecast.rainProb;
    return Object.assign({}, forecast);
}

export default { getWeather };