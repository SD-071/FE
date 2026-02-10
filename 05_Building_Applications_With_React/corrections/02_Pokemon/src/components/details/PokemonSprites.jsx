import ImageComponet from "./ImageComponet";

const PokemonSprites = ({sprites}) => {
  console.log(sprites)
  const renderSprites = sprites => {
    return Object.keys(sprites).map((key) => {
      if(typeof sprites[key] === "string") {
        return (<ImageComponet key={key} src={sprites[key]} alt={key} />)
      } else if(key === "other") {
        return Object.keys(sprites[key]).map((k) => {
          const source = k;
          return Object.keys(sprites[key][k]).map((i) => {
            if(typeof sprites[key][k][i] === "string"){
              return <ImageComponet key={`${source}-${i}`} src={sprites[key][k][i]} alt={`${source}-${i}`} />;
            }
          })
        })
      } else if(key === "versions"){
        return Object.keys(sprites[key]).map((k) => {
          const gen = k;
          return Object.keys(sprites[key][k]).map((i) => {
            const version = i;
            return Object.keys(sprites[key][k][i]).map((j) => {
              if (typeof sprites[key][k][i][j] === 'string') {
                return (
                  <ImageComponet
                    key={`${gen}-${version}-${j}`}
                    src={sprites[key][k][i][j]}
                    alt={`${gen}-${version}-${j}`}
                  />
                );
              }
            })
          });
        });
      }
    })
  }
  return <div className='grid grid-cols-12 items-center justify-center'>{renderSprites(sprites)}</div>;
};

export default PokemonSprites;
