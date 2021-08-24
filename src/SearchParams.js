import {useState, useEffect} from 'react'; 
import useBreedList from './useBreedList';
import Results from './Results';
//Para cambiar un valor dependiendo del input se necesita un evento 
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
    const [location, setLocation]= useState('Seattle, WA'); 
    function updateLocation(e){
        setLocation(e.target.value);
    }
    const [animal, setAnimal] = useState('')
    const [breed, setBreed] = useState('')
    const [pets, setPets] = useState([])
    const [breeds] = useBreedList(animal);

    useEffect(()=>{
        requestPets();
    }, []) 

    async function requestPets(){
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        ).catch(error=>console.log(error));

        const json = await res.json().catch(error=> console.log(error));

        console.log(json);

        setPets(json.pets)
    }

    return(
        <div className="search-params">
            <form
            // Cada vez que le demos a submit haremos una llamada a la API con los valores actuales
            onSubmit={(e)=> {
                // Evitamos que agarre los valores por defecto
                e.preventDefault();
                requestPets();
                }
            }>
                <label htmlFor="location">
                    Location
                    <input id="location" 
                    onChange={(e)=>setLocation(e.target.value)} 
                    onChange={updateLocation}
                    value={location.toUpperCase()}
                    placeholder="Location" />
                </label>
                <label htmlFor="animal">
                    Animal 
                    <select 
                        id='animal'
                        value={animal}
                        onChange={(e)=> setAnimal(e.target.value)}
                        onBlur={(e)=> setAnimal(e.target.value)}
                        >
                            <option value=''></option>
                            {/* tambien se podria colocar como <option value='' /> */}
                            {ANIMALS.map((animal)=>(
                                <option value={animal} key={animal}>
                                    {animal}
                                </option>
                            ))}
                        </select>
                </label>
                <label htmlFor="breed">
                     Breed
                    <select 
                        id='breed'
                        value={breed}
                        onChange={(e)=> setBreed(e.target.value)}
                        onBlur={(e)=> setBreed(e.target.value)}
                        >
                            <option value=''></option>
                            {/* tambien se podria colocar como <option value='' /> */}
                            {breeds.map((breed)=>(
                                <option value={breed} key={breed}>
                                    {breed}
                                </option>
                            ))}
                        </select>
                </label>
                <button>Submit</button>
            </form>
            <Results pets={pets}/>
            
        </div>
    )
}

export default SearchParams; 