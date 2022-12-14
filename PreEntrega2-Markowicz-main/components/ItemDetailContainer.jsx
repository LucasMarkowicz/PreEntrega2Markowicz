import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apple from "../utils/Apple.jsx";
import ItemDetail from "./ItemDetail.jsx";

export default function ItemDetailContainer() {
    let { slug } = useParams()
    let producto = apple.find((x) => x.slug === slug)
    const [data, setData] = useState([]);


    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
            resolve(producto);   
        }, 100);
        });
        getData.then(res => setData(res));
    }, [])

return (

    <div>
         <ItemDetail data={data}></ItemDetail>
    </div>
 )
}

