import './App.css';
import React from "react";
import logo from './icons/logo.svg';
import log from './images/log.png';
import skip from './icons/skip.svg';
import styled from "styled-components";



const Table = styled.div`
  width: 100%;
  height: 100%;
  
  .navbar {
    box-sizing: border-box;
    border-bottom: 1px solid #eaecef;
    width: 100%;
    position: fixed;
    padding: 10px 12px;
    line-height: 32px;
    z-index: 1;
    a {
      background: red;
    }
  }
`


const Home = () => {
    return (
        <Table>
            <header className="navbar">
                <a href="/reacts-ui/" style={{textDecoration: "none"}}>
                    <img src={logo} alt=""/>
                    <span style={{fontSize: "23px", fontWeight: 600, color: "#282c34"}}>Reacts-UI</span>
                </a>
                <div className="links">
                    <div className="search"></div>
                    <nav>
                        <div>
                            <a href="">主页</a>
                        </div>
                        <div>
                            <a href="">
                                文档
                            </a>
                        </div>
                        <div>
                            <a href="">
                                Github
                            </a>
                            <img src={skip} alt=""/>
                        </div>
                    </nav>
                </div>
            </header>
            <aside>
            </aside>
            <main>
                <header>
                    <img src={log} alt="" style={{height:"280px", width:"280px"}}/>
                    <h1>Reacts-UI</h1>
                    <p>基于React的UI组件库</p>
                    <p className="action">
                        <a href="/reacts-ui/get-started/" className="getStart">快速开始</a>
                    </p>
                </header>
                <div className="features">

                </div>
                <footer>222</footer>
            </main>

        </Table>
    )
}

export default Home;