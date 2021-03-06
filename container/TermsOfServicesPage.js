import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DefaultLayout from "../layout/DefaultLayout";
import TosText from "../components/TosText";
import ContactUs from "../components/ContactUs";

function TermsOfServices() {
  return (
    <>
      <Fragment>
        <Helmet>
          <title>{"FlowUs Terms Of Services"}</title>
        </Helmet>
        <DefaultLayout
          className="template-color-2 template-font-3 bg_color--4"
          revealFooter={true}
        >
          <Header />
          <TosText />
          <ContactUs />
        </DefaultLayout>
        <Footer />
      </Fragment>
    </>
  );
}

export default TermsOfServices;
