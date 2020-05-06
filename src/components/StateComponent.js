import React, { Component } from 'react';
import { Card, CardTitle, Badge, Progress, Row, Col } from 'reactstrap';
import Table from './TableComponent';
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
                <div className='text-center text-white font-weight-bold'>
                  confirmed : {numberWithCommas(state.confirmed)}
                </div>
                <Progress
                  style={{ height: '22px', backgroundColor: 'grey' }}
                  value={state.confirmed !== '0' ? 100 : 0}
                >
                  100%
                </Progress>
                <div className='text-center text-white font-weight-bold'>
                  Recovered : {numberWithCommas(state.recovered)}
                </div>
                <Progress
                  style={{ height: '22px', backgroundColor: 'grey' }}
                  color='success'
                  value={recoveredPercent ? recoveredPercent : 0}
                >
                  {recoveredPercent ? recoveredPercent.toFixed(1) : 0}%
                </Progress>
                <div className='text-center text-white font-weight-bold'>
                  Active : {numberWithCommas(state.active)}
                </div>
                <Progress
                  style={{ height: '22px', backgroundColor: 'grey' }}
                  color='warning'
                  value={activePercent ? activePercent : 0}
                >
                  {activePercent ? activePercent.toFixed(1) : 0}%
                </Progress>
                <div className='text-center text-white font-weight-bold'>
                  Deaths : {numberWithCommas(state.deaths)}
                </div>
                <Progress
                  style={{ height: '22px', backgroundColor: 'grey' }}
                  color='danger'
                  value={deathsPercent ? deathsPercent : 0}
                >
                  {deathsPercent ? deathsPercent.toFixed(1) : 0}%
                </Progress>
                <p className='text-white mt-2'>*This card is clickable</p>
              </div>
            </Card>
            {this.state.stateindex === index ? (
              <Table
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
}
export default States;
