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

function Main() {
    return(
        <div className="main_back">
            <Header/>
            <div className="main_content">
                <div className="icons">
                    <ul>
                        <li><FacebookOutlined /></li>
                        <li><InstagramOutlined /></li>
                        <li><LinkedinOutlined /></li>
                    </ul>
                </div>
                <div style={{textAlign: 'center'}}>
                    <h1>Bekzat Suleymanov</h1>
                    <h3>I am Full Stack Developer</h3>
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