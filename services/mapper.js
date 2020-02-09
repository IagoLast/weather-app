import { CLOUDS, CLOUDS_N, CLOUDY, CLOUDY_N, RAIN, RAIN_N, LITTLE_RAIN, LITTLE_RAIN_N, STORM, STORM_N, SUNNY, SUNNY_N, SNOW, SNOW_N } from './states.js';

export function mapState(state, forceDay) {
    let night;
    if (forceDay) {
        night = false;
    } else {
        night = _isNightTime();
    }
    switch (state.replace(/\D/g, '')) {
        case '13':
        case '14':
            return night ? CLOUDS_N : CLOUDS;
        case '15':
        case '16':
            return night ? CLOUDY_N : CLOUDY;
        case '23':
        case '24':
        case '25':
        case '26':
            return night ? RAIN_N : RAIN;
        case '43':
        case '44':
        case '45':
        case '46':
            return night ? LITTLE_RAIN_N : LITTLE_RAIN;
        case '51':
        case '52':
        case '53':
        case '54':
        case '61':
        case '62':
        case '63':
        case '64':
            return night ? STORM_N : STORM;
        case '11':
        case '12':
        case '17':
            return night ? SUNNY_N : SUNNY;
        case '33':
        case '34':
        case '35':
        case '36':
        case '71':
        case '72':
        case '73':
        case '74':
            return night ? SNOW_N : SNOW;
        default:
            return {
                src: '',
                style: {
                    background: '#FFB400',
                }
            };
    }
}

function _isNightTime() {
    const time = (new Date()).getHours();
    switch (new Date().getMonth()) {
        case 0:
            return (time < 9 || time >= 18)
        case 1:
            return (time < 9 || time >= 19)
        case 2:
            return (time < 8 || time >= 19)
        case 3:
            return (time < 8 || time >= 21)
        case 4:
            return (time < 7 || time >= 21)
        case 5:
            return (time < 7 || time >= 22)
        case 6:
            return (time < 7 || time >= 22)
        case 7:
            return (time < 7 || time >= 21)
        case 8:
            return (time < 8 || time >= 20)
        case 9:
            return (time < 8 || time >= 19)
        case 10:
            return (time < 9 || time >= 18)
        case 11:
            return (time < 9 || time >= 18)
    }
}

export default {
    mapState,
};
