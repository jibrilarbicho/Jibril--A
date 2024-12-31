import React from "react";

export default function Experience() {
  return (
    <>
      <section className="experiences top bg-gray-100 py-12" id="Skills">
        <div className="container mx-auto px-4">
          <div className="heading text-center mb-10">
            <h4 className="text-xl text-blue-500 mb-8">
              Here you will find the skills I have acquired and the technologies
              I use.
            </h4>
            <h1 className="text-3xl font-bold text-gray-800">Skills</h1>
          </div>

          <div className="flex justify-center items-center">
            <div className=" w-full max-w-5xl">
              <div className="w-full">
                {/* Programming Languages Section */}
                <div>
                  <h4 className="text-blue-400 mb-3">Programming Languages</h4>
                  <div className="flex justify-between space-x-4">
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group bg-[#ecf0f3] hover:bg-[#d1d8e0] text-gray-800 hover:text-gray-600 p-4 rounded-full transition duration-300 ease-in-out"
                    >
                      <div className="border-4 border-white rounded-full shadow-lg p-2 group-hover:shadow-2xl">
                        <img
                          src="/image/Logo/JavaScript-logo.png"
                          alt="JavaScript"
                          className="w-16 h-16 rounded-full"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-500 text-xl font-semibold">
                        JavaScript
                      </div>
                    </a>
                    <a
                      href="https://www.python.org/doc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group bg-[#ecf0f3] hover:bg-[#d1d8e0] text-white hover:text-gray-200 p-4 rounded-full transition duration-300 ease-in-out"
                    >
                      <div className="border-4 border-white rounded-full shadow-lg p-2 group-hover:shadow-2xl">
                        <img
                          src="/image/Logo/Python-logo-notext.svg.png"
                          alt="Python"
                          className="w-16 h-16 rounded-full"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-500 text-xl font-semibold">
                        Python
                      </div>
                    </a>
                  </div>
                </div>

                {/* Frontend Development Section */}
                <div>
                  <h4 className="text-blue-400 mt-6 mb-3">
                    Frontend Development
                  </h4>
                  <div className="flex justify-between space-x-4">
                    <a
                      href="https://reactjs.org/docs/getting-started.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group bg-[#ecf0f3] hover:bg-[#d1d8e0] text-white hover:text-gray-200 p-4 rounded-full transition duration-300 ease-in-out"
                    >
                      <div className="border-4 border-white rounded-full shadow-lg p-2 group-hover:shadow-2xl">
                        <img
                          src="/image/Logo/react-1-logo-svg-vector.svg"
                          alt="React"
                          className="w-16 h-16 rounded-full"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-500 text-xl font-semibold">
                        React
                      </div>
                    </a>
                    <a
                      href="https://redux.js.org/introduction/getting-started"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group bg-[#ecf0f3] hover:bg-[#d1d8e0] text-white hover:text-gray-200 p-4 rounded-full transition duration-300 ease-in-out"
                    >
                      <div className="border-4 border-white rounded-full shadow-lg p-2 group-hover:shadow-2xl">
                        <img
                          src="/image/Logo/redux.svg"
                          alt="Redux"
                          className="w-16 h-16 rounded-full"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-500 text-xl font-semibold">
                        Redux
                      </div>
                    </a>
                    <a
                      href="https://tailwindcss.com/docs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group bg-[#ecf0f3] hover:bg-[#d1d8e0] text-white hover:text-gray-200 p-4 rounded-full transition duration-300 ease-in-out"
                    >
                      <div className="border-4 border-white rounded-full shadow-lg p-2 group-hover:shadow-2xl">
                        <img
                          src="/image/Logo/tailwind logo.png"
                          alt="Tailwind"
                          className="w-16 h-16 rounded-full"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-500 text-xl font-semibold">
                        Tailwind
                      </div>
                    </a>
                  </div>
                </div>

                {/* Backend Development Section */}
                <div>
                  <h4 className="text-blue-400 mt-6 mb-3">
                    Backend Development
                  </h4>
                  <div className="flex justify-between space-x-4">
                    <a
                      href="https://nodejs.org/en/docs/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group bg-[#ecf0f3] hover:bg-[#d1d8e0] text-white hover:text-gray-200 p-4 rounded-full transition duration-300 ease-in-out"
                    >
                      <div className="border-4 border-white rounded-full shadow-lg p-2 group-hover:shadow-2xl">
                        <img
                          src="/image/Logo/nodejs.png"
                          alt="Node.js"
                          className="w-16 h-16 rounded-full"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-500 text-xl font-semibold">
                        Node.js
                      </div>
                    </a>
                    <a
                      href="https://www.djangoproject.com/start/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group bg-[#ecf0f3] hover:bg-[#d1d8e0] text-white hover:text-gray-200 p-4 rounded-full transition duration-300 ease-in-out"
                    >
                      <div className="border-4 border-white rounded-full shadow-lg p-2 group-hover:shadow-2xl">
                        <img
                          src="/image/Logo/django logo.png"
                          alt="Django"
                          className="w-16 h-16 rounded-full"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-500 text-xl font-semibold">
                        Django
                      </div>
                    </a>
                  </div>
                </div>

                {/* Machine Learning Section */}
                <div>
                  <h4 className="text-blue-400 mt-6 mb-3">Machine Learning</h4>
                  <div className="flex justify-between space-x-4">
                    <a
                      href="https://pytorch.org/docs/stable/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group bg-[#ecf0f3] hover:bg-[#d1d8e0] text-white hover:text-gray-200 p-4 rounded-full transition duration-300 ease-in-out"
                    >
                      <div className="border-4 border-white rounded-full shadow-lg p-2 group-hover:shadow-2xl">
                        <img
                          src="/image/Logo/pytorch logo.webp"
                          alt="PyTorch"
                          className="w-16 h-16 rounded-full"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-500 text-xl font-semibold">
                        PyTorch
                      </div>
                    </a>
                    <a
                      href="https://www.tensorflow.org/api_docs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group bg-[#ecf0f3] hover:bg-[#d1d8e0] text-white hover:text-gray-200 p-4 rounded-full transition duration-300 ease-in-out"
                    >
                      <div className="border-4 border-white rounded-full shadow-lg p-2 group-hover:shadow-2xl">
                        <img
                          src="/image/Logo/Tensorflow.png"
                          alt="TensorFlow"
                          className="w-16 h-16 rounded-full"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-500 text-xl font-semibold">
                        TensorFlow
                      </div>
                    </a>
                    <a
                      href="https://www.langchain.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group bg-[#ecf0f3] hover:bg-[#d1d8e0] text-white hover:text-gray-200 p-4 rounded-full transition duration-300 ease-in-out"
                    >
                      <div className="border-4 border-white rounded-full shadow-lg p-2 group-hover:shadow-2xl">
                        <img
                          src="/image/Logo/LangChain-Logo.png"
                          alt="LangChain"
                          className="w-16 h-16 rounded-full"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-500 text-xl font-semibold">
                        LangChain{" "}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
