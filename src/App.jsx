import { auth, Gprovider, FBprovider } from "./auth";
import { signInWithPopup } from "firebase/auth";
import "./App.css";

function App() {
  const handleGoogleSigning = async () => {
    try {
      const response = await signInWithPopup(auth, Gprovider);
      console.log(response.user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFacebookSigning = async () => {
    try {
      const response = await signInWithPopup(auth, FBprovider);
      console.log(response.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signing-buttons">
      <h1>Sign in</h1>
      <button onClick={handleGoogleSigning}>sign in with google</button>
      <button onClick={handleFacebookSigning}>sign in with facebook</button>
    </div>
  );
}

export default App;
