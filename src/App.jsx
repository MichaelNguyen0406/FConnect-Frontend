import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import PublicRoute from "./routes/PublicRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
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

        // Kiểm tra route có cần bảo vệ hay không
        if (route.protected) {
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <ProtectedRoute>
                  <Layout>
                    <Page />
                  </Layout>
                </ProtectedRoute>
              }
            />
          );
        }

        // Route không cần bảo vệ
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <PublicRoute>
                <Layout>
                  <Page />
                </Layout>
              </PublicRoute>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
