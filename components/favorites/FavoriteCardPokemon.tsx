import { Grid, Card } from "@nextui-org/react"
import { useRouter } from "next/router";

interface Props {
    pokemon: number;
}

export const FavoriteCardPokemon = ({pokemon}:Props) => {

    const router = useRouter();

    const onFavoriteClicked = () => {
        router.push(`/pokemon/${pokemon}`)

    };

  return (
    <Grid  xs={6} sm={3} md={2} xl={1} key={pokemon}>
        <Card
        hoverable
        clickable
        onClick={onFavoriteClicked}
        css={{
            padding: 10
        }}
        >
        <Card.Image 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon}.svg`}
            width={'100%'}
            height={140}
        />


        </Card>
    </Grid>  
  )
}

export default FavoriteCardPokemon;