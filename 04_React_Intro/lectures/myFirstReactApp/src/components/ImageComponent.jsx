import dog from "../assets/images.webp";

function ImageComponent() {
  return (
    <div className="flex items-center">
      <img alt='dog' src={dog} width='50%' />
    </div>
  );
}

export default ImageComponent;
