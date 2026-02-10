function ProductDetail() {

  return (
    (
      <div>
        <h2>title</h2>
        <div>
          <figure>
            <img src="d" alt="D" width={200} />
          </figure>
          <div className='flex flex-col gap-2'>
            <div className='flex justify-around'>
              <p>
                <strong>Price:</strong> price$
              </p>
              <p>
                <strong>Rating: rating</strong>
              </p>
            </div>
            <p>description</p>
          </div>
        </div>
      </div>
    )
  );
}

export default ProductDetail;
