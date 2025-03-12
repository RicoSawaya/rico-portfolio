import './pagesCSS/studiesPage.css'



function StudiesPage(){
    return(
        <div className="studies_page">
            <div className='studies_title'>Current Studies</div>

            <div className='run_pysrc_grid'>
                <div className="fake-license">Ricosoft Panes [Version 10.0.26100.3194]</div>
                <div className="fake-license-desc">(c) Ricosoft Corporation. All rights reserved.</div>
                <div>
                    C:\&gt; cd Users
                </div>
                <div>
                    C:\Users&gt; cd RicoS
                </div>
                <div>
                    C:\Users\RicoS&gt; cd Scripts
                </div>
                <div className='current_studies_src'>
                    C:\Users\RicoS&gt; current-studies.py
                </div>
                <div className='school'>
                    Schooling:
                </div>
                <div>
                    Current undergraduate at San Diego State University
                </div>
                <div>
                    Major: Electrical Engineering
                </div>
                <div>
                    Minor: Business Administration
                </div>
                <div>
                    Sophomore Year
                </div>
                <div>
                    Class of 2027
                </div>
                <div className='work'>Work and Experience:</div>
                <div> Internship at <a className ='c3_link' href='https://www.c3biz.com/' target='_blank'>C3 Business Solutions</a> for the Summer of 2025</div>
                <div> Working for Sawaya Engineering as a Land Survey Assistant: Jan 2023 - Present</div>
                <div> Washed windows by knocking on doors and posting ads: June 2023 - December 2024</div>
                <div className='cfa'> Worked back of house at Chick-Fil-A: Jan 2023 - June 2023</div>




            </div>

        </div>
    )
}

export default StudiesPage;