function PropsAdd(props) {
    const info = props.info
    return (
        <div>
            <p>Props Component</p><br />
            <h2>Name: {props.name}</h2>
            <h2>Age:{props.age}</h2>
            <h2> Email: {props.email}</h2>
            <br />
            <h2>Name: {info.name}</h2>
            <h2>Age: {info.age}</h2>
            <h2>Email: {info.email}</h2>
        </div>
    )
}
export default PropsAdd;

export const AProp =({info1}) =>{
    return(
        <div>
            <br />
            <h2>Name: {info1.name}</h2>
            <h2>Age: {info1.age}</h2>
            <h2>Email: {info1.email}</h2>
        </div>
    )

}