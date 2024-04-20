// app/page.tsx

import ImageUploadForm from "./_components/ImageUploadForm";

export default function Home() {
	return (
		<main className="max-w-xl mx-auto mt-20">
			<h1 className="text-xl">Upload image to hop-hop</h1>
			<hr className="my-4" />

			<ImageUploadForm />
		</main>
	);
}
