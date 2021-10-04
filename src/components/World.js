import React, { Component } from 'react';
import { Container, Row, Col, Spinner, Button, } from 'reactstrap';
import AllCountry from './AllCountry';
import { Link } from 'react-router-dom';
import { Summary } from '../utils/Summary_component';

class World extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      World: null,
      CountryData: null,
    };
  }

  async componentDidMount() {
    const response = await fetch('https://corona.lmao.ninja/v2/all');
    const response2 = await fetch(
      'https://corona.lmao.ninja/v2/countries?sort=cases'
    );
    const data = await response.json();
    const countries = await response2.json();
    // console.log(data);
    this.setState({ World: data, CountryData: countries, loading: false });
  }
  render() {

    return (
      <Container fluid={true} className='m-2 mb-5 justify-content-center'>
        {this.state.loading ? (
          <div className='d-flex justify-content-center'>
            <Spinner color='primary' style={{ width: '5rem', height: '5rem' }} />
          </div>
        ) : (
          <div>
            <Row className='d-flex justify-content-center'>
              <Col className='col-5 col-md-4 offset-md-2'>
                <Link to='/'>
                  <Button outline color='primary' style={{ padding: '.4em 2.5em' }}>
                    India
                  </Button>
                </Link>
              </Col>
              <Col className='col-5 col-md-4 offset-md-2'>
                <Link to='/world'>
                  <Button color='primary' style={{ padding: '.4em 2.5em' }} >
                    World
                  </Button>
                </Link>
              </Col>
            </Row>
            <Row>
              {Summary("Confirmed", this.state.World.todayCases, this.state.World.cases, "primary", "text-primary")}
              {Summary("Active", null, this.state.World.active, "warning", "text-warning")}
              {Summary("Recovered", null, this.state.World.recovered, "success", "text-success")}
              {Summary("Deaths", this.state.World.todayDeaths, this.state.World.deaths, "danger", "text-danger")}
            </Row>
            <h5 className='d-flex justify-content-center text-white'>
              Country
              <span style={{ marginLeft: '10px' }}>
                ({new Date(this.state.World.updated).toLocaleString()}
              </span>
              )
            </h5>
            <AllCountry CountryData={this.state.CountryData} />
          </div>
        )}
      </Container>
    );
  }
}
export default World;
