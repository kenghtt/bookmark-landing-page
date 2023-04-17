import {useState} from "react";
import validator from "validator";

function ContactUsForm() {
    const [isValidEmail, setIsValidEmail] = useState(true);

    const validateEmail = (e) => {
        var email = e.target.parentElement.querySelector('input').value


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
            <div className="grid grid-rows-3 text-center pb-[5%] ">
                <div className="mt-20">
                    <p className="text-white">35,000+ ALREADY JOINED</p>
                </div>
                <div className="mt-14">
                    <h1 className="text-white font-medium ">Stay up-to-date with what we're doing</h1>
                </div>
                <section className="mt-14 h-[100%]" onSubmit='return false'>
                    <form className='h-[100%]'>
                        <input type="email" className="py-2 px-2 border-2 border-white rounded mr-3" id="lname"
                               name="lname" placeholder="Enter your email address" />
                        {/*<span className="text-xs text-red-700" id="passwordHelp">Your password is too short.</span>*/}

                        <button type='button'  onClick={e => validateEmail(e)} className="py-2 btn btn-primary self-center bg-red-500 ">Contact Us
                        </button>
                    </form>
                </section>
            </div>

        </div>
    )
}

export default ContactUsForm