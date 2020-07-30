/*
 * @Author: tim
 * @Date: 2020-07-30 10:55:26
 * @LastEditors: tim
 * @LastEditTime: 2020-07-30 14:21:13
 * @Description: 自定义 hook
 */ 
import React, { useState, useEffect } from "react"

// 自定义hook须以use开头 
const usePerson = (personId) => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState({});
  useEffect(() => {
    setLoading(true);
    // fetch(`http://www.xxx.com/api/people/${personId}/`)
    //   .then(response => response.json())
    //   .then(data => {
    //     setPerson(data);
    //     setLoading(false);
    //   });
    setTimeout(() => {
      setPerson({
        uid: personId,
        name: 'T9527',
        height: '170',
        mass: '65KG'
      });
      setLoading(false);
    }, 5000)
  }, [personId]);  
  return [loading, person];
};

const Person = ({ personId }) => {
  const [loading, person] = usePerson(personId);

  if (loading === true) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <p>You're CID: {person.uid}</p>
      <p>You're viewing: {person.name}</p>
      <p>Height: {person.height}</p>
      <p>Mass: {person.mass}</p>
    </div>
  );
};

export default Person