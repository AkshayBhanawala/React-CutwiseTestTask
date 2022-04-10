import Axios from "axios";
import APIRoutes from "../Config/APIRoutesForClient";
import CONFIG from "../Config/Config";

const testData = "NDRlZGFkMzk0YTEzNjlhZGJiNjU0MDg0MDM4ODk3NzZmYWRjMGI1NThlM2RmMWEzZDNjMzRmMmEzZTA0ZDUwYw";

export async function GetAccessToken() {
	const __func_name = "Services.Auth.GetAccessToken";
	const auth = CONFIG.Cutwise.Auth;
	return new Promise((resolve, reject) => {
		// Test Data
		const tdConfig = CONFIG.apiTestDataConfig;
		if (tdConfig.usage) {
			setTimeout(() => {
				if (tdConfig.mockError && Math.random() <= tdConfig.errorChances) {
					reject(new Error("TEST_ACCESS_TOKEN_ERROR"));
				} else {
					if (CONFIG.debug) console.log(__func_name, "testData:", testData);
					resolve(testData);
				}
			}, tdConfig.responseDelay);
			return;
		}

		// Actual Data Call
		Axios.get(APIRoutes.getAccessToken, {
			params: {
				grant_type: auth.grantType,
				client_id: auth.client_id,
				client_secret: auth.client_secret,
				username: auth.username,
				password: auth.password,
			}
		}).then((res) => {
			if (res && res.data && res.data.access_token) {
				if (CONFIG.debug) console.log(__func_name, "response:", res.data);
				resolve(res.data.access_token);
			} else {
				reject(new Error("DATA_NOT_RECEIVED"));
			}
		}).catch((err) => {
			console.error(__func_name, "error:", err);
			reject(err);
		});
	});
}

export default GetAccessToken;