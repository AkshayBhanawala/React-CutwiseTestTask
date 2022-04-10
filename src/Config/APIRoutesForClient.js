const APIBasePaths = Object.freeze({
	auth: `https://cutwise.com/api/oauth/v2`,
	constants: `https://api.cutwise.com/v2/constants`,
	diamond: `https://api.cutwise.com/v4`,
});

const APIRoutesForClient = Object.freeze({
	getAccessToken: `${APIBasePaths.auth}/token`,
	getConstants: `${APIBasePaths.constants}/web`,
	getDiamonds: `${APIBasePaths.diamond}/diamond`,
});

export const APIRoutes = APIRoutesForClient;

export default APIRoutes;