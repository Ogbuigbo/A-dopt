import React from 'react'
import Header from '../_components/Header'
import Section from './Section'
import Hero from './Hero'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "A-Dopt International Services Limited",
  description:
      "A-Dopt International Services Limited is a leading engineering consultancy firm, delivering cutting-edge solutions that drive sustainable growth. Since 2009, we have set industry standards with high-quality, timely services aligned with our clients' strategic goals, expanding into global markets.",
}

function page() {
  return (
    <div>
      <Header/>
      <Hero />
      <Section />
    </div>
  )
}

export default page



// setErrors(errors);
  
// if (Object.keys(errors).length > 0) {
//   trackFormError("Free Invoice Form Error");

//   const formContainer = document.getElementById("form-container");
//   if (formContainer) {
//     window.scrollTo({
//       top: formContainer.offsetTop,
//       behavior: "smooth",
//     });
//   }
// } else {
//   // Proceed if no errors
//   trackFormSubmit("Free Invoice Form Submission");
//   if (validateBankInputs()) {
//     if (formData.currency !== "NGN") {
//       handleDownloadPdf();
//     } else {
//       setShowAuthModal(true);
//     }
//   }
// }
// };