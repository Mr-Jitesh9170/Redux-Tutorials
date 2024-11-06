import { useDispatch, useSelector } from "react-redux"
export const IncreamentCounter = () => {

    // get the initial value of state =>
    const counts = useSelector(_ => _.count)

    // dispatch actions to change in state =>
    const dispatch = useDispatch();

    const btnStyle = {
        border: "none",
        padding: "10px 17px",
        backgroundColor: "#00203FFF",
        color: "#ADEFD1FF",
        borderRadius: "8px"
    }

    return (
        <div className="counter-container" style={{ display: "flex", height: "100vh", flexDirection: "column", gap: "20px", justifyContent: "center", alignItems: "center" }}>

            <h3 className="counter-value" style={{ fontSize: "40px", fontWeight: "600" }}>{counts}</h3>

            <button style={btnStyle} onClick={() => {
                dispatch(
                    {
                        type: 'INCREMENT'
                    }
                )
            }}>Increament</button>
            <button style={btnStyle} onClick={() => {
                dispatch(
                    {
                        type: 'DECREMENT'
                    }
                )
            }}>Decreament</button>
        </div >
    )
}