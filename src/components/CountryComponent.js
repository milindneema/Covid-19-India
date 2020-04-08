import React, { Component } from 'react';
import { Card, CardTitle, CardText, Badge, Container, Row, Col, Spinner } from 'reactstrap';

class Country extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            total: null
        };
    }

    async componentDidMount() {

        const response = await fetch('https://api.covid19india.org/data.json');
        const data = await response.json();
        this.setState({ total: data.statewise[0], loading: false })
    }
    render() {
        return (
            <Container fluid={true} className="m-2 mb-5s">
                {this.state.loading ? <div className="d-flex justify-content-center">
                    <Spinner color="primary" style={{ width: '5rem', height: '5rem' }} />
                </div> :
                    <div>
                        <Row className="d-flex justify-content-center">
                            <h2>India&nbsp;&nbsp;&nbsp;&nbsp;</h2>
                            <h2>{this.state.total.lastupdatedtime}</h2>
                        </Row>
                        <Row>
                            <Col xs="12" sm="6" md="6" lg="3">
                                <Card body outline color="primary" className=" shadow m-3 bg-white rounded" >
                                    <h4><CardTitle className="text-primary font-weight-bold">Confirmed &nbsp;&nbsp;<Badge color="primary">{this.state.total.deltaconfirmed}</Badge></CardTitle></h4>
                                    <h4> <CardText className="text-primary font-weight-bold">{this.state.total.confirmed}</CardText></h4>
                                </Card>
                            </Col>
                            <Col xs="12" sm="6" md="6" lg="3">
                                <Card body outline color="warning" className=" shadow m-3 bg-white rounded">
                                    <h4><CardTitle className="text-warning font-weight-bold">Active &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</CardTitle></h4>
                                    <h4> <CardText className="text-warning font-weight-bold">{this.state.total.active}</CardText></h4>
                                </Card>
                            </Col>
                            <Col xs="12" sm="6" md="6" lg="3">
                                <Card body outline color="success" className=" shadow m-3 bg-white rounded">
                                    <h4><CardTitle className="text-success font-weight-bold">Recovered &nbsp;&nbsp;&nbsp;&nbsp;<Badge color="success">{this.state.total.deltarecovered}</Badge></CardTitle></h4>
                                    <h4> <CardText className="text-success font-weight-bold">{this.state.total.recovered}</CardText></h4>
                                </Card>
                            </Col>
                            <Col xs="12" sm="6" md="6" lg="3">
                                <Card body outline color="danger" className=" shadow m-3 bg-white rounded">
                                    <h4> <CardTitle className="text-danger font-weight-bold">Deaths &nbsp;&nbsp;<Badge color="danger">{this.state.total.deltadeaths}</Badge></CardTitle></h4>
                                    <h4>  <CardText className="text-danger font-weight-bold">{this.state.total.deaths}</CardText></h4>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                }
            </Container>
        );
    }
};
export default Country;