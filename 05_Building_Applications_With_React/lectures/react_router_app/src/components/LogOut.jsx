
function LogOut({setToken}) {
    const handleLogout = () => {
        setToken(null)
        localStorage.removeItem("token")
    };

  return <button onClick={handleLogout} className='bg-blue-500 rounded px-2 py-1'>logout</button>;
}

export default LogOut;