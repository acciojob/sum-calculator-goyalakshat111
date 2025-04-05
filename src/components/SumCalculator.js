import React,{useState} from 'react';

const SumCalculator = ()=>{

    let [sum,setSum] = useState(0);

    function handleChange(e){
        setSum(sum + +e.target.value)
    }


    return(
        <div>
            <h2>Sum Calculator</h2>
            <input type='number' name='number' onChange={handleChange}/>
            <p>Sum: {sum}</p>

        </div>
    )
}

export default SumCalculator;