import './App.css';
import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function App() {
  return (
    <HelmetProvider>
      <div>
        {/* Routes nest inside one another. Nested route paths build upon
              parent route paths, and nested route elements render inside
              parent route elements. See the note about <Outlet> below. */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />

            {/* Using path="*"" means "match anything", so this route
                  acts like a catch-all for URLs that we don't have explicit
                  routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </HelmetProvider>
  );
}

function Layout() {
  return (
    <div>
      <Helmet>
        <title>React-Router-Helmet</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1>Web App with React-Router and React-Helmet-Async</h1>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <Helmet>
        <title>React-Router-Helmet: Home</title>

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@freekalmykia" />
        <meta name="twitter:creator" content="@AlSharp85" />
        <meta property="og:url" content="https://alsharp.github.io/router-helmet/" />
        <meta property="og:title" content="React-Router-Helmet: Home" />
        <meta property="og:description" content="Home page of React-Router-Helmet" />
        <meta property="og:image" content="https://reactrouter.com/ogimage.png" />

        <link rel="canonical" href="https://alsharp.github.io/router-helmet" />
      </Helmet>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <Helmet>
        <title>React-Router-Helmet: About</title>

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@freekalmykia" />
        <meta name="twitter:creator" content="@AlSharp85" />
        <meta property="og:url" content="https://alsharp.github.io/router-helmet/about" />
        <meta property="og:title" content="React-Router-Helmet: About" />
        <meta property="og:description" content="About page of React-Router-Helmet" />
        <meta property="og:image" content="https://crowdbotics.ghost.io/content/images/2019/07/react-router.jpg" />

        <link rel="canonical" href="https://alsharp.github.io/router-helmet/about" />
      </Helmet>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
        <Helmet>
          <title>React-Router-Helmet: Dashboard</title>

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@freekalmykia" />
          <meta name="twitter:creator" content="@AlSharp85" />
          <meta property="og:url" content="https://alsharp.github.io/router-helmet/dashboard" />
          <meta property="og:title" content="React-Router-Helmet: Dashboard" />
          <meta property="og:description" content="Dashboard page of React-Router-Helmet" />
          <meta property="og:image" content="https://remix.run/blog-images/headers/react-router-v6.3.0.jpg" />

          <link rel="canonical" href="https://alsharp.github.io/router-helmet/dashboard" />
        </Helmet>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
