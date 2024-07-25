import { AppRountes } from "./routes"
import { useState, useEffect } from 'react';


function App() {
  const query = '(max-width: 986px)';
  const [minimumSize, setMinimumSize] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setMinimumSize(mediaQueryList.matches);

    mediaQueryList.addEventListener('change', documentChangeHandler);

    return () => {
      mediaQueryList.removeEventListener('change', documentChangeHandler);
    };
  }, [query]);

  if (minimumSize) {
    return (
      <div className="flex h-screen justify-center items-center ">
        <h1 className="text-3xl font-bold text-primary text-center">
          Ops...
          <br/>Ainda estamos trabalhando na responsividade do site.
          <br/>Por favor, visualize-o numa tela maior 💻
        </h1>
      </div>
    );
  }

  return (
    <>
      <AppRountes/>
    </>
  )
}

export default App
