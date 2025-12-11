"use client";

import Image from "next/image";
import {
  BookOpenIcon,
  PencilIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  CalendarIcon,
  MapPinIcon,
  ClockIcon,
  UserGroupIcon,
  ChevronDownIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useState } from "react";

// FadeIn animation variant
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 to-orange-100 py-20 lg:py-32 overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-50 mix-blend-multiply filter"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-yellow-200 rounded-full blur-3xl opacity-50 mix-blend-multiply filter"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              >
                Spark Your Child’s <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                  Voice & Imagination
                </span>
              </motion.h1>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-lg text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0"
              >
                Join  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500"> Ally Jay Creative Writing Academy</span>, where kids ages <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">7–15 </span>discover the magic of storytelling, poetry, and performance in a fun, nurturing environment.
              </motion.p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <a
                  href="#register"
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
                >
                  Register Now
                </a>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-yellow-400 rounded-full filter blur-xl opacity-20 transform translate-x-4 translate-y-4"></div>
                {/* Placeholder for Hero Image */}
                <Image
                  src="/hero-kids.png"
                  alt="Happy African children writing and reading"
                  width={600}
                  height={600}
                  className="relative rounded-3xl shadow-2xl z-10 rotate-1 hover:rotate-0 transition duration-500"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About the Academy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-purple-100 p-4 rounded-full">
              <BookOpenIcon className="w-10 h-10 text-purple-600" />
            </div>
          </div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl font-bold text-gray-900 mb-6"
          >
            About Ally Jay Academy
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-lg text-gray-600 leading-relaxed"
          >
            We believe every child has a unique story to tell. Our academy is dedicated to nurturing that voice through creative exploration. We go beyond grammar, focusing on expression, confidence, and the joy of creating worlds with words. Tailored for young minds, our program makes writing an adventure, not a chore.
          </motion.p>
        </div>
      </section>

      {/* 3. What Children Will Learn (Curriculum Highlights) */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What They Will Learn</h2>
            <p className="text-gray-600">A journey through genres and creativity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Story Writing", icon: PencilIcon, color: "text-blue-500", bg: "bg-blue-100" },
              { title: "Poetry & Rhyme", icon: SparklesIcon, color: "text-pink-500", bg: "bg-pink-100" },
              { title: "Scriptwriting", icon: BookOpenIcon, color: "text-purple-500", bg: "bg-purple-100" },
              { title: "Performance", icon: UserGroupIcon, color: "text-orange-500", bg: "bg-orange-100" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 text-center"
              >
                <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
              </motion.div>
            ))}
          </div>
          {/* More curriculum items as list/badges below if needed, keeping it grid focused for now */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {["Dialogue Mastery", "Creative Thinking", "Weekly Challenges", "Anthology Publication"].map((tag, idx) => (
              <span key={idx} className="bg-white border border-gray-200 px-5 py-2 rounded-full text-gray-600 font-medium text-sm shadow-sm">
                ✨ {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Ally Jay Academy? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Expert Guidance", desc: "Taught by published authors and experienced educators who love kids.", icon: "🎓" },
              { title: "Confidence Building", desc: "We celebrate every idea, helping shy writers find their bold voices.", icon: "🚀" },
              { title: "Tangible Results", desc: "Students work towards publishing their own stories in our annual anthology.", icon: "📚" },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-orange-50 p-8 rounded-3xl border border-orange-100"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Program Details</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <UserGroupIcon className="w-6 h-6 text-yellow-400" />
                    <span className="text-lg">Ages 7–15 years old</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="w-6 h-6 text-yellow-400" />
                    <span className="text-lg">10-Week Certificate Program</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ClockIcon className="w-6 h-6 text-yellow-400" />
                    <span className="text-lg">Coming Soon</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPinIcon className="w-6 h-6 text-yellow-400" />
                    <span className="text-lg">Whatsapp GroupChat & Google Meet</span>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="text-5xl font-bold text-yellow-400 mb-2">NGN 5,000</div>
                <div className="text-purple-200 mb-6">for first 20 people</div>
                <button className="bg-yellow-400 text-purple-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition">
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Meet the Instructor */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 transform -translate-x-10"></div>
              <Image
                src="/writer.jpg"
                alt="Friendly Instructor"
                width={500}
                height={500}
                className="relative rounded-2xl shadow-xl z-10 mx-auto w-full max-w-xs md:max-w-sm h-[400px] object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Your Instructor</h2>
              <h3 className="text-xl text-purple-600 font-semibold mb-6">Ms. Harriet DM John</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Harriet is a passionate storyteller and educator with over 10 years of experience working with young writers. She believes that every child is a genius waiting to be discovered. Her sessions are filled with laughter, interactive games, and deep dives into the imagination. She has published 9 children's novels and loves helping students hold their very own first book.
              </p>
              <div className="text-gray-500 italic mb-6">"Teaching kids to write is about teaching them to think, feel, and fly."</div>

              {/* Social Media Links */}
              <div className="flex gap-4">
                {/* Instagram */}
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-600 transition-colors transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.011-4.849-.069-3.225-.149-4.771-1.664-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-colors transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/arit-john-425a5b2ba/"
                  className="text-gray-400 hover:text-blue-700 transition-colors transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Happy Parents & Students</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "My son used to hate writing, now he carries a notebook everywhere! Thank you Ally Jay!", author: "Sarah T., Parent" },
              { quote: "I loved making my own characters. It was so much fun!", author: "Jaden, Age 9" },
              { quote: "The best Saturday class ever. The teacher is super nice.", author: "Keyana, Age 11" },
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-yellow-100 relative"
              >
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-yellow-400 absolute top-6 left-6 opacity-50" />
                <p className="text-gray-700 italic mb-6 pt-6">"{t.quote}"</p>
                <div className="font-bold text-gray-900">{t.author}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Registration Section */}
      <section id="register" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-10 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start the Adventure?</h2>
            <p className="text-purple-100 mb-8 text-lg">Spaces are limited! Secure your child's spot for the upcoming term today.</p>
            <a
              href="https://forms.gle/VcCx5zuu44kSz1N66"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-purple-600 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1"
            >
              Fill Registration Form
            </a>
            <p className="mt-4 text-sm text-purple-200 opacity-80">Takes only 2 minutes</p>
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Do students need prior writing experience?", a: "Not at all! We welcome beginners and budding authors alike." },
              { q: "Is there homework?", a: "We give fun 'challenges', but they are optional and designed to be enjoyable, not stressful." },
              { q: "What materials do we need?", a: "Just a notebook, a favorite pen, and a big imagination! We provide the rest for physical classes." },

            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <QuestionMarkCircleIcon className="w-5 h-5 text-purple-500" />
                    <span className="font-semibold text-gray-800">{item.q}</span>
                  </div>
                  <ChevronDownIcon className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-600 pl-14">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

            {/* Left Section */}
            <div className="text-center md:text-left space-y-2">
              <h3 className="text-2xl font-bold text-white">Ally Jay Academy</h3>
              <p className="leading-relaxed">Inspiring the next generation of writers.</p>
            </div>

            {/* Middle Section */}
            <div className="text-center space-y-2">
              <p className="text-sm">
                Built by{" "}
                <a
                  href="https://thatdevelopergirl.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-gray-200 hover:text-white transition"
                >
                  thatdevelopergirl
                </a>
                <p className="text-sm">&copy; {new Date().getFullYear()} Ally Jay Academy</p>
                <p className="text-sm">All rights reserved.</p>
              </p>
            </div>

            {/* Right Section */}
            <div className="text-center md:text-right space-y-3">


              <a
                href="mailto:allyjaycreativewriters@gmail.com"
                className="hover:text-white transition flex justify-center md:justify-end items-center gap-2"
              >
                <span>allyjaycreativewriters@gmail.com</span>
              </a>

              <a
                href="tel:+2348137530125"
                className="hover:text-white transition flex justify-center md:justify-end items-center gap-2"
              >
                <span>+234 813 753 0125</span>
              </a>
            </div>

          </div>
        </div>
      </footer>

    </main>
  );
}
