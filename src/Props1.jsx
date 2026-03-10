import Props1Add from "./Props1Add";
import Wrapper from "./Wrapper";
function Props1(){
    return(
        <div>
        <h1>Default Props</h1>
        
        <Props1Add name = "bruce wayne"/>
        <Props1Add name = "Robin Hood"/>
        <Props1Add />

        <Wrapper color = "blue">
            <h1>Wrapper Component</h1>
        </Wrapper>
        <Wrapper>
            <h1>Hello Everyone</h1>
        </Wrapper>
        <Wrapper>
            <h1>Hey Admin</h1>
            <h2 style = {{color: "red"}}>Please Login</h2>
        </Wrapper>
        </div>
    )
}
export default Props1