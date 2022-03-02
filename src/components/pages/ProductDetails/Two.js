import React from "react";
import { Button, Image } from 'react-bootstrap'

const Two = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="row">
          

          <div className="col-md-6">
            <Image
              className="w-100"
              src={require("../../asset/Group 8177.png")}
            />
          </div>
          <div className="col-md-6">
            <h3 className="title">
              Quality management system QMS software solution
            </h3>
            <p className="text2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
              ipsum proin sagittis consectetur nisi at dolor. Pharetra maecenas
              est nibh egestas vitae malesuada tempor nam. Natoque enim, in
              molestie nisl. Mauris diam volutpat urna sed luctus sem a
              consequat... <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
              ipsum proin sagittis consectetur nisi at dolor...
            </p>

            <Button className="nav-btn">Read More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Two;
