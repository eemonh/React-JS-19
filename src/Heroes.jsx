const Heroes = ({hero}) => {
    return (
        <div style={{
                border: "1px solid red",
                padding: "10px",
                margin: "10px",
                width: "400px",
                borderRadius: "10px"
            
        }}>
            <h3>Name:<span style={{color: 'red'}}> {hero.name}</span></h3>
            <h3>Age:<span style={{color: 'blue'}}> {hero.age}</span></h3>
            <h3>City:<span style={{color: 'green'}}> {hero.city}</span></h3>
            <h3>Email:<span style={{color: 'yellow'}}> {hero.email}</span></h3>
        </div>
    )
}
export default Heroes