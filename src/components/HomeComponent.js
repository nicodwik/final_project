import React, { Fragment } from 'react';
import '../App.css';
import { Card, CardBody, CardText } from "reactstrap";


class DistanceInput extends React.Component {
  
  _handleChange = (e) => {
    this.props.onChangeDistance(e.target.value);
  }

  render() {

    return (
      <div>
        <label>
          {this.props.distanceLabel === 'M' ? 'Meter ' : 'Kilometer '}
          <input type="number" value={this.props.distance} onChange={this._handleChange}/>
        </label>
      </div>  
    )
  }
}

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meter: 0,
      kilometer: 0
    }
  }

  onChangeMeter = (meter) => {
    let kilometer = (parseFloat(meter) / 1000).toString();
    this.setState({meter, kilometer})
  }

  onChangeKilometer = (kilometer) => {
    let meter = (parseFloat(kilometer) * 1000).toString();
    this.setState({meter, kilometer})
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    
    return(
        <div>
            <Card>
                <CardBody>
                    <form>
                        <DistanceInput distanceLabel="K" distance={this.state.kilometer} onChangeDistance={this.onChangeKilometer}/>
                        <DistanceInput distanceLabel="M" distance={this.state.meter} onChangeDistance={this.onChangeMeter}/>
                    </form>
                </CardBody>
            </Card>
        </div>
  ) 
      
  };
}
export default HomeComponent;