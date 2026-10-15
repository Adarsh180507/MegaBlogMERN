# MegaBlog

A modern, full-stack blogging platform built with React, Redux Toolkit, and Appwrite. This project demonstrates production-ready architecture, including global state management, secure routing, rich text editing, and custom abstraction layers for backend services.

## 🚀 Features

* **Complete Authentication System:** Secure login, signup, and logout flows managed by Appwrite Auth and synchronized with Redux global state.
* **Full CRUD Functionality:** Users can create, read, update, and delete blog posts. 
* **Rich Text Editor:** Integrated TinyMCE for advanced text formatting, embedded media, and rich content creation.
* **Image Management:** Seamless thumbnail image uploads, previews, and automated file deletion using Appwrite Storage.
* **Protected Routing:** Custom AuthLayout wrappers prevent unauthorized access to specific pages (e.g., hiding the "Add Post" route from guests).
* **Advanced Form Handling:** Built with `react-hook-form` utilizing `forwardRef` and background watcher subscriptions for dynamic data (like auto-generating URL slugs from titles).
* **Dark Mode UI:** A sleek, responsive dark theme built from the ground up with Tailwind CSS.

## 🛠 Tech Stack

* **Frontend:** React.js, React Router DOM
* **State Management:** Redux Toolkit (`useSelector`, `useDispatch`)
* **Backend / BaaS:** Appwrite (Auth, Database, Buckets)
* **Styling:** Tailwind CSS
* **Forms & Validation:** React Hook Form
* **Content Parsing:** `html-react-parser`, TinyMCE

## 🏗 Architecture Highlights

* **Singleton Service Pattern:** Backend logic is strictly decoupled from the UI. Appwrite SDK calls are encapsulated in modular class instances (`authService` and `appwriteService`), ensuring the UI never interacts directly with the database.
* **Reusable UI Components:** Features a highly modular component structure including `Container`, `Button`, `Input` (with `useId` and `forwardRef`), and `Select`.
* **Single-Source Form Components:** The `PostForm` component intelligently handles both the *Creation* and *Updating* of blog posts within a single file.

## ⚙️ Environment Variables

To run this project, you will need to create a `.env` file in your root directory and add your Appwrite configuration variables. 

```env
VITE_APPWRITE_URL="[https://cloud.appwrite.io/v1](https://cloud.appwrite.io/v1)"
VITE_APPWRITE_PROJECT_ID="your-project-id"
VITE_APPWRITE_DATABASE_ID="your-database-id"
VITE_APPWRITE_COLLECTION_ID="your-collection-id"
VITE_APPWRITE_BUCKET_ID="your-bucket-id"
