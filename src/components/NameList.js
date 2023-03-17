import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Amit", "Vikas", "Ved", "Sumit","Amit"]; //Mapping An Array

  const person = [
      {
          id: 1 ,
          name:'Amit',
          age:20,
          skill:'React'
      },

      {
          id: 2 ,
          name:'Vikas',
          age:20,
          skill:'Angular'
      } ,
      {
          id: 3 ,
          name:'Ved',
          age:20,
          skill:'Vue'
      } ,
      {
          id: 4 ,
          name:'Sumit',
          age:20,
          skill:'CSS'
      }
  ]

  const nameList = names.map((names,index) => (
    // <Person key={person.name}  person={person} />
    <h2 key={index}>{names}</h2>
  ));

  return (
    <div>
      {nameList}

      {/* {
        //Map Method In React
        names.map((names) => (
          <h2>{names}</h2>
        ))
      } */}
    </div>
  );
}

export default NameList;
