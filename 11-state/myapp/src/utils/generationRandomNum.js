import React from "react"

function generateRandomNum(props) => {
    return Math.floor(Math.random() * {props.maxNum})
}


export default generateRandomNum