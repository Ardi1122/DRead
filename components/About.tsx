import Image from "next/image";

const About = () => {
  return (
    <main className="px-8 sm:px-12 md:px-24 pt-32 pb-16">
      <section className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8 gap-x-24">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">About DecentraRead</h2>
          <p className="mb-6">
            DecentraRead is your gateway to the future of digital literature.
            Built on Web3 technology, our platform offers two unique paths: dive
            into the world of reading as a passionate reader or share your
            creativity as an author.
          </p>
          <p className="mb-6">
            For readers, enjoy seamless access to a decentralized library where
            every book and purchase is securely managed on the blockchain. For
            authors, DecentraRead empowers you to publish, sell, and maintain
            full ownership of your work—no intermediaries, just you and your
            audience. Step into a new era of storytelling where control,
            transparency, and creativity are at the core. DecentraRead isn’t
            just a library—it’s a movement.
          </p>
        </div>
        <img
          src="/images/App-library.png"
          alt="App Library"
          className="mx-auto mb-6 w-64 h-auto"
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black p-6 rounded-lg shadow">
          <h3 className="font-semibold text-xl text-white mb-2">
            Access Anywhere
          </h3>
          <p className="text-white">
            Discover a global library of books with transparent and secure
            transactions.
          </p>
        </div>
        <div className="bg-black p-6 rounded-lg shadow">
          <h3 className="font-semibold text-xl text-white mb-2">
            Freedom to Publish
          </h3>
          <p className="text-white">
            Publish your books with complete ownership and connect directly with
            readers.
          </p>
        </div>
        <div className="bg-black p-6 rounded-lg shadow">
          <h3 className="font-semibold text-xl text-white mb-2">
            Empowered by Web3
          </h3>
          <p className="text-white">
            Experience the future of digital libraries through decentralized
            innovation.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
