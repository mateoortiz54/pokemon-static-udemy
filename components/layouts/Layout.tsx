import Head from "next/head"
import { NavBar } from "../ui";

interface Props {
    children: JSX.Element | JSX.Element[];
    title?: string;
}

const origin = (typeof window === 'undefined')? '': window.location.origin;


export const Layout = ({children, title='Pokemon App'}:Props) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="author" content="Mateo Ortiz"/>
            <meta name="description" content={`Información sobre el pokemón ${title}`}/>
            <meta name="keywords" content={`${title}, pokemon, pokedex`}/>
            <meta property="og:title" content={`Información sobre ${title}`} />
            <meta property="og:description" content={`Esta es la pagina sobre ${title}`}/>
            <meta property="og:image" content={`${origin}/img/banner.png`} />

        </Head>

        <NavBar />

        <main style={{
              padding: '0px 20px'
        }}>
            {children}

        </main>



    </>
  )
}
