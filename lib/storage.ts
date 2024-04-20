// lib/storage.ts

import "server-only";

const BUNNY_STORAGE_API_HOST = "storage.bunnycdn.com";

export const uploadFile = async (path: string, file: Buffer) => {
	const uploadFileUrl = new URL(
		`/${process.env.BUNNYCDN_STORAGE_ZONE}/${path}`,
		`https://${BUNNY_STORAGE_API_HOST}`,
	);

	await fetch(uploadFileUrl, {
		method: "PUT",
		headers: {
			AccessKey: process.env.BUNNYCDN_API_KEY,
			"Content-Type": "application/octet-stream",
		},
		body: file,
	});
};
