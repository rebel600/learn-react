export const gitHubInfo = async () => {
	const response = await fetch("https://api.github.com/users/rebel600");
	return response.json();
};
