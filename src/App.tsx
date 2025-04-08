import { AuthProvider } from "./context/AuthContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./styles/app.scss";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
