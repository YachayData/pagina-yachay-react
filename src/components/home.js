import PostPreview from './postPreview';
import '../styles/home.css';
import { Box } from '@mui/material';

function Home () {

    const postArray = [
        {
            id: 0,
            image: "https://www.yachaydata.cl/wp-content/uploads/2022/01/visualizador-2-400x240.png",
            title: "Visualizador COVID-19 Chile",
            summary: "Hemos implementado un visualizador de datos de COVID-19 para Chile. Viene acá abajo. Es dinámico, y permite varias métricas a nivel nacional, por región, y..."
        },
        {
            id: 1,
            image: "https://www.yachaydata.cl/wp-content/uploads/2022/06/webscaping-400x240.png",
            title: "Web Scraping, ¿qué es?",
            summary: "Hoy quisimos hablar un poco de Web Scraping. ¿De qué se trata? El Web Scraping agrupa los métodos de extracción de datos en la web: Los..."
        },
        {
            id: 2,
            image: "https://www.yachaydata.cl/wp-content/uploads/2022/01/snapshot-1641329038039@2x-1-400x240.png",
            title: "¿De qué está compuesto el PIB chileno?",
            summary: "Quisimos analizar la composición del PIB Chileno en el tercer trimestre de 2021. A partir de datos de la Base de Datos Estadísticos del Banco Central..."
        },
        {
            id: 3,
            image: "https://www.yachaydata.cl/wp-content/uploads/2021/11/wagon-400x240.jpeg",
            title: "Curso de Python & Data Analytics con Le Wagon",
            summary: "Tal como saben, Yachay es “El mundo a través de los datos”. Muchas veces les hemos comentado la importancia del Big Data, del Machine Learning o..."
        }
    ]

    return (
        <div className="Home">
            <h1>Home Page</h1>

            <Box style={{ display: "flex", "justifyContent": "center"}}>
                <ul style={{ maxWidth: 800}}>
                    {postArray.map(post => (
                        <PostPreview key={post.id} post={post}/>
                    ))}
                </ul>
                <Box style={{ maxWidth: 800 }}>
                    Web Scraping, ¿qué es?
                </Box>
            </Box>
        </div>
    );
}

export default Home;