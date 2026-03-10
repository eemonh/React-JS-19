import College from "./College";
function NesLoop() {
    const collegeData=[
        {name: "DIU",
        city: "Ashulia",
        website: "https://diu.ac.bd/",
        student:[
            {name: "Zahir",
            age: "26",
            email: "2M9sV@diu.com"
            },
            {name: "Hossain",
            age: "24",
            email: "hsfL0@diu.com"
            },
            {name: "Eemon",
            age: "22",
            email: "eemon@diu.com"
            }
        ]
        },
        {name: "BUET",
        city: "Old Dacca",
        website: "https://buet.ac.bd/",
        student:[
            {name: "Jack",
            age: "25",
            email: "ghhdhnjt@buet.com"
            },
            {name: "Rollon",
            age: "20",
            email: "ahljdhfv@buet.com"
            },
            {name: "Leon",
            age: "23",
            email: "leon@buet.com"
            }
        ]
        },
        {name: "BUTEX",
        city: "7 Rasta",
        website: "https://butex.ac.bd/",
        student:[
            {name: "Limon",
            age: "28",
            email: "ahfgoahf@butex.com"
            },
            {name: "Khalid",
            age: "25",
            email: "khalid@butex.com"
            },
            {name: "Kat",
            age: "26",
            email: "kat@butex.com"
            }
        ]
        }
    ]
    return (
        <div>
            <h1>Nested Looping with Component in React JS</h1>
            {
                collegeData.map((college, index)=>(
                    <div key= {index}>
                        <College college={college}/>
                    </div>
                ))
            }
        </div>
    );
}
export default NesLoop