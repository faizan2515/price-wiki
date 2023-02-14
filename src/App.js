import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, AboutUs, ContactUs, Error, Compare, Category } from "./pages";
import Layout from "./components/Layout";
import withAppProvider from "./withAppProvider";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="compare" element={<Compare />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default withAppProvider(App);
