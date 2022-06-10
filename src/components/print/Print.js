import React from 'react'

const Print = ({user}) => {
  //const firstName = user.firstName
//  const lastName = user.lastName
  const {firstName,lastName,age}=user
  console.log(firstName);
  return (
    <>
    <h2>entered information</h2>
    <p>your name: {`${firstName}  ${lastName}`}</p>
    <p>your age: {age}</p>
    </>
)
}

export default Print