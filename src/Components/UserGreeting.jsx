const UserGreeting = ({isLoggedIn, userName}) => {
  return (
    <div>
        {isLoggedIn? 
            <div>
                Welcome {userName}!
            </div>
            :
            <div>
                <p>You are browsing as Guest!</p>
                <button className="button">Log In</button>
            </div>
        }
    </div>
  )
}

export default UserGreeting