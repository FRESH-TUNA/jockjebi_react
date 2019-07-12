
import React from 'react';
import logo from '../img/logo.png';

import one from '../img/1.jpg';
import two from '../img/2.gif';
import three from '../img/2.jpg';

function App() {
    return (
        <div>
        <div style={{height:'600px', textAlign:'center', backgroundImage: 'URL(http://ww1.sinaimg.cn/large/006tNc79gy1g4fxoimyeij30p00e6jrl.jpg)', backgroundSize: 'cover'}}>
            <div style={{fontSize:'3em', paddingTop:'80px', color:'white'}}><b style={{fontSize:'1em', color:"#fce054"}}>클릭 한 번</b>으로!
            </div>
            <div style={{fontSize:'3em', paddingBottom:'20px', color:'white'}}>쉽고 빠르게 시험 대비하기</div>
            <div id="hello"
                style={{borderRadius: '0.5em', boxShadow: '0 10px 5px #292f64', backgroundColor:'white', height:'200px', width:'500px', display: 'inline-block'}}>
                <div className="input-field">
                    <div style={{paddingBottom: '10px',  paddingTop: '10px'}}>
                        <div style={{float: 'left', fontSize: '24px'}}><b></b></div>
                        <input placeholder="🔍 과목명, 교수명으로 검색" style={{width:'400px', borderBottom: '2px solid #8a7afa'}}
                               type="text"/>
                    </div>
                    <div className="needpad" style={{paddingTop:'20px'}}>
                        <button class="searchBeginButton"
                               style={{borderRadius:'10px', width:'200px', height:'50px', fontSize: '18px', color:'white', backgroundColor: '#d0c9fd'}}>
                            <b>족보 검색하기</b>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div id="image">
            <div className="gif">
                <div>
                    <img src={one}/>
                </div>
                <div>
                    <img style={{borderStyle: 'solid', borderColor: '#f5c453'}} src={two}/>
                </div>
                <div>
                    <img src={three}/>
                </div>
            </div>
        </div>

        <style jsx>{`
        .outine-2 {
            border: 2px solid white;
        }
    
        .card--flex-toolbar {
            margin-top: -124px;
        }
    
        .learn-more-btn {
            text-transform: initial;
            text-decoration: underline;
        }
    
        .input-field {
            padding-top: 30px;
            display: inline-block;
            width: 400px;
            outline: none;
            font-size: 18px;
        }
    
        #image {
            background-image: url("../assets/3.jpg");
            background-color: #ebebeb;
            background-size: 100% 42.7%;
    
        }
    
        body {
            background-color: #ebebeb;
        }
    
        #wrapper {
            width: 960px;
            margin: 0 auto;
            /*border-style:solid;*/
        }
    
        .gif {
            text-align: center;
        }
    
        .gif img {
            width: 960px;
        }
    
        @media screen and (max-width: 960px) {
            .gif img {
                width: 100%;
            }
        }
    
        input[type="text"], input[type="password"], textarea, select {
            outline: none;
        }
        `}</style>
    </div>
    );
}

export default App;