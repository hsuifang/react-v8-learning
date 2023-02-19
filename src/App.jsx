import { createRoot } from "react-dom/client";
import Details from "./Details";
import SearchParams from "./SearchParams";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: <In></In>,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter client={queryClient}>
      <QueryClientProvider>
        <header>
          <Link to="/">
            <h1>Adopt Me!</h1>
          </Link>
        </header>

        <Routes>
          <Route path="/" element={<SearchParams />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
