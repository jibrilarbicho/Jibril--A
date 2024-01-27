import React from "react";
import "./Experience.css";
export default function Experience() {
  return (
    <>
      <section className="experiences top" id="About">
        <div className="container">
          <div className="heading text-center">
            <h4>
              Here you will find more information about me, what I do, and my
              current skills
            </h4>
            <h1>About Me</h1>
          </div>

          <div className="content grid1 grid">
            <div className="Left">
              <h2 className=" text-blue-900 text-3xl mb-5">Get to know me!</h2>
              <p>
                I'm a passionate Website Developer and AI Enthusiast, driven by
                a love for solving problems through innovative programming. With
                a foundation built on innate talent and self-directed learning,
                I bring a unique perspective to every project. Actively engaged
                in the tech community, I'm currently exploring web development
                and artificial intelligence, eager to contribute to cutting-edge
                projects. My commitment to excellence and dedication fuels my
                desire to make a meaningful impact in the dynamic field of
                software engineering. Get to know me as I continue to evolve at
                the exciting intersection of technology and creativity."
              </p>
            </div>
            <div className="Right">
              <h2 className="text-blue-900 text-3xl mb-6">Technical Skills</h2>
              <div className="">
                <div>
                  <h4 className="text-blue-400 mb-3">Programming Languages</h4>
                  <div class="flex items-center ">
                    <div class="space-x-4">
                      <div class="flex items-center justify-center">
                        <div class="space-x-4">
                          <div class="flex items-center justify-center">
                            <div class="space-x-4">
                              <div class="flex items-center justify-center">
                                <div class="space-x-4">
                                  <button class="bg-yellow-500 hover:bg-yellow-400 text-gray-800 hover:text-gray-600 px-4 py-2 rounded transition duration-300 ease-in-out">
                                    JavaScript
                                  </button>
                                  <button class="bg-blue-500 hover:bg-blue-400 text-white hover:text-gray-200 px-4 py-2 rounded transition duration-300 ease-in-out">
                                    Python
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-blue-400 mt-3 mb-3">
                    Frontend Development
                  </h4>
                  <div class="flex items-center ">
                    <div class="space-x-4">
                      <div class="flex items-center justify-center">
                        <div class="space-x-4">
                          <div class="flex items-center justify-center">
                            <div class="space-x-4">
                              <div class="flex items-center justify-center">
                                <div class="space-x-4">
                                  <button class="bg-blue-600 hover:bg-blue-500 text-white hover:text-gray-200 px-4 py-2 rounded transition duration-300 ease-in-out">
                                    React
                                  </button>
                                  <button class="bg-purple-600 hover:bg-purple-500 text-white hover:text-gray-200 px-4 py-2 rounded transition duration-300 ease-in-out">
                                    Redux
                                  </button>
                                  <button class="bg-teal-500 hover:bg-teal-400 text-white hover:text-gray-200 px-4 py-2 rounded transition duration-300 ease-in-out">
                                    Tailwind
                                  </button>
                                  <button class="bg-indigo-500 hover:bg-indigo-400 text-white hover:text-gray-200 px-4 py-2 rounded transition duration-300 ease-in-out">
                                    Bootstrap
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-blue-400 mb-3 mt-3">
                    Backend Development
                  </h4>
                  <div class="flex items-center ">
                    <div class="space-x-4">
                      <div class="flex items-center justify-center">
                        <div class="space-x-4">
                          <div class="flex items-center justify-center">
                            <div class="space-x-4">
                              <div class="flex items-center justify-center">
                                <div class="space-x-4">
                                  <button class="bg-green-600 hover:bg-green-500 text-white hover:text-gray-200 px-4 py-2 rounded transition duration-300 ease-in-out">
                                    Node
                                  </button>
                                  <button className="bg-green-900 hover:bg-green-500 text-white hover:text-gray-200 px-4 py-2 rounded transition duration-300 ease-in-out">
                                    Django
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-blue-400 mb-3 mt-3">Databases</h4>
                  <div class="flex items-center ">
                    <div class="space-x-4">
                      <div class="flex items-center justify-center">
                        <div class="space-x-4">
                          <div class="flex items-center justify-center">
                            <div class="space-x-4">
                              <div class="flex items-center justify-center">
                                <div class="space-x-4">
                                  <button class="bg-green-500 hover:bg-green-400 text-white hover:text-gray-200 px-4 py-2 rounded transition duration-300 ease-in-out">
                                    MongoDB
                                  </button>
                                  <button class="bg-indigo-500 hover:bg-indigo-400 text-white hover:text-gray-200 px-4 py-2 rounded transition duration-300 ease-in-out">
                                    MySQL
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
