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
import States from './StateComponent';
import { Link } from 'react-router-dom';
import { numberWithCommas } from '../utils/CommonFunction';

class Country extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      total: null,
      states: null,
    };
  }

  async componentDidMount() {
    const response = await fetch('https://api.covid19india.org/data.json');
    const data = await response.json();
    this.setState({ total: data.statewise[0], states: data, loading: false });
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
              <Col className='col-5 col-md-4 offset-md-2 '>
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
                  <h4>
                    <CardTitle className='text-primary font-weight-bold'>
                      Confirmed &nbsp;&nbsp;
                      <Badge pill color='primary'>
                        &#8593;{' '}
                        {numberWithCommas(this.state.total.deltaconfirmed)}
                      </Badge>
                    </CardTitle>
                  </h4>
                  <h4>
                    <CardText className='text-primary float-left font-weight-bold'>
                      {numberWithCommas(this.state.total.confirmed)}
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
                  <h4>
                    <CardTitle className='text-warning font-weight-bold'>
                      Active &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </CardTitle>
                  </h4>
                  <h4>
                    <CardText className='text-warning  font-weight-bold'>
                      {numberWithCommas(this.state.total.active)}
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
                  <h4>
                    <CardTitle className='text-success font-weight-bold'>
                      Recovered &nbsp;&nbsp;&nbsp;&nbsp;
                      <Badge pill color='success'>
                        &#8593;{' '}
                        {numberWithCommas(this.state.total.deltarecovered)}
                      </Badge>
                    </CardTitle>
                  </h4>
                  <h4>
                    <CardText className='text-success float-left font-weight-bold'>
                      {numberWithCommas(this.state.total.recovered)}
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
                  <h4>
                    <CardTitle className='text-danger font-weight-bold'>
                      Deaths &nbsp;&nbsp;
                      <Badge pill color='danger'>
                        &#8593; {numberWithCommas(this.state.total.deltadeaths)}
                      </Badge>
                    </CardTitle>
                  </h4>
                  <h4>
                    <CardText className='text-danger font-weight-bold'>
                      {numberWithCommas(this.state.total.deaths)}
                    </CardText>
                  </h4>
                </Card>
              </Col>
            </Row>
            <h2 className='d-flex justify-content-center'>
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
