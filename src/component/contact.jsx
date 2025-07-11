import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineInstagram
} from "react-icons/ai";

export default function Contact() {
  const config = {
    email: "IT@gmail.com",
    phone: 123456789
  };

  const socialLinks = {
    Twitter: "",
    Instagram: "",
    LinkedIn: ""
  };

  return (
    <>
      <section
        id="contact"
        className="flex justify-center items-center bg-primary px-4 md:px-12 py-10 font-hero-font"
      >
        <div className="w-full max-w-2xl bg-white border-2 border-amber-400 rounded-lg shadow-md p-6 md:p-10 text-black">
          <h1 className="text-2xl md:text-3xl font-bold border-b-2 border-amber-400 inline-block mb-6">
            Contact
          </h1>
          <p className="text-gray-700 text-2xl mb-4">
            If you need more details, please contact me...
          </p>

          <div className="text-base md:text-lg space-y-2">
            <p>
              <span className="font-semibold text-black">Email:</span> {config.email}
            </p>
            <p>
              <span className="font-semibold text-black">Phone:</span> {config.phone}
            </p>
          </div>

          <p className="mt-6 text-lg font-medium">You can also reach me via:</p>

          <div className="flex flex-wrap gap-4 mt-4 text-3xl text-amber-700">
            <a
              href={socialLinks.Twitter}
              target="_blank"
              className="hover:text-black transition-transform hover:scale-110"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href={socialLinks.Instagram}
              target="_blank"
              className="hover:text-black transition-transform hover:scale-110"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href={socialLinks.LinkedIn}
              target="_blank"
              className="hover:text-black transition-transform hover:scale-110"
            >
              <AiOutlineLinkedin />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
