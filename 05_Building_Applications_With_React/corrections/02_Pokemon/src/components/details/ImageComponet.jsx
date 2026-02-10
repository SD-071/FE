
function ImageComponet({key, src, alt}) {
  return (
    <div key={key} className='tooltip'>
        <img src={src} alt={alt} width={100} />
    </div>
  )
}

export default ImageComponet;