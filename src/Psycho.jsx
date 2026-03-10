function Psycho({contained}) {
    
    return (
        <div>
            <h1>Psycho component</h1>
            <h2>{contained}</h2>
            <h2>{contained[0]}</h2>
            <h2>{contained[1]}</h2>
            <h2>{contained[2]}</h2>
            <h2>{contained[3]}</h2>
            <hr />
            {
                contained.map((item, index)=>(<h2 key= {index}>{item}</h2>))
            }

            
        </div>
    )
}
export default Psycho;