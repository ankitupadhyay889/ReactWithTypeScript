import React from 'react';
import "./App.css"
import CallArrprop from './FuncCompo/CallArrprop';
import Calling from './FuncCompo/Calling';
import New from './FuncCompo/New';
import Proplist from './FuncCompo/Proplist';

const App = () => {

      let list = [
      {
        name:"Ankit",
        address: "N3/75",
        phonenumber: 7845896548
      }
    ]

      let ar = ["ankit" , "upadhyay" , "varanasi" , "sundarpur"]

      let Full = {
        fname: "Bruce",
        lname: "Wayne",
      }

      let full = [
        {
          first: "Bruce",
          last: "Wayne"
        },
        {
          first: "Peter",
          last: "Parker"
        },
        {
          first: "Captain",
          last: "America"
        },
        {
          first: "Iron",
          last: "Man"
        },
        {
          first: "Gautam",
          last: "Gambhir"
        },
      ]

  return (
    <div className='App'>
      <New lists={list} />
      <CallArrprop category={ar} isBool={true} name={Full} />
      <Proplist names={full} />

      <Calling />
    </div>
  );
};

export default App;


















































// import React, { Component } from 'react';
// import './App.css';
// import Render from './Component/Render';
// import Event from './Component/Event';
// import Child from './Component/Child';
// import Listtyp from './Component/Listtyp';
// import Usestapro from './Component/Usestapro';
// import Newda from './Component/Newda';
// import Newo from './Component/Newo';
// import Day1 from './Component/Day1';

// class App extends Component {
//   render() {
//     // let list = [
//     //   {
//     //     name:"Ankit",
//     //     phonenumber: 7845896548
//     //   }
//     // ]

//     // let addr = {
//     //   city: "Varanasi",
//     //   pincode: 221005
//     // }

//     // let naArr =['ankit' , 'upadhyay' , 'varanasi']

//     let qu = ["aawwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwqkoooooooooookpppppppppppppaqqqqqqqqqqqqqqqqpkkkkkkkkkkk"]

//     return (
//       <div className='App'>

//         {/* <Day1 message='Hello this is first example in React with TypeScript'/> */}
//         {/* <Newo title='Ankit Upadhyay'/> */}

//         {/* <Newda /> */}

//         {/* <Usestapro category='Personal' /> */}

//         {/* <Listtyp lists={list} address={addr} name={naArr} /> */}

//         {/* <Child styles={{color: 'red'}}> This is children data </Child> */}

//         {/* <Event /> */}

//         <Render quo={qu} />

//       </div>
//     );
//   }
// }

// export default App;