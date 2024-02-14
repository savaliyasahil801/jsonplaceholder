import './App.css';
import { useEffect, useState } from "react";
import Header from "./header/Header";
import axios from 'axios';
import {Card} from 'react-bootstrap';
function Photos() {

    let [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
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
            
            <div className="box">
            {
                    data.map((ele, ind) => {
                        return (
                            <Card style={{ width: '19rem'}} className='card'>
                                <Card.Img variant="top" className='img' src={ele.url}/>
                                <Card.Body>
                                    <li className='id'>
                                        <p>albumId : {ele.albumId}</p>
                                        <h4>Id : {ele.id}</h4>
                                    </li>
                                    <Card.Title className='text'>Title : {ele.title}</Card.Title>    
                                </Card.Body>
                                <p>thumbnailUrl : <Card.Img variant="bottom" className='tham' src={ele.thumbnailUrl}/></p>
                            </Card>
                        )
                    })
                }
            </div>
        </>
    );
}
export default Photos;