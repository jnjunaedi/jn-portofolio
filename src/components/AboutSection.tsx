function AboutSection() {
  return (
    <section id="about" className="mt-16 px-3">
      <h1 className="text-xl font-semibold">About me</h1>
      <div className="mt-5">
        <p>Hello! I am Jujun Junaedi, a vocational high school SMK graduate specializing in Software and Game Development or what is also known as Software Engineering.</p>
        <p className="mt-2">
          I have a strong interest in building applications using native Go because I value simplicity; to me, code that doesn't rely on frameworks is far easier to maintain and offers full control over the implementation. That said, I am
          certainly open to using third-party libraries to streamline the development process.
        </p>
        <p className="mt-2">I am highly consistent in applying Clean Architecture patterns and microservices using gRPC, particularly with the technology I use: Go Golang.</p>
      </div>
    </section>
  );
}

export default AboutSection;
