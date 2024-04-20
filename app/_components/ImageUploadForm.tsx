"use client";

import { useForm } from "react-hook-form";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { uploadImageAction } from "@/actions/upload-image.action";

type FormValues = {
	image?: File;
};

export default function ImageUploadForm() {
	const form = useForm<FormValues>();

	async function onSubmit(values: FormValues) {
		const formData = new FormData();
		formData.append("image", values.image!);

		await uploadImageAction(formData);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="image"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Image</FormLabel>
							<FormControl>
								<Input
									{...field}
									required
									type="file"
									onChange={(event) => {
										field.onChange(event.target.files?.[0]);
									}}
									value={field.value?.fileName}
									accept="image/png, image/jpeg, image/webp"
								/>
							</FormControl>
							<FormDescription>Select image to upload</FormDescription>
						</FormItem>
					)}
				/>

				<Button disabled={form.formState.isSubmitting} type="submit">
					Upload
				</Button>
			</form>
		</Form>
	);
}
