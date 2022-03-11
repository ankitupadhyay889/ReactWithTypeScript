import React, { useState } from 'react';
import Inpcus from './Inpcus';

const Inpcall = () => {

    const [inp, setinp] = useState<string>("")

    const pla = (e: any) => {
        console.log(setinp(e.target.value));
        setinp("");
    }

    return (
        <div>
            <Inpcus value={inp} onChange={pla} />
            <h1> {inp} </h1>
        </div>
    );
};

export default Inpcall;