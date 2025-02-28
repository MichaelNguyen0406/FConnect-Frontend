import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Default from "./Layouts/default";
import { Fragment } from "react";

function App() {
  return (
    <Routes>
      {routes.map((route, index) => {
        let Layout = Default;
        if (route.layout) {
          Layout = route.layout;
        } else if (route.layout === null) {
          Layout = Fragment;
        }
        const Page = route.component;

        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
