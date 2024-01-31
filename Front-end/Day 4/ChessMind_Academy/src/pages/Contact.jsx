import '../styles/Contact.css'
function Contact(){
    return(
        <div className="contact-page-wrapper">
        <h1 className="primary-heading">Have Question In Mind?</h1>
        <h1 className="primary-heading">Let Us Help You</h1>
        <div className="contact-form-container">
        <input type="text" placeholder="Enter your email" />
        <button className="secondary-button">Submit</button>
        </div>
        </div>
    )
}
export default Contact;