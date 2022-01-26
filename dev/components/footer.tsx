// import FooterContact from "./footerContact"
// import Signup from "./signup"
// import Logos from "./logos/logos"
// import FooterLinks from "./footerLinks"
// import "../scss/footer.scss"

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
{/*         <FooterContact /> */}
        <div className="footerRight">
{/*           <Signup />
          <Logos />
          <FooterLinks /> */}
        </div>
        <p className="smallCopy">&copy; Mid Wales Arts {currentYear}</p>
      </div>
    </footer>
  )
}

export default Footer
