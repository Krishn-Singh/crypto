import React from 'react'
import { Button, FormControl, MenuItem, Select } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined"
import { useState } from 'react';
import { Share, ShareLocation } from '@mui/icons-material';

const Rightbar = () => {
  const [selectedValue, setSelectedValue] = useState(10);
  const [selectValue, setSelectValue] = useState(10);
  return (
    <div style={{color: "#eee", background: "black"}}>
    <div
        style={{
          display: "grid",
          gridColumnGap: "10px",
          gridTemplateColumns: "repeat(2, auto)",
          justifyContent: "space-evenly",
          color: "#eee",
          margin: "10px 0 20px"
        }}
      >
        <FormControl   >
          <Select style={{color:'white', backgroundColor:'blue'}}
            value={selectedValue}
            label="CryptoCurrency"
            onChange={(e) => {
              setSelectedValue(e.target.value);
            }}
          >
            <MenuItem value={10}>
              <div style={{ display: "flex", alignItems: "center",width:"10%" }}>
                <AccountBalanceWalletIcon />
                <div style={{ paddingLeft: "0px" }}>Avalanche</div>
              </div>
            </MenuItem>

            <MenuItem value={20}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <AccountBalanceWalletIcon />
                <div style={{ paddingLeft: "0px" }}>Dog coin</div>
              </div>
            </MenuItem>

            <MenuItem value={20}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <AccountBalanceWalletIcon />
                <div style={{ paddingLeft: "0px" }}>Etherum</div>
              </div>
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl  >
          <Select
          style={{color:'white', backgroundColor:'grey'}}
            value={selectValue}
            label="CryptoCurrency"
            onChange={(e) => {
              setSelectValue(e.target.value);
            }}
          >
            <MenuItem value={10}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <AccountBalanceWalletIcon />
                <div style={{ paddingLeft: "10px" }}>0FX1...353</div>
              </div>
            </MenuItem>

            <MenuItem value={20}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <AccountBalanceWalletIcon />
                <div style={{ paddingLeft: "10px" }}>AFD...353</div>
              </div>
            </MenuItem>

            <MenuItem value={30}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <AccountBalanceWalletIcon />
                <div style={{ paddingLeft: "10px" }}>ACG1...353</div>
              </div>
            </MenuItem>
          </Select>
        </FormControl>
      </div>
        <div style={{ display: "flex", alignItems: "center", bgColor: "yellow", marginLeft:'15px' }}>
          <ArrowBackOutlinedIcon size="small" />
          <h4 style={{marginLeft: "10px"}}>Custom Link</h4>
        </div>
      
      <div style={{margin:"20px"}}>
          <p style={{fontSize: "16px", marginBottom:'10px'}}>www.test.com</p>
          <div style={{marginTop: "10px", background: "#aaa", color: "#fff", borderRadius: "10px", padding: "10px"}}>Enter
            <input style={{display: "none", outline: 0, border: 0}} type="text" placeholder="Enter" />
          </div>
        </div>
        <div style={{display: "grid",
          gridColumnGap: "10px",
          gridTemplateColumns: "repeat(2, auto)",
          justifyContent: "space-evenly", margin:"20px 10px 10px"}}>
          
          <Button variant="contained"><Share /> Custom Link</Button>
          <Button variant="outlined">Cancel</Button>
        </div>
    </div>
  )
}

export default Rightbar