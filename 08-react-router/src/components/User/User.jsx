import { useParams } from "react-router-dom";

const User = () => {
	const {userid} = useParams();
	return <div className="p-4 text-center text-3xl text-gray-400">User: {userid}</div>;
};

export default User;
