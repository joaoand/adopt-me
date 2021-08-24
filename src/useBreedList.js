import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal){
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState('unloaded');
    
    useEffect(()=>{
        if(!animal){
            setBreedList([])
        }else if(localCache[animal]){
            setBreedList(localCache[animal]);
        }else {
            requestBreedList();
        }
        async function requestBreedList(){
            // Si no colocamos esta linea puede que salga un animal con la raza de la busqueda anterior
            setBreedList([]);
            setStatus('loading');
            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            ).catch(error=>console.log(error))
            console.log(res)
            const json = await res.json().catch(error=> console.log(error));
    
            localCache[animal] = json.breeds || [];
            setBreedList(localCache[animal]);
            setStatus('loaded')
        }
    }, [animal])

    return [breedList, status];
}