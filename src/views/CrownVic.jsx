import React, { useState } from "react";
import MaterialTable from "material-table";
import vic from "../assets/images/crownvic.png";
const CrownVic = () => {
  const [tab, setTab] = useState(0);
  const onHoverEnlarge = (scale) => (e) =>
    (e.target.style.transform = `scale(${scale})`);
  return (
    <>
      <div
        className="border container-fluid py-3"
        style={{ height: "500px", width: "720px", position: "relative" }}
      >
        <div
          className="border"
          style={{
            height: "90%",
            width: "90%",
            top: "5%",
            left: "5%",
            position: "absolute",
          }}
        >
          <img src={vic} alt="" width="100%" />
        </div>
        <div
          className="border rounded p-1"
          style={{
            height: "21%",
            width: "30%",
            top: "7%",
            right: "14%",
            position: "absolute",
          }}
        >
          Engine: Ford 4.6 2v (stock) <br />
          250 BHP <br />
          Comp Cam <br />
          High Compression Pistons
        </div>
        <div
          className="border rounded p-1"
          style={{
            height: "7%",
            width: "30%",
            top: "63%",
            left: "15%",
            position: "absolute",
          }}
        >
          Tires: 285 falcon punch tires
        </div>
        <div
          className="border rounded p-1 text-center"
          style={{
            height: "6%",
            width: "20%",
            top: "36%",
            right: "7%",
            position: "absolute",
          }}
        >
          Fireglass hood
        </div>
        <div
          className="border rounded p-1 text-center"
          style={{
            height: "7%",
            width: "80%",
            top: "75%",
            left: "10%",
            position: "absolute",
          }}
        >
          Weight reduction: 3500 LBS (wet)
        </div>
        <div
          className="border rounded p-1 text-center"
          style={{
            height: "6%",
            width: "30%",
            top: "25%",
            left: "10%",
            position: "absolute",
          }}
        >
          Final Drive: Ford 8.8 4.56
        </div>
        <div
          className="border rounded p-1 text-center text-dark"
          style={{
            height: "10%",
            width: "50%",
            top: "2%",
            left: "2%",
            backgroundColor: "rgba(255,255,255,1)",
            position: "absolute",
          }}
        >
          <h2>AutoVittoriane</h2>
        </div>
      </div>
      <div
        className="border container-fluid mt-2 text-dark"
        style={{
          height: "auto",
          width: "720px",
          position: "relative",
          backgroundColor: "white",
        }}
      >
        <div className="row">
          <div
            className={`col-3 text-center `}
            style={
              tab === 0
                ? { backgroundColor: "rgba(255,200,200,1)" }
                : { backgroundColor: "rgba(255,255,255,1)", cursor: "pointer" }
            }
            onClick={() => setTab(0)}
          >
            Costs/Parts
          </div>
          <div
            className={`col-3 text-center `}
            style={
              tab === 1
                ? { backgroundColor: "rgba(255,200,200,1)" }
                : { backgroundColor: "rgba(255,255,255,1)", cursor: "pointer" }
            }
            onClick={() => setTab(1)}
          >
            Plans
          </div>
          <div
            className={`col-3 text-center `}
            style={
              tab === 2
                ? { backgroundColor: "rgba(255,200,200,1)" }
                : { backgroundColor: "rgba(255,255,255,1)", cursor: "pointer" }
            }
            onClick={() => setTab(2)}
          >
            Pictures
          </div>
          <div
            className={`col-3 text-center `}
            style={
              tab === 3
                ? { backgroundColor: "rgba(255,200,200,1)" }
                : { backgroundColor: "rgba(255,255,255,1)", cursor: "pointer" }
            }
            onClick={() => setTab(3)}
          >
            Videos
          </div>
        </div>
        <div
          className="row"
          style={tab === 0 ? { display: "inherit" } : { display: "none" }}
        >
          <div className="col-12 p-4">
            <MaterialTable
              columns={[
                {
                  title: "image",
                  field: "image",
                  render: (rowData) => (
                    <img
                      src={rowData.image}
                      style={{ zIndex: 3000 }}
                      alt=""
                      height="48"
                      onMouseOver={onHoverEnlarge(10)}
                      onMouseOut={onHoverEnlarge(1)}
                    />
                  ),
                },
                { title: "Weight(lbs)", field: "weight", type: "numeric" },
                { title: "Cost", field: "cost", type: "currency" },
                { title: "Serial", field: "serial" },
                { title: "Brand", field: "brand" },
                { title: "Description", field: "description" },
                { title: "Comment", field: "comment" },
              ]}
              data={[
                {
                  cost: 999.99,
                  serial: "xkcd1043",
                  brand: "summit racing",
                  weight: 5.47,
                  description: "high compression pistons",
                  comment: "a special note goes here",
                  image: "https://i.imgur.com/tRdIZMf.jpg",
                },
              ]}
              title="Build Breakdown"
            />
          </div>
        </div>
        <div
          className="row"
          style={tab === 1 ? { display: "inherit" } : { display: "none" }}
        >
          b
        </div>
        <div
          className="row"
          style={tab === 2 ? { display: "inherit" } : { display: "none" }}
        >
          c
        </div>
        <div
          className="row"
          style={tab === 3 ? { display: "inherit" } : { display: "none" }}
        >
          d
        </div>
      </div>
    </>
  );
};

export default CrownVic;
