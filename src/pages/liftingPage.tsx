import './pagesCSS/liftingPage.css'
function LiftingPage(){
    const braceO = "{";
    const braceC = "}";
    return(
        <div className="lifting_page">
            <div className='lifting_title'>Weight Lifting</div>
            <div className='why_dict'>
                <div className='oNc'>Data = {braceO}</div>
                <div className='why_code'>
                    <div>Started in 2021 in high school</div>
                    <div>Started at 113 pounds and my highest was 230 pounds</div>
                    <div>Began boxing a year after I started weight lifting</div>
                    <div>I enjoy doing it everyday since it pauses all other problems/objectives in my life</div>
                    <div>Became a huge part of my life ever since</div>


                </div>
                <div className='oNc'>{braceC}</div>
            </div>            

            <div className='cmd-grid'>
                <div>C:\&gt; cd Users</div>
                <div>C:\Users&gt; cd RicoS</div>
                <div>C:\Users\RicoS&gt; lifting_numbers.py</div>
            </div>
            <div className='code_grid'>
                <div className='source_output_text'>Source Code:</div>
                <div className='source_code_grid'>
                    <div>
                        liftingNumbers = [['Bench Press',315,1],['Squat',500,1],['Squat',405,15]]
                    </div>
                    <div>for lift in liftingNumbers:</div>
                    <div className='inside_num_for'>
                        <div>print('Workout: ' +str(lift[0]))</div>
                        <div>print('Weight (lbs): ' +str(lift[1]))</div>
                        <div>print('Reps: ' +str(lift[2]))</div>
                        <div>print('-----')</div>
                    </div>
                </div>
                <div className='source_output_text'>Output:</div>
                
                <div className='output_grid'>
                    <div>Workout: Bench Press</div>
                    <div>Weight (lbs): 315</div>
                    <div>Reps: 1</div>
                    <div>-----</div>
                    <div>Workout: Squat</div>
                    <div>Weight (lbs): 500</div>
                    <div>Reps: 1</div>
                    <div>-----</div>
                    <div>Workout: Squat</div>
                    <div>Weight (lbs): 405</div>
                    <div>Reps: 15</div>
                    <div>-----</div>
                </div>
                <div>Process finished with exit code 0</div>
                <div>C:\Users\RicoS&gt;</div>

            </div>
        </div>
    )
}

export default LiftingPage;