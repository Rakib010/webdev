import useAuth from "../../../hooks/useAuth";


const UserHome = () => {
    const { user } = useAuth();
    return (
        <div className="text-3xl">
            <span>Hi,Welcome</span>
            {user?.displayName? user?.displayName:'Back'}
        </div>
    );
};

export default UserHome;