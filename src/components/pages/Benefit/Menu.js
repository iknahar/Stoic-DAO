import React from 'react'

const Menu = () => {
  return (
    <div className="d-flex justify-content-between flex-wrap">
    
      <div className="benefit-div p-3 m-1 text-center">
        <img src={require("../../asset/Vector (2).png")} alt="" />
        <hr></hr>
        <h6>Ethereum Platform</h6>
      </div>
      <div className="benefit-div p-3 m-1 text-center">
        <img src={require("../../asset/Union (1).png")} alt="" />
        <hr></hr>
        <h6>TRANSPARENCY</h6>
      </div>
      <div className="benefit-div p-3 m-1 text-center">
        <img src={require("../../asset/Group (3).png")} alt="" />
        <hr></hr>
        <h6>COMPLIANCE</h6>
      </div>
      <div
            className="benefit-div p-3 m-1 text-center"
            style={{ backgroundColor: "#0A164B", color: "white" }}
          >
            <img src={require("../../asset/Vector (1).png")} alt="" />
            <p style={{ color: "#9683DE" }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit Leo ipsum
              aliquet turpis elit elit natoque varius eget facilisi. Amet
              rhoncus
            </p>
            <hr></hr>
            <h6>SMART MANAGEMENT</h6>
          </div>
</div>
  )
}

export default Menu