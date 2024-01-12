import { useLoaderData } from "react-router-dom";

const Github = () => {
	const data = useLoaderData();
	return (
		<div className="flex items-center justify-center gap-52 text-center m-4 bg-orange-700 text-white p-4 text-3xl">
			<img src={data.avatar_url} alt="Git picture" width={300} />
			<h3 className="font-semibold md:text-2xl text-center">
				Github followers: {data.followers + 10}k
			</h3>
		</div>
	);
};

export default Github;
