import { Grid} from "@nextui-org/react"
import { FavoriteCardPokemon } from "./FavoriteCardPokemon"

interface Props {
    pokemons: number[];
}

export const FavoritePokemons = ({pokemons}: Props) => {
  return (
    <Grid.Container 
            gap={2}
            direction="row"
            justify="flex-start"
          >
            {
              pokemons.map(pokemon => (<FavoriteCardPokemon key={pokemon} pokemon={pokemon}/>))
            }

          </Grid.Container>
  )
}

export default FavoritePokemons;
