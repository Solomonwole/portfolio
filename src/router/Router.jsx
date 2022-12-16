import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import HeaderNav from "../components/HeaderNav";
import { PageLayout } from "../layout/PageLayout";
import HomePage from "../pages/HomePage";

const RouterPage = () => {
  return (
    <>
      <Router>
        <PageLayout>
          <HeaderNav />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </PageLayout>
      </Router>
    </>
  );
};

export default RouterPage;
