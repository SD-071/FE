import { useEffect } from "react"

function Interval() {
    useEffect(() => {
      const interval = setInterval(() => console.log('Join our newsletter'), 1000);
      return () => clearInterval(interval);
    }, []);
    
  return (
    <div>Interval</div>
  )
}

export default Interval