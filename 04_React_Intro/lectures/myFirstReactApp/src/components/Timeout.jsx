import { useEffect } from "react";

function Timeout() {
    useEffect(() => {
      const timeout = setTimeout(() => console.log('Join our newsletter'), 3000);
      return () => clearTimeout(timeout);
    }, []);
  return (
    <div>Timeout</div>
  )
}

export default Timeout