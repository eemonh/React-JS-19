import Heroes from "./Heroes"

function ReLoops(){

    const heros = [
        {
        name: "Clack Kent",
        age: '27',   
        city: "Metropolis",
        email: "super@dc.com",
        id:1
        },
        {
        name: "Bruce Wayne",
        age: '29',   
        city: "Gotham",
        email: "bat@dc.com",
        id:2
        },
        {
        name: "Diana Prince",
        age: '700',   
        city: "Amazon",
        email: "wondertruth@dc.com",
        id:3
        },
        {
        name: "Barry Allens",
        age: '20',   
        city: "Metro",
        email: "speed@dc.com",
        id:4
        }

    ]
    return(
        <div>
            <h1>Reuse Component in Loop</h1>
            {
                heros.map((hero)=>(
                    <div key={hero.id}>
                        <Heroes hero={hero}/>
                    </div>
                ))
            }

        </div>
    )
}

export default ReLoops