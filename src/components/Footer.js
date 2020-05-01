import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-dark text-light p-2 text-center'>
      <p>
        Developed by: <a href='https://github.com/milindneema'>Milind Neema</a>
      </p>
      <p>
        Contact information:
        <a href='https://www.instagram.com/milind_neema/'>
          <span
            className='fab fa-instagram p-1'
            style={{ fontSize: '30px', color: 'lightblue' }}
          ></span>
        </a>
        <a href='https://github.com/milindneema'>
          <span
            className='fab fa-github p-1'
            style={{ fontSize: '30px', color: 'lightblue' }}
          ></span>
        </a>
        <a href='https://www.linkedin.com/in/milind-neema-214ab3131/'>
          <span
            className='fab fa-linkedin p-1'
            style={{ fontSize: '30px', color: 'lightblue' }}
          ></span>
        </a>
        <a href='mailto:milindneema15@gmail.com'>
          <span
            className='fas fa-envelope p-1'
            style={{ fontSize: '30px', color: 'lightblue' }}
          ></span>
        </a>
      </p>
    </footer>
  );
};
export default Footer;
