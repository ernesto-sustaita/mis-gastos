import React, {useEffect, useState} from "react";
import LinkForm from "./LinkForm";

import {db} from '../firebase';
import { addDoc, collection, onSnapshot } from "firebase/firestore";

const Links = () => {

    const [links, setLinks] = useState([]);

    const addOrEditLink = async (linkObject) => {
        const linksCollection =  collection(db,'links');

        await addDoc(linksCollection,linkObject);
        
        console.log('new task added');
    }

    const getLinks = async () => {

        onSnapshot(collection(db,'links'), (collection)=>{
            const docs = [];
            collection.forEach(doc => {
                docs.push({...doc.data(), id:doc.id});
            });
            setLinks(docs);
        });
    }

    useEffect(()=>{
        getLinks();
    },[]);

    return(
        <div>
            <div className="col-md-4 p-2">
                <LinkForm addOrEditLink={addOrEditLink}/>
            </div>
            <div className="col-md-4 p-2">
                {links.map(link=>(
                    <div key={link.id} className="card mb-1">
                        <div className="card-body">
                            <h4>{link.name}</h4>
                            <p>{link.description}</p>
                            <a href={link.url} target="_blank" rel="noreferrer">Go to</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Links;