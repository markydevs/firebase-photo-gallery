const UploadForm = () => {
	return (
		<div className="text-center mt-10">
			<form className="flex items-center flex-col gap-8">
				<input
					type="file"
					className="file-input file-input-bordered w-full max-w-xs"
				/>
				<button className="gap-3 btn">
					Upload <span>🚀</span>
				</button>
			</form>
		</div>
	);
};

export default UploadForm;
