import {useState} from "react";
import validator from "validator";

function ContactUsForm() {
    const [isValidEmail, setIsValidEmail] = useState(true);

    let emailBorder = isValidEmail ? 'border-white' : 'border-red-500';
    let rounded = isValidEmail ? 'rounded' : 'rounded-t';
    const validateEmail = (e) => {
        var email = e.target.parentElement.parentElement.querySelector('input').value

        if (validator.isEmail(email)) {
            setIsValidEmail(true);
            console.log('Email Valid')
        } else {
            setIsValidEmail(false);
            console.log('Email Invalid')

        }
    };
    return (
        <div className="bg-softBlue   mt-[10%] w-auto">
            <div className="grid grid-rows-3 text-center pb-[3%] ">
                <div className="mt-28 md:mt-20">
                    <p className="text-white">35,000+ ALREADY JOINED</p>
                </div>
                <div className="mt-10">
                    <h1 className="text-white font-medium text-4xl ">Stay up-to-date with what we're doing</h1>
                </div>
                <section className="mt-5 h-[100%]" onSubmit='return false'>
                    <form className='grid sm:grid-rows-2  md:flex md:flex-row md:h-[100%] justify-center'>
                        <div className="grid grid-rows-2 relative self-center md:mr-3">
                            <input type="email"
                                   className={`py-2 pl-3 pr-[50px] border-2 border-white ${rounded} ${emailBorder}`}
                                   id="lname" name="lname" placeholder="Enter your email address"/>

                            {
                                !isValidEmail &&
                                [
                                    <span className="text-xs text-white bg-red-500 h-5 text-left pl-3 italic"
                                          id="passwordHelp">Whoops, make sure it's an email</span>,
                                    <img className='absolute right-2 top-3' src="../images/icon-error.svg"
                                         alt="error icon"/>
                                ]
                            }
                        </div>
                        <div className="grid grid-rows-2 self-center bottom-3 md:bottom-0 relative">
                            <button type='button' onClick={e => validateEmail(e)}
                                    className="py-2 btn btn-primary self-center bg-red-500  border-2 border-red-500 hover:text-red-500 ">
                                Contact Us
                            </button>
                        </div>
                    </form>
                </section>
            </div>

        </div>
    )
}

export default ContactUsForm