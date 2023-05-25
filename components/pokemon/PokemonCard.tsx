import { SmallPokemon } from "@/interfaces"
import { Card, Grid, Row, Text } from "@nextui-org/react"
import { useRouter } from "next/router"
import { FC } from "react"

interface Props {
    pokemon:SmallPokemon
}


export const PokemonCard: FC<Props> = ({pokemon}) => {
    
    const router = useRouter();
    const {id, img, name} = pokemon;

    const onPokemonClick = () =>{
        router.push(`/name/${name}`)
    }



  return (
    <Grid  xs={6} sm={3} md={2} xl={1} key={id}>
        <Card 
            hoverable 
            clickable 
            onClick={onPokemonClick}
        >
            <Card.Body css={{p:1}}>
                <Card.Image 
                src={img}
                width='100%'
                height={140}  
                />
            </Card.Body>
            <Card.Footer>
                <Row justify='space-between'>
                    <Text transform='capitalize'>
                    {name}
                    </Text>
                    <Text>#{id}</Text>
                </Row>
            </Card.Footer>

        </Card>
    </Grid>
  )
}
