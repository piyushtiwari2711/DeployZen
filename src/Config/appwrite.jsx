import { Client, Databases, ID } from "appwrite";
if(!import.meta.env.VITE_APPWRITE_ENDPOINT || !import.meta.env.VITE_APPWRITE_PROJECT) {
    throw new Error("Appwrite environment variables are not set. Please check your .env file.");
}

// Configure Appwrite client
const client = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT);

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