

const Button = () => {

    const handleClick = (e)=> { //event param
        console.log(e.target);
    }

    return (
        // to make sure handleClick is invoked when button is clicked
        <button onClick={(e)=> handleClick(e)} className="button">
            {'Click Me!'.toUpperCase()}
        </button>
    )
}

export default Button