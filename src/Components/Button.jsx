

const Button = () => {

    let count = 0;
    const handleClick = (name)=> {
        if (count < 4){
            count++;
            console.log(`${name} you clicked me ${count} time(s).`);
        }
        else
        {
            console.log(`${name} Stop clicking me!`);
        }
    }

    return (
        // to make sure handleClick is invoked when button is clicked
        <button onClick={()=> handleClick("Annita")} className="button">
            {'Click Me!'.toUpperCase()}
        </button>
    )
}

export default Button