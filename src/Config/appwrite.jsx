import { Client, Databases, ID } from "appwrite";

const APPWRITE_ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT?.trim();
const APPWRITE_PROJECT = (import.meta.env.VITE_APPWRITE_PROJECT || import.meta.env.VITE_APPWRITE_PROJECT_ID)?.trim();

if (!APPWRITE_ENDPOINT || !APPWRITE_PROJECT) {
    throw new Error("Appwrite environment variables are not set. Please check your .env file (VITE_APPWRITE_ENDPOINT and VITE_APPWRITE_PROJECT_ID).");
}

// Configure Appwrite client
const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT);

const databases = new Databases(client);

/**
 * Add contact form data to Appwrite
 * @param {string} name
 * @param {string} email
 * @param {string} subject
 * @param {string} message
 */
export async function addContactForm(name, email, subject, message) {
    try {
        const response = await databases.createDocument(
            import.meta.env.VITE_APPWRITE_DATABASE,
            import.meta.env.VITE_APPWRITE_COLLECTION,
            ID.unique(),
            { name, email, subject, message,createdAt: new Date().toISOString() }
        );
        console.log("✅ Document created:", response);
        return response;
    } catch (error) {
        console.error("❌ Error creating document:", error);
        throw error;
    }
}