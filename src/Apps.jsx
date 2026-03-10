function Apps() {
    function callFunc(){
        alert(" Function Called");
    }
    return (
        <div>
            <button onClick={callFunc}>Click</button>
            <h1>Apps</h1>
            <hr />
            <br />
        </div>
    )
}
export default Apps