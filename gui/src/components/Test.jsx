import React, {useEffect, useState} from 'react'; //ES6 js

export default function(){
    const [testData,setTestData] = useState(null);
    useEffect(()=>{
        get_test_data()
    },[])
    const get_test_data = async() => {
        data_json = await (await fetch(`/api/main/test_route`)).json()
        setTestData(data_json)
        console.log(data_json)
    }
    if(testData==null){
        return(
            <h3>Loading</h3>
        )
    }
    return(
        <>
        <h3>Successfully Loaded</h3>
        {testData.map(data_element =>
            <h4>{data_element}</h4>    
        )}
        </>
    )
}