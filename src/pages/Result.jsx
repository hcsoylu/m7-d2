import React, { Component } from "react";
import Job from "../components/Job";
import { ListGroup } from "react-bootstrap";

const Result = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.jobs.length === 0 && (
          <p className="mt-5">sorry we could not find any job... </p>
        )}
        {props.jobs.map((job) => (
          <div className="col-12 mb-3">
            <ListGroup>
              <Job key={job.id} job={job} />
            </ListGroup>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
