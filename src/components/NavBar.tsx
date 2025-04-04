
interface Pokemon {
    name: string;
    imgSrc?: string;
  }
  
  interface NavBarProps {
    setPokemonName: (name: string) => void;
    pokemonList: Pokemon[];
  }


function NavBar({ setPokemonName, pokemonList }: NavBarProps) {
    
    const handlePokemonClick = (name: string) => {
        setPokemonName(name);
        if (name === "pikachu") {
          alert("pika pikachu !!!"); 
        }
      };
    
    return (
  <nav>
        {pokemonList.map((onePokemonFromTheList) => (
          <button
            key={onePokemonFromTheList.name}
            type="button"
            onClick={() => handlePokemonClick(onePokemonFromTheList.name)}
          >
            {onePokemonFromTheList.name}
          </button>
        ))}
      </nav>
      );
    }
  
  export default NavBar;