import React from 'react';
import Titles from './component/Title';
import Form from './component/Form';
import Weather from './component/Weather';
import snowImg from './img/snowImg.jpg';
import sunnyImg from './img/sunnyImg.jpg';
import rainImg from './img/rainImg.jpg';

//this is openweatherMap api key. create account on https://openweathermap.org to get keys
const API_KEY = "18fcffeaf265ff3d60e4ef0c121189b5";

// http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric
class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        console.log('data is: ', data)

        if (city && country) {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            })
        } else {
            debugger
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please Enter Values"
            })
        }
    }
    render() {

        var divStyle = {
            background : this.state.temperature < 0 ? 'url(' + snowImg + ') center center no-repeat' : 'url(' + sunnyImg + ') center center no-repeat'
            //backgroundImage: 'url(' + snowImg + ')'
        }
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div style={divStyle} className="col-xs-5 title-container">
                                    <Titles />
                                </div>
                                <div className="col-xs-7 form-container">
                                    <Form getWeather={this.getWeather} />
                                    <Weather temperature={this.state.temperature}
                                        city={this.state.city}
                                        country={this.state.country}
                                        humidity={this.state.humidity}
                                        description={this.state.description}
                                        error={this.state.error}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
