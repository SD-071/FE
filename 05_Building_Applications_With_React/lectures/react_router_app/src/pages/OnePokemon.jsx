import { useParams } from "react-router-dom";
function OnePokemon() {
  const {name, ability} = useParams();
  console.log(name, ability)
  return (
    <div>
        <h2>Ditto</h2>
    </div>
  )
}

export default OnePokemon;