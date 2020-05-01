import React, { Component } from 'react';
import {
  Card,
  CardTitle,
  CardText,
  Badge,
  Container,
  Row,
  Col,
  Spinner,
  Button,
} from 'reactstrap';
import AllCountry from './AllCountry';
import { Link } from 'react-router-dom';
import { numberWithCommas } from '../utils/CommonFunction';

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
    console.log(data);
    this.setState({ World: data, CountryData: countries, loading: false });
  }
  render() {
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
          <div>
            <Row className='d-flex justify-content-center'>
              <Col className='col-5 col-md-4 offset-md-2'>
                <Link to='/'>
                  <Button
                    outline
                    color='primary'
                    style={{ padding: '.4em 2em' }}
                  >
                    India
                  </Button>
                </Link>
              </Col>
              <Col className='col-5 col-md-4 offset-md-2'>
                <Link to='/world'>
                  <Button
                    outline
                    color='primary'
                    style={{ padding: '.4em 2em' }}
                  >
                    World
                  </Button>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col xs='12' sm='6' md='6' lg='3'>
                <Card
                  body
                  outline
                  color='primary'
                  className=' shadow m-3 bg-white rounded'
                >
                  <CardTitle className='text-primary font-weight-bold'>
                    Confirmed &nbsp;&nbsp;&nbsp;
                    <Badge pill color='primary'>
                      &#8593; {numberWithCommas(this.state.World.todayCases)}
                    </Badge>
                  </CardTitle>
                  <h4>
                    <CardText className='text-primary float-left font-weight-bold'>
                      {numberWithCommas(this.state.World.cases)}
                    </CardText>
                  </h4>
                </Card>
              </Col>
              <Col xs='12' sm='6' md='6' lg='3'>
                <Card
                  body
                  outline
                  color='warning'
                  className=' shadow m-3 bg-white rounded'
                >
                  <CardTitle className='text-warning font-weight-bold'>
                    Active &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </CardTitle>

                  <h4>
                    <CardText className='text-warning  font-weight-bold'>
                      {numberWithCommas(this.state.World.active)}
                    </CardText>
                  </h4>
                </Card>
              </Col>
              <Col xs='12' sm='6' md='6' lg='3'>
                <Card
                  body
                  outline
                  color='success'
                  className=' shadow m-3 bg-white rounded'
                >
                  <CardTitle className='text-success font-weight-bold'>
                    Recovered &nbsp;&nbsp;&nbsp;&nbsp;
                  </CardTitle>

                  <h4>
                    <CardText className='text-success float-left font-weight-bold'>
                      {numberWithCommas(this.state.World.recovered)}
                    </CardText>
                  </h4>
                </Card>
              </Col>
              <Col xs='12' sm='6' md='6' lg='3'>
                <Card
                  body
                  outline
                  color='danger'
                  className=' shadow m-3 bg-white rounded'
                >
                  <CardTitle className='text-danger font-weight-bold'>
                    Deaths &nbsp;&nbsp;&nbsp;
                    <Badge pill color='danger'>
                      &#8593; {numberWithCommas(this.state.World.todayDeaths)}
                    </Badge>
                  </CardTitle>
                  <h4>
                    <CardText className='text-danger font-weight-bold'>
                      {numberWithCommas(this.state.World.deaths)}
                    </CardText>
                  </h4>
                </Card>
              </Col>
            </Row>
            <h5 className='d-flex justify-content-center'>
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
