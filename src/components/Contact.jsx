import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Mail, MapPin, Phone, Send, MessageSquare, User } from "lucide-react";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm("service_9reh5e8", "template_x1apj6n", form.current, {
                publicKey: "3lYQouj1M7ssavxnw",
            })
            .then(() => {
                toast.success("Message sent successfully!");
                e.target.reset();
            })
            .catch((err) => {
                toast.error(err.text || "Failed to send message");
            });
    };

    return (
        <section id="contact" className="py-16 px-4 md:px-10 lg:px-20 bg-gray-50 dark:bg-[#121212]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2
                        data-aos="fade-up"
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Get in Touch
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="100" className="text-gray-600 dark:text-gray-400">
                        Let{"'"}s discuss your project or just say hello
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                    <div data-aos="fade-up" className="space-y-6">
                        <div className="bg-white dark:bg-[#1e1e1e] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                                        <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Location</p>
                                        <p className="text-gray-600 dark:text-gray-400">Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                                        <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                                        <p className="text-gray-600 dark:text-gray-400">+8801634468473</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                                        <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Email</p>
                                        <p className="text-gray-600 dark:text-gray-400">fkhridoy4321@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="bg-white dark:bg-[#1e1e1e] rounded-xl p-6 shadow-md">
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label className="flex gap-2 items-center text-gray-700 dark:text-gray-300 mb-2">
                                    <User className="w-4 h-4" />
                                    <span>Full Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-0 text-gray-900 dark:text-white"
                                />
                            </div>

                            <div>
                                <label className="flex gap-2 items-center text-gray-700 dark:text-gray-300 mb-2">
                                    <Mail className="w-4 h-4" />
                                    <span>Email Address</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-0 text-gray-900 dark:text-white"
                                />
                            </div>

                            <div>
                                <label className="flex gap-2 items-center text-gray-700 dark:text-gray-300 mb-2">
                                    <MessageSquare className="w-4 h-4" />
                                    <span>Message</span>
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    placeholder="Your message here..."
                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-0 text-gray-900 dark:text-white"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-600 hover:bg-gray-700 text-white font-medium transition-colors duration-300"
                            >
                                <Send className="w-4 h-4" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
