function Loops(){

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
            <h1>Loops in JSX with Map Function</h1>
            <table border='1'>
                <thead>
                    <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Age</td>
                    <td>City</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        heros.map((hero) => (
                            <tr key={hero.id}>
                                <td>{hero.id}</td>
                                <td>{hero.name}</td>
                                <td>{hero.email}</td>
                                <td>{hero.age}</td>
                                <td>{hero.city}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <h1>Dummy Data</h1>
            <table border='1'>
                <thead>
                    <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Age</td>
                    <td>City</td>
                    </tr>
                </thead>
                <tbody>
                     <tr>
                    <td>1</td>
                    <td>Zahir</td>
                    <td>emon@example.com</td>
                    <td>26</td>
                    <td>Dhaka</td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>Zahir</td>
                    <td>emon@example.com</td>
                    <td>26</td>
                    <td>Dhaka</td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>Zahir</td>
                    <td>emon@example.com</td>
                    <td>26</td>
                    <td>Dhaka</td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>Zahir</td>
                    <td>emon@example.com</td>
                    <td>26</td>
                    <td>Dhaka</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Loops