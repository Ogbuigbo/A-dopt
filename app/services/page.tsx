import React from 'react'
import Header from '../_components/Header'
import Section from './Section'
import Hero from './Hero'

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