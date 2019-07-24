import React from "react";
import {
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBMask
} from "mdbreact";

export default function PageNotice() {
  return (
    <MDBCol lg="2" md="12" className="mb-lg-0 mb-3">
      <MDBView className="overlay rounded z-depth-1" waves>
        <img
          src="https://cdn.urgente24.com/sites/default/files/2019-07/ave.jpg"
          alt=""
          className="img-fluid"
        />
        <a href="#!">
          <MDBMask overlay="white-slight" />
        </a>
      </MDBView>
      <MDBCardBody className="pb-0">
        <h6 className="font-weight-bold my-1">
          Mercado en tensión: en medio de las estrategias para controlar el
          dólar, bajó fuerte la Bolsa - infobae
        </h6>
        <p className="grey-text">
          El consorcio europeo reveló el llamado proyecto 'Ave de presa' con el
          que busca aviones más económicos, seguros y de buena relación con el
          medio ambiente. Volarían con motores híbridos.
        </p>
        <MDBBtn color="indigo" size="sm">
          <MDBIcon far icon="clone" className="left" /> Urgente24.com
        </MDBBtn>
        <hr />
      </MDBCardBody>
    </MDBCol>
  );
}
