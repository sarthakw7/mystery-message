<h1 align="center">Mystery Message 🤫</h1>

<p align="center">
  A full-stack anonymous feedback application built with Next.js, MongoDB, and TypeScript.
</p>

## ✨ Key Features

*   **🔐 Secure User Auth**: Full sign-up and sign-in flow with Next Auth.
*   **📧 OTP Email Verification**: Verify users with a custom OTP system.
*   **🤫 Receive Anonymous Messages**: Share a unique public link to get feedback.
*   **📊 Personal Dashboard**: View and manage all received messages.
*   **🤖 AI Message Suggestions**: OpenAI integration to help users write messages.

## 🛠️ Project Status

This project is currently in development. My progress is tracked below.

### ✅ Completed Features

*   **Project Setup**: Initialized Next.js project with TypeScript.
*   **UI Foundation**: Integrated Shadcn UI for components.
*   **Database**: Connected to MongoDB and set up schemas.
*   **Authentication Core**: Implemented Next Auth for session management.
*   **User Signup**: Built the initial user registration and OTP generation logic.

### 🚀 To-Do Features

*   **Verify User Account** with OTP.
*   **Implement Sign-in** logic.
*   **Add Frontend Validation** using Zod.
*   **Check Username Uniqueness** with debouncing.
*   **Build the Message API** (send, receive, delete).
*   **Develop the User Dashboard** to display messages.
*   **Create the Public Profile Page**.
*   **Integrate OpenAI** for message suggestions.
*   **Finalize and Deploy**.

## 🚀 Getting Started

1.  **Clone the repository**
    ```
    git clone https://github.com/your-username/mystery-message.git
    cd mystery-message
    ```

2.  **Install dependencies**
    ```
    npm install
    ```

3.  **Set up your environment**
    Create a `.env.local` file and add the following variables:
    ```
    MONGODB_URI=your_mongodb_uri
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your_nextauth_secret
    RESEND_API_KEY=your_resend_api_key
    OPENAI_API_KEY=your_openai_api_key
    ```

4.  **Run the development server**
    ```
    npm run dev
    ```
