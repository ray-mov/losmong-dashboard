const config = {
  appwrite_project_id: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwrite_database_id: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwrite_storage_id: String(import.meta.env.VITE_APPWRITE_STORAGE_ID),
  appwrite_product_collection_id: String(import.meta.env.VITE_APPWRITE_PRODUCT_COLLECTION_ID)
}

export default config