function Counter({countProps}) {
    console.log(Counter.render)
    return <h1>Total click: {countProps}</h1>
}
export default Counter