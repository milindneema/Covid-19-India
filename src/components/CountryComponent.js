import React, { Component } from 'react';
import { Row, Col, Spinner, Button, Container } from 'reactstrap';
import States from './StateComponent';
import { Link } from 'react-router-dom';
import { Summary } from '../utils/Summary_component';
// import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from 'recharts';

class Country extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      total: null,
      states: null,
      timeSerise: null
    };
  }

  async componentDidMount() {
    const response = await fetch('https://data.covid19india.org/data.json');
    const data = await response.json();
    console.log(data);
    const length = data.cases_time_series.length
    const serise = data.cases_time_series.slice(length - 30, length)
    // console.log(serise);
    this.setState({ total: data.statewise[0], timeSerise: serise, states: data, loading: false });

  }
  render() {
    // console.log(this.state.timeSerise)
    return (
      <Container fluid={true} className='m-2 mb-5 justify-content-center'>
        {this.state.loading ? (
          <div className='d-flex justify-content-center'>
            <Spinner
              color='primary'
              style={{ width: '5rem', height: '5rem' }}
            />
          </div>
        ) : (
          <div className='m-2 mb-5 justify-content-center'>
            <Row className='d-flex justify-content-center'>
              <Col className='col-5 col-md-4 offset-md-2 '>
                <Link to='/'>
                  <Button color='primary' style={{ padding: '.4em 2em' }}>
                    India
                  </Button>
                </Link>
              </Col>
              <Col className='col-5 col-md-4 offset-md-2'>
                <Link to='/world'>
                  <Button outline color='primary' style={{ padding: '.4em 2em' }}>
                    World
                  </Button>
                </Link>
              </Col>
            </Row>

            <Row>
              {Summary("Confirmed", this.state.total.deltaconfirmed, this.state.total.confirmed, "primary", "text-primary")}
              {Summary("Active", null, this.state.total.active, "info", "text-info")}
              {Summary("Recovered", this.state.total.deltarecovered, this.state.total.recovered, "success", "text-success")}
              {Summary("Deaths", this.state.total.deltadeaths, this.state.total.deaths, "danger", "text-danger")}
            </Row>
            <h2 className='d-flex justify-content-center text-white'>
              States
              <span style={{ marginLeft: '10px' }}>
                {this.state.total.lastupdatedtime}
              </span>
            </h2>
            <States total={this.state.states} />
          </div>
        )}
      </Container>
    );
  }


}
export default Country;
