import React from "react"
import "./Resume.css"
import ResumeApi from "./ResumeApi"
import Card from "./Card"
import { AiOutlineDownload } from "react-icons/ai";
// import pdf from "../../assets/NatanBarelResume.pdf";

const Resume = () => {
  return (
    <div className='resume'>
      <div className='resume-container'>
        <a
          className="btn"
          href={'pdf'}
          target="_blank"
        >
          <AiOutlineDownload />
          &nbsp; Download CV
        </a>
        <div className='content-section'>
          <div className='resume-info'>
            <div className='resume-info-header'>
              <h1>Education Quality</h1>
            </div>
            <div className='content'>
              {ResumeApi.filter((val) => val.category === "education").map((val, index) => {
                return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} list={val.list} />
              })}
            </div>
          </div>
          <div className='resume-info'>
            <div className='resume-info-header'>
              <h1>Job Experience</h1>
            </div>
            <div className='content'>
              {ResumeApi.filter((val) => val.category === "experience").map((val, index) => {
                return <Card key={index} role={val.role} description={val.description} title={val.title} year={val.year} rate={val.rate} desc={val.desc} list={val.list} />
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
