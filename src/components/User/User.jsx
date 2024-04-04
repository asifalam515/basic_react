

const User = ({user}) => {
    const{name,username,email}=user
    return (
        <div>
            <h3>Name: {name} </h3>
            <h4>UserName: {username} </h4>
            <p>Email: {email}</p>
        </div>
    );
};

export default User;