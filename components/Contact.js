'use client';
import React, { useContext, useState } from 'react';

import { submitForm } from '@/lib/ServerActions';
import { AlertContext, LoadingContext } from '@/lib/contexts';

export default function Contact({ onSubmit, check }) {
  const [email, setEmail] = useState()
  const [data, setData] = useState()


  // consuming the context
  const { isLoading, setIsLoading } = useContext(LoadingContext)
  const { setAlertMessage, setAlertStatus, setShowAlert } = useContext(AlertContext)

  // data collecter
  async function collectData(e) {
    e.preventDefault()
    setData({ ...data, [e.target.name]: e.target.value })
  }

  // form handler
  async function submitHandler(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await submitForm(data)
      if (response.status) {          // In case of success
        setShowAlert(true)
        setAlertMessage(response.message)
        setAlertStatus("success")
        setData({})
      }
      if (!response.status) {         // In case of error
        setShowAlert(true)
        setAlertMessage(response.message)
        setAlertStatus("error")
      }
    } catch (error) {
      setShowAlert(true)
      setAlertMessage(error.message)
      setAlertStatus("error")
    } finally {
      setIsLoading(false)
    }

  }

  return (
    <>
      <section className="text-gray-600 body-font relative" id="contact">
        <div className="container px-4 pt-24 mx-auto w-[90%]">

          {/* Headings */}
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

              {/* Name */}
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
                    value={data?.name || ""}
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={collectData}
                  />
                </div>
              </div>

              {/* Email */}
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
                    value={data?.email || ""}
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

              {/* Message Text Area */}
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
                    value={data?.message || ""}
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    onChange={collectData}
                  ></textarea>
                  <p id='showMessage' className='hidden'></p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="p-2 w-full">
                <button
                  id='submitForm'
                  disabled={(data?.name === "" || data?.email === "" || data?.message === "") || (data?.name === undefined || data?.email === undefined || data?.message === undefined)}
                  className={`${(data?.name === undefined || data?.email === undefined || data?.message === undefined) ? "bg-gray-400" : "bg-blue-500 focus:outline-none hover:bg-blue-600 cursor-pointer"} flex mx-auto text-white border-0 py-2 px-8 rounded text-lg`}
                  onClick={submitHandler}
                >{!isLoading ? "Submit" : "Sending...."}</button>
              </div>

              {/* Contact Info */}
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
