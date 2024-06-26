// app/actions/upload-image.action.ts

"use server";

import "server-only";

import sharp from "sharp";
import { nanoid } from "nanoid";
import { parseAsync } from "valibot";

import { uploadFile } from "@/lib/storage";

import { UploadImageSchema } from "@/schemas/upload-image.schema";

export const uploadImageAction = async (formData: FormData) => {
	const formDataObject = Object.fromEntries(formData.entries());

	const data = await parseAsync(UploadImageSchema, formDataObject);

	const imageArrayBuffer = await data.image.arrayBuffer();
	const processedFile = await sharp(imageArrayBuffer).webp().toBuffer();

	const path = `images/${nanoid()}.webp`;
	await uploadFile(path, processedFile);

	const imageUrl = new URL(path, `https://${process.env.BUNNYCDN_CDN_HOST}/`);
};
