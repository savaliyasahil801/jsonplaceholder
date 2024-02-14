import { useEffect, useState } from "react";
import Header from "./header/Header";
import axios from 'axios';

function Comments() {

    let [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
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
                    <th>postId</th>
                    <th>Id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>body</th>
                </tr>
                {
                    data.map((ele, ind) => {
                        return (
                            <tr key={ind}>
                                <td>{ele.postId}</td>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.email}</td>
                                <td>{ele.body}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    );
}
export default Comments;