import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{height: '100vh', display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 20}}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message }</i>
      </p>
    </div>
  );
}