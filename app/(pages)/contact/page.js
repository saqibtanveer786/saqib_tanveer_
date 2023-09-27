"use client"
import Contact from '@/components/Contact';
import React from 'react';

export default function page() {
  let data
  async function collectData(e) {
    e.preventDefault()
    data = { ...data, [e.target.name]: e.target.value }
  }

  return (
    <section className="text-gray-600 body-font relative">
      <Contact />
    </section >)
}
