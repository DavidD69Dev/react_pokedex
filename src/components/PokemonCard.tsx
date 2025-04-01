 

  function PokemonCard ({pokemon}) {
    

    return (
      <figure>
        {pokemon.imgSrc ? (
        <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt="Bulbasaur"
      />
      ) : (
      <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
      </figure>
    );
  };
  
  export default PokemonCard;