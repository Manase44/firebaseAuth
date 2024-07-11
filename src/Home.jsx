import { auth } from "./auth";
import { signOut } from "firebase/auth";

const Home = () => {
  const handleLogout = async () => {
    try {
      const response = await signOut(auth);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default Home;
