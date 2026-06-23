import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import Loading from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

let hasLoadedGlobal = false;

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(() => {
    // Skip loading on mobile
    if (window.innerWidth <= 768) return false;
    // Skip loading if already loaded in this session
    if (hasLoadedGlobal) return false;
    return true;
  });
  const [loading, setLoading] = useState(0);

  const handleSetIsLoading = (state: boolean) => {
    setIsLoading(state);
    if (!state) {
      hasLoadedGlobal = true;
    }
  };

  const value = {
    isLoading,
    setIsLoading: handleSetIsLoading,
    setLoading,
  };
  useEffect(() => {}, []);

  useEffect(() => {}, [loading]);

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      {isLoading && <Loading percent={loading} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
