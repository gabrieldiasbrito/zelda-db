import axios from "axios"
import { useQuery } from "react-query"
import { Link } from 'react-router-dom';
import './games.css'

type Games = {
    id: string;
    name: string;
}

export default function Games() {

    const { data: games } = useQuery<Games[]>('games', async () => {
        const response = await axios.get("https://zelda.fanapis.com/api/games?limit=40")
        return response.data.data
    })

    return (
            <ul className="games-container">
                {games?.map(item => {
                    return (
                        <li key={item.id} className="game-card">
                            <Link to={`/games/${item.id}`}>
                                <h3>{item.name}</h3>
                            </Link>
                        </li>
                    )
                })}
            </ul>
    )

}