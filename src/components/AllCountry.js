import React from 'react';
import { Table, Badge } from 'reactstrap';

const AllCountry = ({ CountryData }) => {
  const rows = CountryData.map((country) => {
    return (
      <tr key={country.country}>
        <td>{country.country}</td>
        {/* <td>{country.cases}</td> */}
        <td>
          {country.active}
          <br />
          <Badge className='.todayData' pill color='danger'>
            &#8593; {country.todayCases}
          </Badge>
        </td>
        <td>{country.recovered}</td>
        <td>{country.deaths}</td>
      </tr>
    );
  });
  return (
    <Table
      className='table'
      responsive
      size={window.innerWidth <= 576 ? 'sm' : ''}
    >
      <thead>
        <tr>
          <th style={{ width: '20%' }}>
            {window.innerWidth <= 769
              ? window.innerWidth <= 576
                ? 'CN'
                : 'CONTRY'
              : 'Country Name'}
          </th>
          {/* <th style={{ width: '20%' }}>
            {window.innerWidth <= 769
              ? window.innerWidth <= 576
                ? 'Cfd'
                : 'Cnfmd'
              : 'Confirmed'}
          </th> */}
          <th style={{ width: '20%' }}>
            {window.innerWidth <= 769
              ? window.innerWidth <= 576
                ? 'AT'
                : 'ATV'
              : 'Active'}
          </th>
          <th style={{ width: '20%' }}>
            {window.innerWidth <= 769
              ? window.innerWidth <= 576
                ? 'RCD'
                : 'RECVD'
              : 'Recovered'}
          </th>
          <th style={{ width: '20%' }}>
            {window.innerWidth <= 769
              ? window.innerWidth <= 576
                ? 'D'
                : 'DTH'
              : 'Deaths'}
          </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default AllCountry;
