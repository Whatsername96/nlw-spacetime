import axios from "axios";

export const api = axios.create({
	// baseURL: `http://192.168.15.4:3333`,
	baseURL: `http://${process.env.NEXT_PUBLIC_SERVER_IP_ADDRESS}:3333`,
});
