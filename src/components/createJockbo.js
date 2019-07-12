import React from 'react';

function App() {
    return (
        <div id="wrapper">
          <div style={{backgroundColor: '#fafafa', height:'100vh'}}>
          <div style={{paddingUp: '50px', paddingLeft: '110px'}}>
            <div style={{padding: '20px 20px 20px 20px'}}><span  style={{fontSize: '1.5em'}}><b>족보 업로드</b></span><span style={{paddingRight:'450px'}}></span><span style={{paddingLeft:'40px', textAlign:'left', fontSize:'1.0em'}}>업로드가 처음이세요?</span></div><br/>
            <div className="text" style={{padding: '20px 20px 5px 20px'}}>
                <span style={{paddingRight: '40px'}}>
                    <label style={{paddingRight:'20px', fontSize:'1.3em'}} for="male"><b>과목</b></label>
                    <input style={{width:'275px', height:'25px'}} type="text"/>
                </span>
                <span>
                    <label style={{paddingRight:'20px', fontSize:'1.3em'}} for="male"><b>교수</b></label>
                    <input style={{width:'275px', height:'25px'}} type="text" />
                </span>
            </div>
            <div className="text" style={{padding: '5px 20px 20px 20px'}}>
                <span style={{paddingRight:'20px'}}>
                    <label style={{paddingRight: '20px', fontSize:'1.3em'}} for="male"><b>연도</b></label>
                    <input style={{width: '100px', height:'25px'}} type="text"/>
                </span>
                <span style={{paddingRight:'40px'}}>
                    <label style={{paddingRight: '23px', fontSize: '1.3em'}} for="male"><b>학기</b></label>
                    <input style={{width: '100px', height: '25px'}} type="text"/>
                </span>
                <span>
                    <label style={{paddingRight: '20px', fontSize: '1.3em'}} for="male"><b>분류</b></label>
                    <input style={{width: '100px', height: '25px'}} type="text"/>
                </span>
            </div>
            <span className="text" style={{padding: '20px 20px 20px 20px'}}>
                <label style={{paddingRight: '20px', fontSize:'1.3em'}} for="male"><b>파일</b></label>
                <input style={{width:'275px'}} type="file"/>
                {/* ref="file" onChange="handleFileUpload" */}
            </span>
            <span className="text">
                <label style={{paddingRight: '20px', paddingLeft: '20px', fontSize: '1.3em'}} for="male"><b>대학</b></label>
                <input style={{width:'275px',paddingLeft:'10px', height:'25px'}} type="text"/>
            </span>
        </div>
        <br/>
        <div style={{textAlign: 'center'}}>
            <div>
                <textarea style={{height: '300px', width: '700px', background:'white'}}>코멘트를 작성하세</textarea>
            </div>
        </div>
        <br/>
        <div style={{textAlign: 'center'}}>
            <button style={{fontSize: '17px', background: '#6A4CFF', borderColor: '#bababa', width:'140px', height:'40px', borderRadius:'13px', color: 'white'}} onclick="createJockbo"><b>제출하기</b></button>
            <span style={{paddingLeft:'20px'}}><button style={{fontSize:'17px', background:'#ffffff', borderColor: '#c5c5c5', borderStyle: 'solid', width:'140px', height:'40px', borderRadius: '13px', color: '#1d29da'}} onclick="createJockbo"><b>임시저장</b></button></span>
        </div>

        </div>
        <style jsx>{`
        .text {
            color:#626262;
        }
        body {
            margin: 0;
            font-family: verdana, sans-serif;
            font-size: 0.85em;
        }
        textarea {
            border:solid 1px #b2b2b2;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
    
        }
        input {
            background: white;
            border:solid 1px #b2b2b2;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 13px;
        }    
        #wrapper {
            padding-top:10px;
            width: 960px;
            margin: 0 auto;
            /*border-style:solid;*/
    
        }
        `}
        </style>
    </div>
    );
  }
  
  export default App;