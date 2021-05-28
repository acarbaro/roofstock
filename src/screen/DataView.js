import React, { useCallback, useEffect, useState } from 'react'
import GridView from '../components/GridView';
import ListView from '../components/ListView';
import { FaThLarge, FaThList } from 'react-icons/fa';
import { URL } from "../constants/url";

export default function DataView() {

    const [data, setData] = useState([]);
    const [viewType, setViewType] = useState("grid");

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await fetch(URL);
            const responseJSON = await response.json();
            setData(responseJSON.properties)
        } catch (error) {
            console.log(error)
        }
    }

    const handleViewType = useCallback((type) => () => {
        setViewType(type)
    }, [])

    return (
        <div className="App">
            <div className="container">
                <h1>Property List</h1>
                <div className="actions-container">
                    <button onClick={handleViewType("grid")} className={`btn btn-grid ${viewType === "grid" ? "active" : ""}`}>
                        <FaThLarge size={16} color={viewType === "grid" ? "#fff" : "#DBDBDB"} />
                    </button>
                    <button onClick={handleViewType("list")} className={`btn btn-list ${viewType === "list" ? "active" : ""}`}>
                        <FaThList size={16} color={viewType === "list" ? "#fff" :"#DBDBDB"} />
                    </button>
                </div>
                {viewType === "grid" ? <GridView data={data} /> : <ListView data={data} />}
            </div>
        </div>
    )
}
