import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

type Image = {
	createdAt: Date;
	userEmail: string;
	imageUrl: string;
};

const useFirestore = (collectionName: string) => {
	const [docs, setDocs] = useState<Image[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		let unsubscribe: () => void;
		const getData = async () => {
			try {
				const q = query(
					collection(db, collectionName),
					orderBy("createdAt", "desc")
				);

				unsubscribe = onSnapshot(q, (querySnapshot) => {
					const images: Image[] = [];
					querySnapshot.forEach((doc) => {
						const data = doc.data();
						images.push({
							createdAt: data.createdAt.toDate(), // Convert Firestore Timestamp to Date
							userEmail: data.userEmail,
							imageUrl: data.imageUrl,
						});
					});
					setDocs(images);
					setIsLoading(false);
				});
			} catch (error) {
				console.error(error);
				setIsLoading(false);
			}
		};

		getData();
		return () => unsubscribe && unsubscribe();
	}, [collectionName]);

	return {
		docs,
		isLoading,
	};
};

export default useFirestore;
