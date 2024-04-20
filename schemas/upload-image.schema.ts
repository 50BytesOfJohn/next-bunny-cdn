// app/schemas/upload-image.schema.ts

import * as v from "valibot";

export const UploadImageSchema = v.object({
	image: v.instance(File, [
		v.mimeType(["image/jpeg", "image/png", "image/webp"]),
	]),
});
