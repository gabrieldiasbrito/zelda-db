import axios from "axios";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import './game.css'

type Game = {
    name: string;
    description: string;
    developer:string;
    publisher: string;
    released_date: string;
}

export default function Game(){
    const params = useParams()
    const currentGame = params["*"] as string
    const { data: info } = useQuery<Game>('game', async () => {
        const response = await axios.get(`https://zelda.fanapis.com/api/games/${currentGame}`)
        return response.data.data
    })

    return(
        <>
        <br />
        <div className="game-container">
            <Link to={"/games"}>
                <IoArrowBack className="icon"/>
            </Link>
            <h1>{info?.name}</h1>
            <p>{info?.description}</p>
            <br />
            <div>
                <p><strong>Desenvolvedora: </strong>{info?.developer}</p>
                <p><strong>Publisher: </strong>{info?.publisher}</p>
                <p><strong>Data de lançamento: </strong>{info?.released_date}</p>
            </div>
        </div>
        <br />
        </>
    )
}