import React from "react";
import {
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBMask
} from "mdbreact";

export default function PageNotice({ notice }) {
  const { description, publishedAt, source, title, url, urlToImage } = notice;
  return (
    <MDBCol lg="3" md="12" className="mb-lg-0 mb-5">
      <MDBView className="overlay rounded z-depth-4" waves>
        <img
          src={urlToImage}
          alt="No imagen"
          className="img-fluid"
          width="400px"
        />
        <MDBMask overlay="white-slight" />
      </MDBView>

      <MDBCardBody className="pb-0">
        <h6 className="font-weight-bold my-1">{title}</h6>
        <h6 className="font-weight-bold my-1">
          Publicado:({publishedAt.split("T")[0]})
        </h6>
        <p className="grey-text">{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <MDBBtn color="indigo" size="sm">
            <MDBIcon far icon="clone" className="left" /> {source.name}
          </MDBBtn>
        </a>
        <hr />
      </MDBCardBody>
    </MDBCol>
  );
}
