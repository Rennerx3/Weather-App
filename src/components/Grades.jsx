const Grades = ({temperature,lugar, symbol}) => {

    const weatherSymbolMappings = {
        0: 'https://static.meteomatics.com/widgeticons/wsymbol_0999_unknown.png',
        1: 'https://static.meteomatics.com/widgeticons/wsymbol_0001_sunny.png',
        101: 'https://static.meteomatics.com/widgeticons/wsymbol_0008_clear_sky_night.png',
        2: 'https://static.meteomatics.com/widgeticons/wsymbol_0002_sunny_intervals.png',
        102: 'https://static.meteomatics.com/widgeticons/wsymbol_0041_partly_cloudy_night.png',
        3: 'https://static.meteomatics.com/widgeticons/wsymbol_0043_mostly_cloudy.png',
        103: 'https://static.meteomatics.com/widgeticons/wsymbol_0044_mostly_cloudy_night.png',
        4: 'https://static.meteomatics.com/widgeticons/wsymbol_0003_white_cloud.png',
        104: 'https://static.meteomatics.com/widgeticons/wsymbol_0042_cloudy_night.png',
        5: 'https://static.meteomatics.com/widgeticons/wsymbol_0018_cloudy_with_heavy_rain.png',
        105: 'https://static.meteomatics.com/widgeticons/wsymbol_0018_cloudy_with_heavy_rain.png',
        6: 'https://static.meteomatics.com/widgeticons/wsymbol_0021_cloudy_with_sleet.png',
        106: 'https://static.meteomatics.com/widgeticons/wsymbol_0021_cloudy_with_sleet.png',
        7: 'https://static.meteomatics.com/widgeticons/wsymbol_0020_cloudy_with_heavy_snow.png',
        107: 'https://static.meteomatics.com/widgeticons/wsymbol_0020_cloudy_with_heavy_snow.png',
        8: 'https://static.meteomatics.com/widgeticons/wsymbol_0009_light_rain_showers.png',
        108: 'https://static.meteomatics.com/widgeticons/wsymbol_0025_light_rain_showers_night.png',
        9: 'https://static.meteomatics.com/widgeticons/wsymbol_0011_light_snow_showers.png',
        109: 'https://static.meteomatics.com/widgeticons/wsymbol_0027_light_snow_showers_night.png',
        10: 'https://static.meteomatics.com/widgeticons/wsymbol_0013_sleet_showers.png',
        110: 'https://static.meteomatics.com/widgeticons/wsymbol_0029_sleet_showers_night.png',
        11: 'https://static.meteomatics.com/widgeticons/wsymbol_0006_mist.png',
        111: 'https://static.meteomatics.com/widgeticons/wsymbol_0063_mist_night.png',
        12: 'https://static.meteomatics.com/widgeticons/wsymbol_0007_fog.png',
        112: 'https://static.meteomatics.com/widgeticons/wsymbol_0007_fog.png',
        13: 'https://static.meteomatics.com/widgeticons/wsymbol_0050_freezing_rain.png',
        113: 'https://static.meteomatics.com/widgeticons/wsymbol_0050_freezing_rain.png',
        14: 'https://static.meteomatics.com/widgeticons/wsymbol_0024_thunderstorms.png',
        114: 'https://static.meteomatics.com/widgeticons/wsymbol_0024_thunderstorms.png',
        15: 'https://static.meteomatics.com/widgeticons/wsymbol_0048_drizzle.png',
        115: 'https://static.meteomatics.com/widgeticons/wsymbol_0048_drizzle.png',
        16: 'https://static.meteomatics.com/widgeticons/wsymbol_0056_dust_sand.png',
        116: 'https://static.meteomatics.com/widgeticons/wsymbol_0056_dust_sand.png',
    }

    const weatherTextMappings = {
        0: 'A weather code could not be determined',
        1: 'Clear sky',
        101: 'Clear sky',
        2: 'Light clouds',
        102: 'Light clouds',
        3: 'Partly cloudy',
        103: 'Partly cloudy',
        4: 'Cloudy',
        104: 'Cloudy',
        5: 'Rain',
        105: 'Rain',
        6: 'Rain and snow / sleet',
        106: 'Rain and snow / sleet',
        7: 'Snow',
        107: 'Snow',
        8: 'Rain shower',
        108: 'Rain shower',
        9: 'Snow shower',
        109: 'Snow shower',
        10: 'Sleet shower',
        110: 'Sleet shower',
        11: 'Light Fog',
        111: 'Light Fog',
        12: 'Dense fog',
        112: 'Dense fog',
        13: 'Freezing rain',
        113: 'Freezing rain',
        14: 'Thunderstorms',
        114: 'Thunderstorms',
        15: 'Drizzle',
        115: 'Drizzle',
        16: 'Sandstorm',
        116: 'Sandstorm'
    }

    return ( 
        <div id="grades">
            <img style={{width:'125px'}} src={weatherSymbolMappings[symbol]} alt={weatherTextMappings[symbol]} />
            <h1>{temperature}°C</h1>
            <h4>{weatherTextMappings[symbol]}</h4>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                <span> {lugar}</span>
            </div>
        </div>
     );
}
 
export default Grades;