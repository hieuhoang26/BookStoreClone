import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App() {
  return (
    <MDBFooter style={{ backgroundColor: '#001524', marginTop: '80px' }} className='text-center text-lg-start text-muted ' >

      <section className='p-4'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section className='d-flex justify-content-center align-items-center mb-4' >
        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#3b5998' }}
          href='#!'
          role='button'
        >
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#55acee' }}
          href='#!'
          role='button'
        >
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#dd4b39' }}
          href='#!'
          role='button'
        >
          <MDBIcon fab icon='google' />
        </MDBBtn>
        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#ac2bac' }}
          href='#!'
          role='button'
        >
          <MDBIcon fab icon='instagram' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#0082ca' }}
          href='#!'
          role='button'
        >
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#333333' }}
          href='#!'
          role='button'
        >
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        {/* © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a> */}
      </div>
    </MDBFooter>
  );
}