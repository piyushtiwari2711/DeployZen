import { Mail, Linkedin, Twitter, Instagram } from "lucide-react";
import { useState } from "react";
import { addContactForm } from "../Config/appwrite";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { firstName, lastName, email, subject, message } = formData;

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      alert("All fields are required!");
      return;
    }

    try {
      const name = `${firstName} ${lastName}`;
      await addContactForm(name, email, subject, message);
      alert("Form submitted successfully!");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (err) {
      console.error(err);
      alert("An error occurred while submitting the form.");
    }
  }

  return (
    <section id="contact" className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your deployment process? Let's talk about how we can help
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              <div className="space-y-6">
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">web.deployzen@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <a
                      href="https://www.instagram.com/deployzen?igsh=azYxM2JlYjBkdjh0"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Instagram</p>
                    <p className="text-white">deployzen</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <a
                      href="https://www.linkedin.com/company/deployzen2711/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6 text-white" />
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <p className="text-white">DeployZen</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <a
                      href="https://x.com/deployzen"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-6 h-6 text-white" />
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Twitter</p>
                    <p className="text-white">@deployzen</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white">Send us a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300"
                    placeholder="John"
                    id="firstName"
                    name="firstName"
                    onChange={handleChange}
                    value={formData.firstName}
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300"
                    placeholder="Doe"
                    id="lastName"
                    name="lastName"
                    onChange={handleChange}
                    value={formData.lastName}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300"
                  placeholder="john@example.com"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300"
                  placeholder="How can we help you?"
                  id="subject"
                  name="subject"
                  onChange={handleChange}
                  value={formData.subject}
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                  id="message"
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={
                  !formData.firstName ||
                  !formData.lastName ||
                  !formData.email ||
                  !formData.subject ||
                  !formData.message
                }
                className={`w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg transform ${
                  (!formData.firstName ||
                  !formData.lastName ||
                  !formData.email ||
                  !formData.subject ||
                  !formData.message)
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:from-cyan-400 hover:to-blue-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                }`}
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
