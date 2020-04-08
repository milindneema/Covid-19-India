import React, { Component } from 'react';
import { Card, CardTitle, CardText, Badge, Progress, Container, Row, Col } from 'reactstrap';

class States extends Component {
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
        this.setState({ total: data, loading: false })
    }
    render() {

        return (
            <Container fluid={true} className="m-2 mb-5 d-flex justify-content-center" >
                <Row>
                    {this.state.loading ? <div>Loading</div> : this.state.total.statewise.map((state) => {
                        if (state.state !== "Total") {
                            const activePercent = (state.active / state.confirmed) * 100;
                            const recoveredPercent = (state.recovered / state.confirmed) * 100;
                            const deathsPercent = (state.deaths / state.confirmed) * 100;
                            return (
                                <Col xs="12" sm="12" md="6" lg="4">
                                    <Card body outline color="primary" className="shadow m-3 bg-white rounded" >
                                        <CardTitle className="text-primary font-weight-bold"><h4>{state.state} &nbsp;&nbsp;<Badge color="primary">{state.deltaconfirmed}</Badge></h4></CardTitle>
                                        <CardText>
                                            <div>
                                                <div className="text-center font-weight-bold">confirmed : {state.confirmed}</div>
                                                <Progress Style="height: 22px; color:text-dark;" value={100}>100%</Progress>
                                                <div className="text-center font-weight-bold">Recovered : {state.recovered}</div>
                                                <Progress Style="height: 22px;" color="success" value={recoveredPercent ? recoveredPercent : 0}>{recoveredPercent ? recoveredPercent.toFixed(1) : 0}%</Progress>
                                                <div className="text-center font-weight-bold">Active : {state.active}</div>
                                                <Progress Style="height: 22px;" color="warning" value={activePercent ? activePercent : 0}>{activePercent ? activePercent.toFixed(1) : 0}%</Progress>
                                                <div className="text-center font-weight-bold">Deaths : {state.deaths}</div>
                                                <Progress Style="height: 22px;" color="danger" value={deathsPercent ? deathsPercent : 0}>{deathsPercent ? deathsPercent.toFixed(1) : 0}%</Progress>
                                            </div>
                                        </CardText>
                                    </Card>
                                </Col>
                            )
                        }
                        else {
                            return (
                                <div></div>
                            )
                        }
                    })}
                </Row>
            </Container>
        );
    }
};
export default States;