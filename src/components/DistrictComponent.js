import React, { Component } from 'react';
import {
  Table,
  Spinner,
  Badge,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';

class DistrictData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      district: null,
    };
  }

  async componentDidMount() {
    const response = await fetch('https://api.covid19india.org/v2/state_district_wise.json');

    const data = await response.json();

    const state = data.filter((states) => this.props.stateDistrict === states.state)[0];
    if (state === null || state === undefined) {
      this.setState({ loading: false });
      return null
    }
    else {
      var obj = state.districtData;
      obj.sort((a, b) => b.confirmed - a.confirmed);
      this.setState({ district: state, loading: false });
      return null
    }

  }

  size = window.innerWidth <= 769 ? 'sm' : 'lg';
  style = window.innerWidth <= 769 ? { width: '80%', left: '8%' } : { width: '75%' };


  render() {
    return (
      <div>
        {this.state.loading ? (
          <div className='d-flex justify-content-center'>
            <Spinner
              color='primary'
              style={{ width: '5rem', height: '5rem' }}
            />
          </div>
        ) : this.state.district !== null &&
          this.state.district !== undefined ? (
          <Modal
            isOpen={this.props.modal}
            toggle={this.props.toggle()}
            size={this.size}
            style={this.style}
            centered
          >
            <ModalHeader>
              District Wise Data
            </ModalHeader>
            <ModalBody style={{ padding: '0.1rem' }}>
              <Table size='sm' responsive borderless>
                <thead>
                  <tr>
                    <th>
                      <h4>
                        <Badge color='dark'>District</Badge>
                      </h4>
                    </th>
                    <th>
                      <h4>
                        <Badge color='dark'>
                          {window.innerWidth <= 769
                            ? window.innerWidth <= 375
                              ? 'Cfd'
                              : 'Cnfmd'
                            : 'Confirmed'}
                        </Badge>
                      </h4>
                    </th>
                    <th>
                      <h4>
                        <Badge color='dark'>Today</Badge>
                      </h4>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.district.districtData.map(
                    (districtData, index) => {
                      return (
                        <tr key={index}>
                          {this.tableData(districtData.district, 'secoundary')}
                          {this.tableData(districtData.confirmed, 'primary')}
                          {this.tableData(districtData.delta.confirmed, 'danger')}
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </Table>
            </ModalBody>
          </Modal>
        ) : (
          <div></div>
        )
        }
      </div>
    );
  }

  tableData(data, color) {
    return <td>
      <h5>
        <Badge color={color}>
          {data}
        </Badge>
      </h5>
    </td>;
  }
}

export default DistrictData;
