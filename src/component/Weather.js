import React from 'react';

//this is the stateful component way
class Weather extends React.Component {
    render() {
        return (
            <div className="weather__info">
                {
                    this.props.city && this.props.country && <p className="weather__key"> Location: 
                        <span className="weather__value" > {this.props.city}, {this.props.country} </span>
                    </p>
                }
                {
                    this.props.temperature && <p className="weather__key">Temperature: 
                        <span className="weather__value"> {this.props.temperature} </span>
                    </p>
                }
                {
                    this.props.humidity && <p className="weather__key">humidity: 
                        <span className="weather__value"> {this.props.humidity} </span>
                    </p>
                }
                {
                    this.props.description && <p className="weather__key">Conditions: 
                        <span className="weather__value"> {this.props.description} </span>
                    </p>
                }
                {
                    this.props.error && <p className="weather__key"> {this.props.error} </p>
                }
            </div>
        );
    }
}

//below is the stateless way to implement
// const Weather = (props) => {
//     return (
//         <div>
//             {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
//             {props.temperature && <p>Temperature: {props.temperature}</p>}
//             {props.humidity && <p>humidity: {props.humidity}</p>}
//             {props.description && <p>Conditions: {props.description}</p>}
//             {props.error && <p> {props.error} </p>}
//         </div>
//     )
// }

export default Weather;