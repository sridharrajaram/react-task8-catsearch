import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Loading from './loading';
import Cat from './cats';

function Explorer() {

    const [catList, setCatList] = useState([]);
    const [queryTag, setQueryTag] = useState("");

    const [isLoading, setIsLoading] = useState(true);


    useEffect(async () => {

        try {
            let catsData = await axios.get("https://cataas.com/api/cats");
            console.log(catsData.data);
            setCatList(catsData.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(true);
        }


    }, [])

    const handleClick = async () => {

        try {
            setIsLoading(true);
            console.log(queryTag);
            let catsData = await axios.get(`https://cataas.com/api/cats?tags=${queryTag}`);
            console.log(catsData.data);
            setCatList([...catsData.data]);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(true);
        }
    }


    return (
        <div classname="">
            <div className="row mt-5 justify-content-center">
                
                <div className="form-inline">
                <h2> Cats, cats everywhere 😻</h2>
                    <input
                        type="text"
                        value={queryTag}
                        onChange={(e) => { setQueryTag(e.target.value) }}
                        className="form-control mr-sm-2"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button onClick={handleClick} className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                </div>
            </div>
            <div className="row1">
                {
                    isLoading ?
                        <Loading></Loading>
                        :
                        catList.map((obj, index) => {
                            return (
                                <Cat handleData={obj} handleDataId={index}></Cat>
                            );
                        })
                }
            </div>
        </div>
    );
}

export default Explorer
