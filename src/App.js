import './App.css';
import React from "react";
import logo from './icons/logo.svg';
import log from './images/log.png';
import skip from './icons/skip.svg';
import search from './icons/search.svg';
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

    .links {
      padding-left: 5px;
      box-sizing: border-box;
      white-space: nowrap;
      position: absolute;
      right: 30px;
      top: 12px;
      display: flex;

      .navlinks {
        text-decoration: none;
        display: inline-block;

        .nav-item:first-child {
          margin-left: 0;
        }

        .nav-item {
          text-decoration: none;
          position: relative;
          display: inline-block;
          margin-left: 16px;
          > a {
            color: black;
            text-decoration: none;
          }
          > img {
            width: 16px;
            height: 16px;
            margin-left: 2px;
            display: inline-block;
            vertical-align: middle;
            position: relative;
            top: -1px;
          }
        }
      }
    }
  }

  .main {
    padding: 3.6rem 2rem 0;
    max-width: 960px;
    margin: 0 auto;
    display: block;

    > header {
      text-align: center;
      
      .image-log {
        max-width: 100%;
        max-height: 280px;
        display: block;
        margin: 3rem auto 1.5rem;
      }

      .getStart {
        display: inline-block;
        font-size: 1.2rem;
        color: black;
        background-color: #61dafb;
        padding: 0.8rem 1.6rem;
        transition: background-color .1s ease;
        box-sizing: border-box;
        text-decoration: none;
      }

      .getStart:hover {
        background-color: #66ccff;
      }
    }

    .features {
      border-top: 1px solid #eaecef;
      padding: 1.2rem 0;
      margin-top: 2.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      align-content: stretch;
      justify-content: space-between;

      .feature {
        flex-grow: 1;
        flex-basis: 30%;
        max-width: 30%;

        > h2 {
          font-size: 1.4rem;
          font-weight: 500;
          border-bottom: none;
          padding-bottom: 0;
          color: #3a5169;
        }

        > p {
          line-height: 1.7;
          color: #3a5169;
          display: block;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
        }
      }
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
                    <div className="search">
                        {/*<input aria-label="Search" autoComplete="off" spellCheck="false"/>*/}
                    </div>
                    <nav className="navlinks">
                        <div className="nav-item">
                            <a href="">??????</a>
                        </div>
                        <div className="nav-item">
                            <a href="">
                                ??????
                            </a>
                        </div>
                        <div className="nav-item">
                            <a href="https://github.com/Aq-Zhou/reacts-ui/">
                                Github
                            </a>
                            <img src={skip} alt=""/>
                        </div>
                    </nav>
                </div>
            </header>
            <aside>
            </aside>
            <main aria-labelledby="main-title" className="main">
                <header>
                    <img className="image-log" src={log} alt=""/>
                    <h1 style={{
                        fontWeight: "620",
                        margin: "1.8rem auto",
                        fontSize: "2.8rem",
                        color: "#2c3e50"
                    }}>Reacts-UI</h1>
                    <p style={{
                        maxWidth: "35rem",
                        fontSize: "1.6rem",
                        lineHeight: "1.3",
                        color: "#6a8bad",
                        margin: "1.8rem auto"
                    }}>????????????React???UI?????????</p>
                    <p className="action" style={{
                        display: "block",
                        marginBlockStart: "1em",
                        marginBlockEnd: "1em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                        margin: "1.8rem auto",
                        lineHeight: "1.7"
                    }}>
                        <a href="/reacts-ui/get-started/" className="getStart">????????????</a>
                    </p>
                </header>
                <div className="features">
                    <div className="feature">
                        <h2>????????????</h2>
                        <p>?????????????????????????????????????????????????????????????????????</p>
                    </div>
                    <div className="feature">
                        <h2>?????????</h2>
                        <p>React ?????????????????? UI ??????????????????????????????????????????????????????????????????????????????????????????????????? UI</p>
                    </div>
                    <div className="feature">
                        <h2>?????????</h2>
                        <p>?????? TypeScript ????????????????????????????????????????????????????????????????????? React ??????</p>
                    </div>
                </div>
                <footer style={{
                    borderTop: "1px solid #eaecef",
                    padding: "1.8rem",
                    textAlign: "center",
                    color: "#4e6e8e"
                }}
                >
                    Please ??? Thank u. Copyright ?? 2022 Ivan-Z
                </footer>
            </main>

        </Table>
    )
}

export default Home;