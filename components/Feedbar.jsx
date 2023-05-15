import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ClearOutlined, Share } from "@mui/icons-material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Button } from "@mui/material";

const Feedbar = () => {
  const [apidata, setapidata] = useState([]);
  const callapi = async () => {
    const resp = await fetch(
      `https://raw.githubusercontent.com/akshita151199/APIs/main/data`
    ).then((res) => res.json());
    setapidata(resp.data);
  };
  console.log(apidata);
  useEffect(() => {
    callapi();
  }, []);

  const data = [
    {
      img: "https://raw.githubusercontent.com/akshita151199/APIs/main/btc.png",
      title: "12.5% of free",
      reftext: "Your referral Link for xyz",
      reflink: "www.google.com",
    },
    {
      img: "https://raw.githubusercontent.com/akshita151199/APIs/main/btc.png",
      title: "12.5% of free",
      reftext: "Your referral Link for xyz",
      reflink: "www.google.com",
    },
  ];

  return (
    <>
    <div style={{paddingLeft:'10px', paddingRight:'20px',borderLeft:'1px solid grey', borderRight:'1px solid grey'}}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          padding: "10px",

        }}
      >
        <div style={{color:'white', fontSize:'bold'}}>Section<hr style={{width:'40px'}}/></div>
        <div
          style={{
            backgroundColor: "#191B20",
            display: "grid",
            alignItems:'center',
            textAlign:"center",
            gridTemplateColumns: "20%  55% 25%",
            padding: "4px",
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            color: "white",
            borderRadius: "40px",
            width: "40%",
          }}
        >
          <Image
            src="https://raw.githubusercontent.com/akshita151199/APIs/main/avax.png"
            height={10}
            width={10}
            alt="image"
          />
          <span>0.2 xyz</span>
          <Button
            sx={{
              backgroundColor: "#ABE8FF",
              width: "90px",
              borderRadius: "10px",
            }}
          >
            Tier1
          </Button>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "70% 10%",
          backgroundColor: "#ABE8FF",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
          borderRadius: "15px",
          padding: "5px",
          marginBottom: "10px",
        }}
      >
        <div style={{ padding: "10px", paddingLeft: "10px", color: "#4B5681" }}>
          Lorem Ipsum is simply dummy text of the printing and <br/>
          <Button
          variant="contained"
            sx={{
              backgroundColor:'white',
              color:'black'
            }}
          >
            Tutorial
          </Button>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "60% 30%",
          backgroundColor: "#191B20",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
          borderRadius: "15px",
          padding: "5px",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            padding: "20px",
            color: "white",
          }}
        >
          <h1>Your rewards</h1>
          <p style={{ fontSize: "30px",color: "white" }}>$0.26231428</p>
          <div>
            <button
              style={{color: "white",
                backgroundColor: "#353945",
                width: "15%",
                borderRadius: "10px",
                fontSize: "13px",
              }}
            >
              $40 AVAX
            </button>
            <button
              style={{
                backgroundColor: "#353945",
                width: "15%",
                borderRadius: "10px",
                marginLeft: "10px",
                fontSize: "13px ",
                color: "white",
              }}
            >
              $10 BNB
            </button>
            <button
              style={{
                backgroundColor: "#353945",
                width: "15%",
                borderRadius: "10px",
                marginLeft: "10px",
                fontSize: "13px",
                color: "white",
              }}
            >
              $210 BTC
            </button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              backgroundColor: "#3772FF",
              width: "100%",
              padding: "10px",
              borderRadius: "10px",
              justifyContent: "center",
              display:"flex",
              alignItems:'center'            }}
          >
           <Share/> Custom Link
          </button>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",

          boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
          borderRadius: "15px",
          padding: "5px",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {data.map((item) => (
          <div
            key={Math.random()}
            style={{
              backgroundColor: "#191B20",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
              borderRadius: "15px",
              padding: "10px",
              color: "white",
            }}
          >
            <div style={{ display: "flex", gap: "10px",color: "white", }}>
              <Image src={item.img} height={10} width={10} alt="image" />
              <span style={{ fontWeight: "500",color: "white", }}> {item.title} </span>
            </div>
            <div>
              <span style={{ color: "#585964" }}> {item.reftext}</span>
              <div
                style={{
                  backgroundColor: "#242731",
                  borderRadius: "10px",
                  display: "grid",
                  gridTemplateColumns: "80% 20%",
                  padding: "10px",
                  width: "90%",
                  margin: "10px",
                  color: "white",
                }}
              >
                <span>{item.reflink}</span>
                <span>
                  <button><ContentCopyIcon/></button>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          color: "white",
          fontWeight: "500",
          marginBottom: "25px",
        }}
      >
        <div>
          First Tab
          <hr style={{ border: "1px solid #3064DF" }} />{" "}
        </div>
        <div>Second Tab</div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          backgroundColor: "#191B20",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
          borderRadius: "15px",
          padding: "5px",
          gap: "20px",
          marginBottom: "20px",
          justifyContent: "CENTER",
          alignItems: "Center",
          color: "#585964",
        }}
      >
        <div style={{ textAlign: "center" }}>ASSET</div>
        <div style={{ textAlign: "center" }}>AMOUNT</div>
        <div style={{ textAlign: "center" }}>USER ACCOUNT</div>
        <div style={{ textAlign: "center" }}>REFERRAL EARNIG</div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          backgroundColor: "#191B20",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
          borderRadius: "15px",
          padding: "5px",
          gap: "20px",
          marginBottom: "20px",
          justifyContent: "CENTER",
          alignItems: "Center",
          color: "#fff",
        }}
      >
        {apidata.map((item) => {
          return (
            <>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    textAlign: "center",
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                  }}
                >
                  <Image src={item.img} height={10} width={10} alt="image" />
                  <span>{item.asset}</span>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ color: "#585964" }}>{item.type}</div>
                  <div
                    style={{
                      textAlign: "center",
                      justifyItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      gap: "10px",
                      justifyContent: "center",
                      fontSize: "10px",
                      backgroundColor: "#353945",
                      borderRadius: "10px",
                      color: "#fff",
                    }}
                  >
                    <Image
                      src={item.chain.img}
                      width={10}
                      height={10}
                      alt="image"
                    />
                    <div
                      style={{
                        textAlign: "center",
                        position: "relative",
                        top: "5px",
                        left: "-5px",
                      }}
                    >
                      {item.chain.name}
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <p>{item.amount}BNB</p>
                <p style={{ color: "#585964" }}>{item.state}</p>
              </div>
              <div style={{ textAlign: "center" }}>{item.user}</div>
              <div style={{ textAlign: "center" }}>
                {item.referral_earnings}
              </div>
            </>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Feedbar;
