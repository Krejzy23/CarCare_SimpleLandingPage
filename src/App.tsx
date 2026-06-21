import { useEffect } from "react";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import BackgroundLayout from "./components/layout/BackgroundLayout";
import DeleteAccountPage from "./pages/DeleteAccountPage";
import HomePage from "./pages/HomePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import { getCurrentPage, type Page } from "./lib/routes";

const pageMeta: Record<Page, { title: string; description: string }> = {
  home: {
    title: "CarCare - Vehicle maintenance and ownership cost tracking",
    description:
      "CarCare helps drivers track service reminders, fuel history, mileage, documents and ownership costs in one private garage app.",
  },
  privacy: {
    title: "Privacy Policy - CarCare",
    description:
      "Privacy Policy for the CarCare mobile app, including account data, vehicle records, Firebase storage and deletion options.",
  },
  delete: {
    title: "Delete Account - CarCare",
    description:
      "Instructions for deleting a CarCare account and associated app data from the mobile app or by email request.",
  },
};

function App() {
  const page = getCurrentPage();

  useEffect(() => {
    document.title = pageMeta[page].title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", pageMeta[page].description);
    }
  }, [page]);

  return (
    <BackgroundLayout>
      <Navbar currentPage={page} />
      <main>
        {page === "home" && <HomePage />}
        {page === "privacy" && <PrivacyPolicyPage />}
        {page === "delete" && <DeleteAccountPage />}
      </main>
      <Footer />
    </BackgroundLayout>
  );
}

export default App;
