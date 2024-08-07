"use client"

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function SignInPage(){
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn(){
        try {
            // Sign in to Firebase with GitHub authentication
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }
    async function handleSignOut(){
        try {
            // Sign out of Firebase
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <main>
            <header>
                <h1 className="text-3xl">Firebase Auth</h1>
            </header>
            {user ? (
                // user IS logged in
                <div>
                    {/* Display some of the user's information */}
                    <p>Welcome, {user.displayName} ({user.email})</p>
                    {/* <Link href="/week-8/shopping-list" className="hover:underline">Shopping List</Link> */}
                    <button onClick={handleSignOut} className="text-lg m-2 hover:underline">Sign Out</button>
                </div>
            ) : (
                // user IS NOT logged in
                <div>
                    <button onClick={handleSignIn} className="text-lg m-2 hover:underline hover:text-blue-400">Sign In</button>
                </div>
            )}

            <Link href="/week-8/shopping-list" className="hover:underline hover:text-blue-400 text-lg m-2"> Shopping List</Link>
        </main>
    )
}

