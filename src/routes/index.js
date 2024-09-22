import { Routes, Route, HashRouter } from 'react-router-dom';

// Routes
import { publicRoutes } from './allRoutes';

const Index = () => {
  return (
    <HashRouter>
      <Routes>
        {publicRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={
              <div>
                {route.component}
              </div>
            }
            key={idx}
          />
        ))}
      </Routes>
    </HashRouter>
  );
}

export default Index;
