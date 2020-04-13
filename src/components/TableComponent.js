import React, { Component } from 'react';
import { Table, Spinner, Badge } from 'reactstrap';


class TableContaint extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            district: null,
        }
    }

    async componentDidMount() {
        if (this.props.stateDistrict === null) {
            this.setState({ loading: false })
        } else {
            const response = await fetch('https://api.covid19india.org/v2/state_district_wise.json');
            const data = await response.json();
            const state = data.filter(states => this.props.stateDistrict === states.state)[0];
            var obj = state.districtData;
            obj.sort((a, b) => b.confirmed - a.confirmed);
            this.setState({ district: state, loading: false })
        }

    }
    render() {
        return (
            <div>
                {this.state.loading ? <div className="d-flex justify-content-center">
                    <Spinner color="primary" style={{ width: '5rem', height: '5rem' }} />
                </div> : this.state.district !== null && this.state.district !== undefined ?
                        <Table size="sm" responsive borderless>
                            <thead>
                                <tr >
                                    <th><h4><Badge color="dark">#</Badge></h4></th>
                                    <th><h4><Badge color="dark">District</Badge></h4></th>
                                    <th><h4><Badge color="dark">Confirmed</Badge></h4></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.district.districtData.map((districtData, index) => {
                                    return (
                                        <tr key={index}>
                                            <td ><h5><Badge color="secondary" >{index + 1}</Badge></h5></td>
                                            <td ><h5><Badge color="secondary">{districtData.district}</Badge></h5></td>
                                            <td><h5><Badge color="secondary">{districtData.confirmed}</Badge></h5></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table> : <div></div>
                }
            </div >
        )
    }
}

export default TableContaint;