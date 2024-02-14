import { useEffect, useState } from "react";
import Header from "./header/Header";
import axios from 'axios';

function Users() {

    let [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
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
                    <th>Id</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    <th>address.street</th>
                    <th>address.suite</th>
                    <th>address.city</th>
                    <th>address.zipcode</th>
                    <th>address.geo.lat</th>
                    <th>address.geo.lng</th>
                    <th>phone</th>
                    <th>website</th>
                    <th>company.name</th>
                    <th>company.catchPhrase</th>
                    <th>company.bs</th>
                </tr>
                {
                    data.map((ele, ind) => {
                        return (
                            <tr key={ind}>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.username}</td>
                                <td>{ele.email}</td>
                                <td>{ele.address.street}</td>
                                <td>{ele.address.suite}</td>
                                <td>{ele.address.city}</td>
                                <td>{ele.address.zipcode}</td>
                                <td>{ele.address.geo.lat}</td>
                                <td>{ele.address.geo.lng}</td>
                                <td>{ele.phone}</td>
                                <td>{ele.website}</td>
                                <td>{ele.company.name}</td>
                                <td>{ele.company.catchPhrase}</td>
                                <td>{ele.company.bs}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    );
}
export default Users;