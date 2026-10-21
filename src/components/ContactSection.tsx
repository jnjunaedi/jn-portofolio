import x from "../assets/x.png"
import yt from "../assets/youtube.png"
import ig from "../assets/instagram.png"
import linkedin from "../assets/linkedln.png"
import github from "../assets/github.png"


function ContactSection() {
  return (
    <section id="contacts" className="mt-16 mx-3">
      <h1 className="text-lg font-semibold">Contacts</h1>
      <div className="flex mt-5 gap-5">
        <a href="https://github.com/jnjunaedi">
          <img src={github} alt="github" className="w-7" />
        </a>
        <a href="https://www.instagram.com/jnjunaedi/">
          <img src={ig} alt="ig" className="w-7" />
        </a>
        <a href="https://x.com/jnjunaedi_">
          <img src={x} alt="x" className="w-7" />
        </a>
        <a href="https://www.youtube.com/@jnjunaedi">
          <img src={yt} alt="yt" className="w-7" />
        </a>
        <a href="https://www.linkedin.com/in/jujun-junaedi-36b3833a2/">
          <img src={linkedin} alt="linkedin" className="w-7" />
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
