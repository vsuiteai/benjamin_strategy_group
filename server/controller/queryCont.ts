import { firestore_db } from "~/server/firebase/firebase-admin";
import axios from "axios";

const get_query_by_query_id = async (query_id: string) => {
  let collection = firestore_db.collection("query_data");

  const doc = await collection.doc(query_id).get();
  if (!doc.exists) {
    console.log("No matching documents.");
    return null;
  }

  const data = doc.data();

  if (!data) {
    console.log("No matching documents.");
    return null;
  }

  const createdAt = data.created_at?.toDate(); // Firestore Timestamp to JS Date

  // Format date like "Date: January 1, 2022"
  const formattedDate = createdAt
    ? `${createdAt.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}`
    : "Date: Unknown";

  return {
    id: doc.id,
    ...data,
    formattedDate,
  };
};

const get_queries_by_client_uid = async (client_uid: string) => {
  let collection = firestore_db.collection("query_data");

  const snapshot = await collection
    .where("client.client_uid", "==", client_uid)
    .orderBy("created_at", "desc") // or "asc" for ascending
    .get();
  if (snapshot.empty) {
    console.log("No matching documents.");
    return { queries: [] };
  }

  const queries = snapshot.docs.map((doc) => {
    const data = doc.data();
    const createdAt = data.created_at?.toDate(); // Firestore Timestamp to JS Date

    // Format date like "Date: January 1, 2022"
    const formattedDate = createdAt
      ? `Date: ${createdAt.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}`
      : "Date: Unknown";

    return {
      id: doc.id,
      ...data,
      formattedDate,
    };
  });

  return queries;
};

const initiate_query_process = async (
  client_id: string,
  main_files: ClientUploadedFile[]
) => {
  const query_data = {
    client_id: client_id,
    main_files: main_files,
    execution_type: "execution_type",
  };
  try {
    await axios.post(
      "https://benjamin-strategy-group-analyzer-658359490298.us-central1.run.app/process-all-at-once",
      query_data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("query sent");
  } catch (error: any) {
    console.error("OpenAI API error:", error.response?.data || error.message);
    throw error;
  }
};

export {
  get_queries_by_client_uid,
  get_query_by_query_id,
  initiate_query_process,
};
