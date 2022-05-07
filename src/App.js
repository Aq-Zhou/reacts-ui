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
    padding: 10px 24px;
    line-height: 36px;
    z-index: 1;

    .sidebar-home {

      > img {
        display: inline-block;
        vertical-align: top;
      }

      > span {
        display: inline-block;
        margin-left: 6px;
        line-height: 36px;
        position: relative;
      }
    }

    .navlinks {
      padding-left: 5px;
      box-sizing: border-box;
      white-space: nowrap;
      position: absolute;
      display: flex;
      right: 30px;
      top: 12px;
    }


  }
`


const Home = () => {
    return (
        <Table>
            <header className="navbar">
                <a href="/reacts-ui/" style={{textDecoration: "none"}} className="sidebar-home">
                    <img src={logo} alt=""/>
                    <span style={{fontSize: "27px", fontWeight: 600, color: "#61dafb"}}>Reacts-UI</span>
                </a>
                <div className="links">
                    <div className="search"></div>
                    <nav className="navlinks">
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
                    <img src={log} alt="" style={{height: "280px", width: "280px"}}/>
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