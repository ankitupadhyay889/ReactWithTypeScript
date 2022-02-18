import React, { useState } from 'react';

const Nrmlform = () => {

    const [name, setname] = useState<string>("");
    const [show, setshow] = useState<string>("")

    const sub = (e:any) => {
        e.preventDefault();

        if(name){
            setshow(name);
            setname("");
        }else{
            alert("please fill data first")
        }
    }

    const haC = (e:any) => {
        setname(e.currentTarget.value)
    }

    return (
        <div>
            <form onSubmit={sub}>
                <h1> {show} </h1>
                <label htmlFor="name"> Enter name: </label> 
                <input className='form-control' type="text" name="name" autoComplete="off" value={name} onChange={haC} />
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Nrmlform;