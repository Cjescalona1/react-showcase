import {
    useEffect, useState
} from "react";
import getData from "../hooks/useFetch";

function ListData() {
    const [next, setNext] = useState(1);
    const [data, setData] = useState({ results: [] });


    useEffect(() => {
        const URL = "https://randomuser.me/api/?results=5";
        getData(setData, URL);
    }, [next]);

    return (
        <>
            <div>
                <button onClick={() => setNext(next + 1)}><h2>update list</h2></button>
            </div>
            {data.results.map((item: any) => (
                <div key={item.email}>
                    <div > <h2> {item.name.first + " " + item.name.last}</h2></div>
                    <div >{item.email} </div>
                </div>
            ))}

        </>
    );
}
export default ListData;