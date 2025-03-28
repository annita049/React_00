import { useState, useEffect } from 'react'

const Bro = () => {
    let [name, setName] = useState('Guest');
    const [age, setAge] = useState(0);

    const [bulbState, setBulbState] = useState('OFF');
    const [buttonLabel, setButtonLabel] = useState('Turn OFF');


    useEffect(() => {
      console.log(`Current Bulb State : ${bulbState}`);
      setButtonLabel(`Turn ${bulbState =='ON' ? 'OFF' :  'ON'}`)
    }, [bulbState])

    
    const changeName = () => {
        // setName('AnniBro');
        setName('Annita');
        console.log(name);
    }

    const IncrementAge = () => {
        setAge(age+1);
        console.log(age);
    }

    const handleSwitch = () => {
        setBulbState(()=> bulbState === 'ON'? 'OFF':'ON');
    }

    return (
        <div>

            <p>Name: {name}</p>
            <button onClick={changeName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={IncrementAge}>Increment Age</button>

            <div>
                <img src={`light-${bulbState.toLowerCase()}.png`} height="130px" width="120px" alt="light-on" />
                <button onClick={handleSwitch}>{buttonLabel}</button>
            </div>
        </div>
    )
}

export default Bro