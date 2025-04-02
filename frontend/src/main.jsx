import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "./components/ui/sonner.jsx";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import {persistStore} from 'redux-persist';
import { PersistGate } from "redux-persist/integration/react";
const persistor = persistStore(store);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
      <App />
      <Toaster
        theme="light"
        richColors
        toastOptions={{
          classNames: {
            success: "bg-green-500 text-white",
            error: "bg-red-500 text-white",
          },
        }}
      />
      </PersistGate>
    </Provider>
  </StrictMode>
);
