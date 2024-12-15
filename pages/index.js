
import Map from "@/components/Map";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    {/* <Head>
      <title>Gym App</title>
      <meta name="description" content="welcome to gym app"></meta>
    </Head> */}
    <main className="p-8 bg-gradient-to-r from-red-600 to-black min-h-screen text-white">
      <h1 className="text-4xl font-extrabold text-center mb-8 animate__animated animate__fadeInUp">Welcome to Our Gym</h1>

      {/* Gym Photos Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-red-400 animate__animated animate__fadeIn animate__delay-1s">Explore Our Gym</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="transition-transform transform hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-2s">
            <Image
              src="/gym1.jpg"
              alt="Gym Image 1"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="transition-transform transform hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-3s">
            <Image
              src="/gym2.jpg"
              alt="Gym Image 2"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="transition-transform transform hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-4s">
            <Image
              src="/gym3.jpg"
              alt="Gym Image 3"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-red-400 animate__animated animate__fadeIn animate__delay-1s">Our Membership Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-black rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-2s">
            <h3 className="text-xl font-bold text-red-500 mb-2">Basic Plan</h3>
            <p className="mb-4 text-gray-400">Access to cardio equipment and weights.</p>
            <p className="text-lg font-semibold text-white mb-4">$20/month</p>
            <Link href="/register">
              <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-all duration-300">
                Register Now
              </button>
            </Link>
          </div>

          <div className="p-6 bg-black rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-3s">
            <h3 className="text-xl font-bold text-red-500 mb-2">Standard Plan</h3>
            <p className="mb-4 text-gray-400">Includes Basic Plan + group classes.</p>
            <p className="text-lg font-semibold text-white mb-4">$40/month</p>
            <Link href="/register">
              <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-all duration-300">
                Register Now
              </button>
            </Link>
          </div>

          <div className="p-6 bg-black rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-4s">
            <h3 className="text-xl font-bold text-red-500 mb-2">Premium Plan</h3>
            <p className="mb-4 text-gray-400">All features + personal training sessions.</p>
            <p className="text-lg font-semibold text-white mb-4">$60/month</p>
            <Link href="/register">
              <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-all duration-300">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Map/>

      {/* Register Section */}
      <div className="text-center mt-8 animate__animated animate__fadeIn animate__delay-5s">
        <p className="text-xl mb-4">Ready to join us and achieve your fitness goals?</p>
        <Link href="/register">
          <button className="bg-red-600 text-white py-3 px-6 rounded text-lg hover:bg-red-700 transition-all duration-300">
            Register Now
          </button>
        </Link>
      </div>

      {/* Footer Section */}
      <footer className="mt-16 text-center text-sm text-gray-300">
        <p>&copy; 2024 Gym Name. All rights reserved.</p>
      </footer>
    </main>
    </>
  );
}




