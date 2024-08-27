import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import "virtual:uno.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GuessLayout from "./components/GuessLayout.tsx";
import GuessHome from "./components/GuessHome.tsx";
import GuessGame from "./components/GuessGame.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <GuessLayout />,
    children: [
      {
        path: "/",
        element: <GuessHome />,
      },
      {
        path: "/game",
        element: <GuessGame />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
