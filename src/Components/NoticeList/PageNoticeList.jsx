import React from "react";
import { MDBRow } from "mdbreact";
import Notice from "../Notice";

const ProjectsPage = ({ listnotices }) => {
  return (
    <section className="text-center my-3 p-2">
      <MDBRow className="text-center">
        {listnotices.map((notice, id) => {
          return <Notice notice={notice} key={id} />;
        })}
      </MDBRow>
    </section>
  );
};

export default ProjectsPage;
