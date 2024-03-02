import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const name = e.currentTarget.name.value;
        const email = e.currentTarget.email.value;
        const message = e.currentTarget.message.value;

        console.log(name, email, message);

        emailjs
            .sendForm('service_9reh5e8', 'template_x1apj6n', form.current, {
                publicKey: '3lYQouj1M7ssavxnw',
            })
            .then(
                toast.success('Successfully email sent!')
            ).catch((err) => {
                toast.error(err.text);
            })
    };


    return (
        <section id="contact" className="py-6 bg-gray-50 text-gray-900">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold text-gray-500">Get in touch</h1>
                    <p className="pt-2 pb-4 text-gray-400">Fill in the form to start a conversation</p>
                    <div className="space-y-4">
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            <span>Dhaka, Bangladesh</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span>+8801634468473</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span>fkhridoy4321@gmail.com</span>
                        </p>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                    <label className="block">
                        <span className="mb-1">Full name</span>
                        <input type="text" placeholder="Fazlul Karim" name="name" className="p-3 block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-gray-100" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Email address</span>
                        <input type="email" placeholder="hridoy.cse98@gmail.com" name="email" className="p-3 block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-gray-100" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Message</span>
                        <textarea rows="3" placeholder="Write your message here..." name="message" className="p-3 block w-full rounded-md focus:ring focus:ri focus:ri bg-gray-100"></textarea>
                    </label>
                    <button
                        type="submit"
                        className="cursor-pointer focus:hidden self-end px-8 py-3 text-lg rounded border border-sky-600 text-black hover:bg-sky-600 hover:text-white hover:transition-all hover:duration-300">
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;