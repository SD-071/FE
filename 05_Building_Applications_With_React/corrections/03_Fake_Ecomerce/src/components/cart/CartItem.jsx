import { Button, ButtonCounterContainer } from '..';

function CardItem({ product }) {
  return (
    <div className='card flex-row border-b rounded-none w-full'>
      <figure className='overflow-hidden h-full p-3 w-1/5'>
        <img className='object-scale-down w-full h-full' src={product.image} alt={product.title} />
      </figure>
      <div className='card-body flex-row items-start justify-between gap-2 w-4/5 h-full'>
        <div className='flex flex-col gap-4 h-full'>
          <a className='cursor-pointer' to={`/product/${product.id}`}>
            <h2 className={`card-title text-gray-100 hover:text-secondary text-xs`}>{product.title}</h2>
          </a>
          <label htmlFor='id' className='text-[8px] mr-2'>
            <input type='checkbox' className='checkbox checkbox-neutral checkbox-xs p-1' id='id' name='name' /> This
            will be a gift
          </label>
          <div className='flex'>
            <ButtonCounterContainer product={product} extraStyles='btn-xs' />
            <Button text='Delete' extraStyles='btn-link text-[8px] text-gray-200 btn-xs' />
            <Button text='Save for later' extraStyles='btn-link text-[8px] text-gray-200 btn-xs' />
            <Button text='See more like this' extraStyles='btn-link text-[8px] text-gray-200 btn-xs' />
            <Button text='Share' extraStyles='btn-link text-[8px] text-gray-200 btn-xs' />
          </div>
        </div>
        <div className='flex items-end h-full'>
          <p>
            <strong className={`text-gray-100 text-xs`}>${product.price}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
