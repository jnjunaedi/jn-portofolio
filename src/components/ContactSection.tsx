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
        <a href="">
          <img src={github} alt="github" className="w-7" />
        </a>
        <a href="">
          <img src={ig} alt="ig" className="w-7" />
        </a>
        <a href="">
          <img src={x} alt="x" className="w-7" />
        </a>
        <a href="">
          <img src={yt} alt="yt" className="w-7" />
        </a>
        <a href="">
          {' '}
          <img src={linkedin} alt="linkedin" className="w-7" />
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
