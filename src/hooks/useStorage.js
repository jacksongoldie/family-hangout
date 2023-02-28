import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase/config';

function useStorage(){
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(()=> {
        const storageRef = projectStorage.ref(file.name)

        storageRef.put(file).on('state_changed', (snap)=> {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage)
        }, (err) => {
            setError(err)
        }).then(()=>{
            const url = storage.getDownloadURL();
            setUrl(url);
        })
    },[file])
}

export default useStorage;