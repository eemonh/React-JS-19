
function Fruits() {
    function fruit(fruit) {
        alert(fruit)
    }
    return (
        <div>
            <h1>apple</h1>
            <button onClick={() => fruit("apple")}>Apple</button>
            <button onClick={()=> fruit("banana")}>Banana</button>
        </div>
    )
}   
export function Colors() {
    return (
        <div>
            <h1>red</h1>
        </div>
    )
}
export default Fruits