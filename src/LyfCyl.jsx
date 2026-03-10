function LyfCyl() {
    return (
        <div>
            <h2>useEffect Life Cycle</h2>
            <pre style={{fontSize: "14px", lineHeight: "1.8"}}>
                {
`1) useEffect(( ) => {
    //this code will run on mount
    },[])
                    
2) useEffect(( ) => {
    //this code will run on update
    },[State1 or Props])
                    
3) use Effect(( ) => {
   
    return ( ) => {
    //this code will run on unmount
    };
    }, []);
                       
4) useEffect(( ) => {
    //this code will run on every life cycle event
    })`
                }
            </pre>
        </div>
    )
}
export default LyfCyl