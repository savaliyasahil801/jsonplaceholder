import { useEffect, useState } from "react";
import Header from "./header/Header";
import axios from 'axios';

function Todos() {

    let [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setdata(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    return (
        <>
            <Header />
            <table border={2}>
                <tr>
                    <th>userId</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
                {
                    data.map((ele, ind) => {
                        return (
                            <tr key={ind}>
                                <td>{ele.userId}</td>
                                <td>{ele.id}</td>
                                <td>{ele.title}</td>
                                <td>{ele.completed}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    );
}
export default Todos;