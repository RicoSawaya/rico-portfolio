import "./pagesCSS/homePage.css"
import {Link} from "react-router-dom";


import headshot from './pictures/Hosp-91-renewed.png'
function HomePage(){
    const braceO = "{";
    const braceC = "}";

    return(
        <div className="home-page">
            <div className="cmd-grid">

                <div className="fake-license">
                    Ricosoft Panes [Version 10.0.26100.3194]
                </div>
                <div className="fake-license-desc">
                    (c) Ricosoft Corporation. All rights reserved.
                </div>
                <div>
                    C:\&gt; cd Users
                </div>
                <div>
                    C:\Users&gt; cd RicoS
                </div>
                <div>
                    C:\Users\RicoS&gt; Rodrigue (Rico) Sawaya
                </div>
                <div>
                    C:\Users\RicoS&gt; 6+ years of programming experience
                </div>
                <div>
                    C:\Users\RicoS&gt; Python, C, C++, MIPS, Arduino IDE, HTML, CSS, JavaScript, TypeScript, Oracle Apex, SQL
                </div>
                <div>
                    C:\Users\RicoS&gt; Student at San Diego State University
                </div>
                <div>
                    C:\Users\RicoS&gt; Studying Electrical Engineering and Business Administration
                </div>
                <div className="run-py">
                    C:\Users\RicoS&gt; AboutRico.py
                </div>
                <div className="pic-text-grid">

                    <div className="picture-grid">
                        <div>Rico's Baby Picture:</div>
                        <div className='headshot'><img className='headshot-src' src={headshot}></img></div>
                    </div>

                    <div className="picture-desc">
                        <div className="abt-init">About{braceO}</div>
                        <div className="list-desc">
                            <div className="list">1) Lifting weights has been my therapy ever since I could remember</div>  
                            <div className="list">2) Task oriented, I create a task-list every day and make sure I complete every task</div>  
                            <div className="list">3) Force myself into uncomfortable situations so I can learn</div>  
                            <div className="list">4) Fell in love with the process of improving and learning</div>  
                        </div>
                        <div className="abt-init">{braceC}</div>
                    </div>

                </div>
                <div>- Programming ever since I was 13 years old</div>
                <div>- Specialize in python and created multiple projects that I still use today</div>
                <div>- Only build <Link to='/projects' className="link" id="projects-plug">programs</Link> that boost productivity and efficiency across various activities </div>
                <div>- When I'm stuck on coding, I lift weights or box to clear my mind</div>
                <div>- Part of the Sigma Nu Fraternity at San Diego State University</div>
                    
            </div>




            <div className="python-grid">
                <div className="python-grid-func">
                    <div className="func-create">def run():</div>
                    <div className="hobbies-array">Hobbies = ['Programming','Lifting','Boxing']</div>
                    <div className="for-loop-hobby">for Hobby in Hobbies:</div>
                    <div className="print-hobby">print(Hobby)</div>
                    <div className="call-func">run()</div>
                </div>

                <div className="python-grid-dict">
                    <div className="dict-create">handles = {braceO}</div>
                    <div className="LinkedIn-dict">"LinkedIn": "<a className='link-soc' href="https://www.linkedin.com/in/rodrigue-sawaya-95887932a/" target="_blank">Rodrigue Sawaya</a>",</div>
                    <div className="github-dict">"GitHub": "<a className='link-soc' href="https://github.com/RicoSawaya" target="_blank">Rico Sawaya</a>",</div>
                    <div className="youtube-dict">"YouTube": "<a className='link-soc' href="https://www.youtube.com/@Rico-py" target="_blank">Rico.Py</a>",</div>
                    <div className="close-dict">{braceC}</div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;