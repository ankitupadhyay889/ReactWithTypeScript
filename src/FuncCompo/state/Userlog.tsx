import React, { useState } from 'react';

type authU = {
    name: string;
    email: string;
}

// normal string bhi likh skte ho

const Userlog = () => {

    const [user, setuser] = useState<authU | null> (null)

    const li = () => {
        setuser({
            name: "ankit",
            email: "ank@exam.com"
        })
    }

    const lo = () => {
        setuser(null)
    }

    return (
        <div>
            <button onClick={li}> Log In </button>
            <br/>
            <button onClick={lo}> Log Out </button>
            <br/>
            <div> User name is {user?.name} </div>
            <div> User email is {user?.email} </div>
        </div>
    );
};

export default Userlog;