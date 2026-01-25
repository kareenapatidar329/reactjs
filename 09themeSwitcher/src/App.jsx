import React from "react";
import { ThemeProvider } from "./context/theme.jsx";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import "./App.css";

function AppContent() {
  return (
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
        <ThemeBtn />
      </div>
      <div className="w-full max-w-sm mx-auto">
        <Card />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
