import React from 'react'
import Header from '../../compon/header'
import './style.css'
import {
    FacebookOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    PhoneOutlined,
    FormOutlined
  } from '@ant-design/icons';
import Typewriter from 'typewriter-effect'

function Main() {
    return(
        <div className="main_back">
            <Header/>
                      <div class="area" >
              <ul class="circles">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
              </ul>
          </div >
            <div className="main_content">
                <div className="icons">
                    <ul>
                        <li><FacebookOutlined /></li>
                        <li><InstagramOutlined /></li>
                        <li><LinkedinOutlined /></li>
                    </ul>
                </div>
                <div style={{textAlign: 'center'}} className="centerbox">
                    <h1><span style={{color: '#c70039'}}>Bekzat</span> <span style={{color: '#fff'}}>Suleymanov</span></h1>
                    <Typewriter
                        options={{
                            strings: ['<strong><span style="color: rgb(139, 138, 138);">I am <span style="color: #c70039;">Full Stack Developer</span></span></strong>', '<strong><span style="color: rgb(139, 138, 138);">I am <span style="color: #c70039;">Back End Developer</span></span></strong>', '<strong><span style="color: rgb(139, 138, 138);">I am <span style="color: #c70039;">Front End Developer</span></span></strong>'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    {/* <h3><span style={{color: '#fff'}}>I am</span> <span style={{color: 'red'}}>Full Stack Developer</span></h3> */}
                </div>
                <div className="icons">
                    <ul>
                        <li><PhoneOutlined /></li>
                        <li><FormOutlined /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Main;