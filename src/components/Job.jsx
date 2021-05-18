import React from "react";
import { ListGroup } from "react-bootstrap";

export default function Job({ job }) {
  return (
    <ListGroup.Item className="d-flex flex-column mt-3">
      <div className="d-flex justify-content-between">
        <p style={{ textTransform: "uppercase", fontWeight: "500" }}>
          {job.company}
        </p>
        <img
          src={job.company_logo}
          alt=""
          style={{ height: "60px", width: "60px" }}
        />
      </div>

      <div dangerouslySetInnerHTML={{ __html: job.description }} />
    </ListGroup.Item>
  );
}
