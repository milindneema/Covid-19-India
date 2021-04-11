import React, { Component } from 'react';
import { Card, CardTitle, Badge, Progress, Row, Col } from 'reactstrap';
import DistrictData from './DistrictComponent';
import { numberWithCommas } from '../utils/CommonFunction';

class States extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateindex: null,
      stateData: null,
      modal: false,
    };
  }

  handleState = (index) => {
    if (this.state.stateindex === null || this.state.stateindex !== index || this.state.stateindex === index) {
      const state = this.props.total.statewise[index].state;
      this.toggle();
      this.setState({ stateData: state, stateindex: index });
    } else {
      this.setState({ stateData: null, stateindex: null });
    }
  };

  toggle = () =>
    this.state.modal
      ? this.setState({ modal: false })
      : this.setState({ modal: true });

  render() {
    const card = this.props.total.statewise.map((state, index) => {
      if (state.state !== 'Total') {
        const confirmPercent = state.confirmed !== '0' ? 100 : 0;
        const activePercent = (state.active / state.confirmed) * 100;
        const recoveredPercent = (state.recovered / state.confirmed) * 100;
        const deathsPercent = (state.deaths / state.confirmed) * 100;
        return (
          <Col key={index} xs='12' sm='12' md='6' lg='4'>
            <Card
              body
              outline
              color='primary'
              className='shadow m-3 bg-dark rounded'
              onClick={() => {
                this.handleState(index);
              }}
            >
              <CardTitle className='text-primary font-weight-bold'>
                <h4>
                  {state.state} &nbsp;&nbsp;
                  <Badge pill color='primary'>
                    &#8593; {numberWithCommas(state.deltaconfirmed)}
                  </Badge>
                </h4>
              </CardTitle>
              <div>
                {this.ProgressBar("Confirmed ", state.confirmed, confirmPercent, '')}
                {this.ProgressBar("Recovered", state.recovered, recoveredPercent, 'success')}
                {this.ProgressBar("Active", state.active, activePercent, 'warning')}
                {this.ProgressBar("Deaths", state.deaths, deathsPercent, 'danger')}
                <p className='text-white mt-2'>*Click the card to see district data</p>
              </div>
            </Card>
            {this.state.stateindex === index ? (
              <DistrictData
                stateDistrict={this.state.stateData}
                modal={this.state.modal}
                toggle={() => this.toggle}
              />
            ) : (
              <div></div>
            )}
          </Col>
        );
      } else {
        return <div key={state.state}></div>;
      }
    });
    return <Row>{card}</Row>;
  }

  ProgressBar(name, data, percentage, color) {
    return <>
      <div className='text-center text-white font-weight-bold'>
        {name}: {numberWithCommas(data)}
      </div>
      <Progress
        style={{ height: '22px', backgroundColor: 'grey' }}
        color={color}
        value={percentage ? percentage : 0}
      >
        {percentage ? percentage.toFixed(1) : 0} %
      </Progress>
    </>
  }
}
export default States;
