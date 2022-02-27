import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'

const SubNavbar = () => {

  const [search, setSearch] = useState(false)

  useEffect(() => {
    let prev = window.pageYOffset
    window.onscroll = () => {
      if(window.innerWidth <= 550){
        let current = window.pageYOffset
        if (current < prev) {
          document.getElementById("sub-navbar").style.bottom = "10px"
        }
        else {
          document.getElementById("sub-navbar").style.bottom = "-50px"
        }
        prev = current
      }
    }
  },[])

  return (
    <React.Fragment>
    <div className="sub-navbar" id="sub-navbar">
      <div className="d-flex w-100 h-100 align-items-center">
        <i className="fas fa-home" style={{ color: "white", fontSize: "18px", width: "33%" , textAlign: "center"}}></i>
        {
          search ? (
            <i className="fas fa-times" onClick={() => setSearch(!search)} style={{ color: "white", fontSize: "18px", width: "33%" , textAlign: "center"}}></i>
          ):(
              <i className="fas fa-search" onClick={() => setSearch(!search)} style={{ color: "white", fontSize: "18px", width: "33%" , textAlign: "center"}}></i>
          )
        }
        
        <i className="fas fa-user-circle" style={{ color: "white", fontSize: "18px", width: "33%" , textAlign: "center"}}></i>
      </div>
    </div>
    <SearchBar  active={search}/>
    </React.Fragment>
  )
}

export default SubNavbar