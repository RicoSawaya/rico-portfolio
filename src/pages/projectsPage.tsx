import './pagesCSS/projectsPage.css'
import beforeMap from './pictures/Screenshot 2024-12-28 222048.png'
import afterMap from './pictures/Screenshot 2024-12-28 222234.png'
import ode1 from './pictures/ODE1.png'
import arduino from './pictures/arduino1.jpg'
import stock from './pictures/stock_output.png'
import acct1 from './pictures/logging.png'
import acct2 from './pictures/income.png'



function ProjectsPage(){
    const braceO = "{";
    const braceC = "}";
    return(
        <div className="projects_page">

            <div className='projects_title'><a className = 'anchor_title' href='https://www.linkedin.com/in/rodrigue-sawaya-95887932a/details/projects/' target='_blank'>Previous Projects</a></div>

            <div className='projects_grid'>


            <div className='project' id='1'>
                    <div className='oNc'>Stock Market Analyzer = {braceO}</div>
                    <div className='description_pic_grid'>
                        <div className='description'>
                            <div>&#8226; Lists Information about a certain stock</div>
                            <div>&#8226; Does a complete fundamental analysis check on the desired stock</div>
                            <div>&#8226; Uses requests to web scrape information about the stock</div>
                            <div>&#8226; Uses a GUI created in python</div>

                        </div>
                        <div className='photo_ode_grid'>
                            <div className='example_grid'>
                                <div className='BA'>GUI</div>
                                <div className='e1_img'><img className='before_src' src={stock}></img></div>
                            </div> 
                        </div>
                    </div>
                    <div className='oNc'>{braceC}</div>
                </div>



                <div className='project' id='2'>
                    <div className='oNc'>Automatic Survey Mapping Program = {braceO}</div>
                    <div className='description_pic_grid'>
                        <div className='description'>
                            <div>&#8226; Program automatically filters points taken by a surveyor</div>
                            <div>&#8226; Filters based on height or sequence</div>
                            <div>&#8226; Used by Sawaya Engineering for multuple projcts</div>
                            <div>&#8226; Equates the field descriptions to Auto-CAD layer names</div>
                            <div>&#8226; connects the points with lines that have similar shot descriptions</div>
                        </div>
                        <div className='photo_grid'>
                            <div className='before_grid'>
                                <div className='BA'>Before:</div>
                                <div className='before_img'><img className='before_src' src={beforeMap}></img></div>
                            </div> 
                            <div className='after_grid'>
                                <div className='BA'>After:</div>
                                <div className='after_img'><img className='after_src' src={afterMap}></img></div>
                            </div> 
                        </div>
                    </div>
                    <div className='oNc'>{braceC}</div>
                </div>


                <div className='project' id='3'>
                    <div className='oNc'>Differential Equation Calculator = {braceO}</div>
                    <div className='description_pic_grid'>
                        <div className='description'>
                            <div>&#8226; Created in python</div>
                            <div>&#8226; Has a GUI where you input values for the equation</div>
                            <div>&#8226; Showed my professors and they loved it</div>
                        </div>
                        <div className='photo_ode_grid'>
                            <div className='example_grid'>
                                <div className='BA'>Example</div>
                                <div className='e1_img'><img className='before_src' src={ode1}></img></div>
                            </div> 
                        </div>
                    </div>
                    <div className='oNc'>{braceC}</div>
                </div>


                <div className='project' id='4'>
                    <div className='oNc'>Stock/Crypto Price Watcher (Arduino) = {braceO}</div>
                    <div className='description_pic_grid'>
                        <div className='description'>
                            <div>&#8226; Created with Python AND Arduino IDE</div>
                            <div>&#8226; Alerts you if the stock goes above/below the selected cieling/floor price</div>
                            <div>&#8226; Alerts you by sending an email AND a built in alarm</div>
                            <div>&#8226; Connected to an arduino with an lcd display</div>
                            <div>&#8226; Displays the ticker symbol and current price</div>
                            <div>&#8226; A green light is displayed indicating no errors and in price range</div>

                        </div>
                        <div className='photo_ode_grid'>
                            <div className='example_grid'>
                                <div className='BA'>Arduino</div>
                                <div className='arduino_img'><img className='arduino_src' src={arduino}></img></div>
                            </div> 
                        </div>
                    </div>
                    <div className='oNc'>{braceC}</div>
                </div>


                <div className='project' id='5'>
                    <div className='oNc'>Accounting Software = {braceO}</div>
                    <div className='description_pic_grid'>
                        <div className='description'>
                            <div>&#8226; Created a GUI with Python</div>
                            <div>&#8226; Allows you to log entries into many different accounts</div>
                            <div>&#8226; Can see all the logs you entered to verify a balance</div>
                            <div>&#8226; Creates an Excel sheet of a balance, income, and cashflow statement</div>

                        </div>
                        <div className='photo_acct_grid'>
                            <div className='photo_acct'>
                                <img className='acct_src' src={acct1}></img>
                            </div>
                            <div className='photo_acct'>
                                <img className='acct_src' src={acct2}></img>
                            </div>
                        </div>
                    </div>
                    <div className='oNc'>{braceC}</div>
                </div>



            </div>

        </div>
    )
}

export default ProjectsPage;