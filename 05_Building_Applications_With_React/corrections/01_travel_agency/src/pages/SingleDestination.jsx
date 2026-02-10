import { destinations } from "../data/destinations";
import { useParams } from "react-router-dom";
import {NotFoundDestination} from ".";

const SingleDestination = () => {
  const {slug} = useParams();
  const destination = destinations.find((d) => d.slug === slug)

  if(!destination) {
    return <NotFoundDestination />
  }

  const {title, image, text} = destination;
  return (
    <div className='max-w-4xl mx-auto px-4 space-y-6'>
      <h1 className='text-4xl font-bold text-primary text-center'></h1>
      <img src={image} alt={title} className='w-full h-80 object-cover rounded-box shadow-md' />
      <p className='text-lg'>{text}</p>
    </div>
  );
};

export default SingleDestination;