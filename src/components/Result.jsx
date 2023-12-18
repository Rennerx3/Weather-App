import Grades from "./Grades";
import Secundary from "./Secundary";

const Result = ({back ,datos, lugar}) => {

    let temperature = datos.data[0].coordinates[0].dates[0].value,
        humidity = datos.data[2].coordinates[0].dates[0].value,
        tempsensation = datos.data[3].coordinates[0].dates[0].value,
        symbol = datos.data[1].coordinates[0].dates[0].value;

    

    return ( 
            <div id="title-main">
                <div onClick={back} id="title">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#0cabe4" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                    <p>Weather App</p>
                </div>
                <hr />
                <Grades symbol={symbol} temperature={temperature} lugar={lugar}  />
                <Secundary humidity={humidity} tempsensation={tempsensation} />
            </div>
     );
}
 
export default Result;