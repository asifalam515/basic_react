
const Counter = ({handleCounter,addFive}) => {
    return (
        <div>
            <button onClick={handleCounter}>Increase</button>
            <button onClick={()=>addFive(5)}>addFive</button>
        </div>
    );
};

export default Counter;