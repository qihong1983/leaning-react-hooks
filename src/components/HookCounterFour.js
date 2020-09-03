import React,{useState} from 'react'


function HookCounterFour() {

    let [items, setItems] = useState([]);

    const addItem =() => {
        console.log(items, 'items');

        let aaa = items.concat();
        aaa.push({
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1    
        });


        setItems(aaa);
        
        // setItems(prev=> {
        //     return [...prev]
        // });
        // setItems([... items, {
        //     id: items.length,
        //     value: Math.floor(Math.random() * 10) + 1
        // }])
    }
    return (
        <div>
            <button onClick={addItem}> Add a number</button>
    <div>{JSON.stringify(items)}</div>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>

            
        </div>
    )
}

export default HookCounterFour
