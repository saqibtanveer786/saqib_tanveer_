'use client';
import React, { useState } from 'react';

export default function Contact({ onSubmit, check }) {
  const [email, setEmail] = useState()
  const [data, setData] = useState()

  // async function callApi(e) {
  //   e.preventDefault()
  //   const url = `http://localhost:3000/api/submail`
  //   const response = await fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(email)
  //   })
  //   const jsonResponse = await response.json()
  //   console.log(jsonResponse)
  // }

  async function collectData(e) {
    e.preventDefault()
    setData({ ...data, [e.target.name]: e.target.value })
  }

  async function sendData(e) {
    e.preventDefault()
    const url = process.env.SUBMIT_FORM || `http://localhost:3000/api/contactformdata`
    const responseData = await fetch(url, {
      method: 'post',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data)
    })
    const response = await responseData.json()
    if (response.message === 'Saved Successfully') {
      const showMessage = document.getElementById('showMessage')
      showMessage.classList.remove('hidden')
      showMessage.innerText = response.message
    }
  }

  return (
    <>
      <section className="text-gray-600 body-font relative" id="contact">
        <div className="container px-4 pt-24 mx-auto w-[90%]">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Let me know how can I help you.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form className="flex flex-wrap -m-2" >

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={collectData}
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => {
                      e.preventDefault();
                      setEmail(e.target.value);
                      collectData(e)
                    }}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    onChange={collectData}
                  ></textarea>
                  <p id='showMessage' className='hidden'></p>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  className="cursor-pointer flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                  onClick={sendData}
                >Submit</button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-blue-500">elven5055@email.com</a>
                <p className="leading-normal my-5">
                  At front of baldher railway station.
                  <br />
                  Haripur KPK Pakistan, 22584
                </p>
              </div>
            </form>

          </div>
        </div>
      </section>
    </>
  );
}
