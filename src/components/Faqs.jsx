import Image from 'next/image'
import { useState } from 'react'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'

export default function Example() {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const [isLoading, setIsLoading] = useState(false)
  const [submissionFeedback, setSubmissionFeedback] = useState('')
  const [errors, setErrors] = useState({})
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false)

  function submitForm(event) {
    event.preventDefault()

    let formErrors = {}

    // Check required fields
    if (!fname.trim()) formErrors.fname = 'First name is required'
    if (!lname.trim()) formErrors.lname = 'Last name is required'
    if (!email.trim()) formErrors.email = 'Email is required'
    if (!message.trim()) formErrors.message = 'Message is required'

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return // Stop form submission
    } else {
      setErrors({}) // Clear errors
      // Proceed with form submission (fetch call)
    }
    setIsLoading(true) // Start loading
    setSubmissionFeedback('') // Reset submission feedback

    // Get current date and time
    const now = new Date()
    const date = now.toISOString() // Format as an ISO string

    const form = {
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      message: message,
      submittedAt: date,
    }
    fetch('/api/save-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        console.log(data)
        setIsSubmittedSuccessfully(true)
        setSubmissionFeedback('Form submitted successfully!') // Success feedback
        setFname('')
        setLname('')
        setEmail('')
        setPhone('')
        setMessage('')
      })
      .catch((error) => {
        console.error(error)
        setSubmissionFeedback('Failed to submit form. Please try again.') // Error feedback
      })
      .finally(() => setIsLoading(false)) // End loading regardless of outcome
  }

  function handleSubmit(event) {
    event.preventDefault()

    let formErrors = {}

    // Check required fields
    if (!fname.trim()) formErrors.fname = 'First name is required'
    if (!lname.trim()) formErrors.lname = 'Last name is required'
    if (!email.trim()) formErrors.email = 'Email is required'
    if (!message.trim()) formErrors.message = 'Message is required'

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return // Stop form submission
    } else {
      setErrors({}) // Clear errors
      // Proceed with form submission (fetch call)
    }
    setIsLoading(true) // Start loading
    setSubmissionFeedback('') // Reset submission feedback

    // Get current date and time
    const now = new Date()
    const date = now.toISOString() // Format as an ISO string

    const form = {
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      message: message,
      submittedAt: date,
    }
    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        console.log(data)
        setIsSubmittedSuccessfully(true)
        setSubmissionFeedback('Form submitted successfully!') // Success feedback
        setFname('')
        setLname('')
        setEmail('')
        setPhone('')
        setMessage('')
      })
      .catch((error) => {
        console.error(error)
        setSubmissionFeedback('Failed to submit form. Please try again.') // Error feedback
      })
      .finally(() => setIsLoading(false)) // End loading regardless of outcome
  }

  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pt-6 pb-6 sm:pt-8 lg:static lg:py-12 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              {/* <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
              </svg> */}
              <Image
                className="-translate-y-0/4 absolute top-0 left-1/2 max-w-none translate-x-[-30%]"
                src={backgroundImage}
                alt=""
                width={1558}
                height={946}
                unoptimized
              />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Contact
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-600">
              Want to participate in our research? Thank you for your interest
              in our lab! If you would like to participate in our research,
              please send us an email and we will get back to you as soon as
              possible.
            </p>
            <dl className="mt-6 space-y-3 text-sm leading-6 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  1151 Richmond St
                  <br />
                  London, ON N6A 3K7
                </dd>
              </div>
              {/* <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="tel:+1 (555) 234-5678"
                  >
                    SOMEONES PHONE NUMBERs
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="mailto:hello@example.com"
                  >
                    THE LAB EMAIL
                  </a>
                </dd>
              </div> */}
            </dl>
          </div>
        </div>
        <form
          action="#"
          method="POST"
          className="px-6 pb-6 pt-6 sm:pb-8 lg:py-12 lg:px-8"
          onSubmit={handleSubmit}
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-y-3 gap-x-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  First name <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    required
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.fname && (
                    <p className="text-red-500">{errors.fname}</p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Last name <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    required
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Phone number (optional)
                </label>
                <div className="mt-2">
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className="rounded-md bg-[#13BFD5] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#008CA2] focus-visible:outline align-middle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoading ? 'Submitting...' : 'Submit'}
              </button>
              {isSubmittedSuccessfully && (
                <svg
                  className="ml-2 h-6 w-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export function Faqs() {
  return (
    <section
      id="contact"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50"
    >
      {/* <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative"> */}
      {/* <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Contact
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
          Want to participate in our research?
Thank you for your interest in our lab! If you would like to participate in our research, please send us an email and we will get back to you as soon as possible.
          </p>
        </div> */}
      <Example />
      {/* </Container> */}
    </section>
  )
}
