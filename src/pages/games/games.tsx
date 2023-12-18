import axios from "axios"
import { useQuery } from "react-query"
import { Link } from 'react-router-dom';
import Search from "../../components/search-bar/search";
import './games.css'

type Game = {
    id: string;
    name: string;
    description: string;
    developer:string;
    released_date: string;
}


export default function Games() {
    const { data } = useQuery<Game[]>('game', async () => {
        const response = await axios.get("https://zelda.fanapis.com/api/games?limit=40")
        return response.data
    }, {
        staleTime: 1000 * 60
    })

    return (
        <>
        <Search/>
        <ul className="teste">
            {data?.data.map(item => {
                return (
                    <li key={item.id} className="game-card">
                        <Link to={`game/${item.id}`}>
                                <h3>{item.name}</h3>
                        </Link>
                    </li>
                )
            })}
        </ul>
        </>
    )

}