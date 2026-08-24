"use client";

import React, { useState } from "react";
import Image from "next/image";

const faqs = [
  { q: "Who are the founders of Antellay?", a: "Antellay was founded in a modest residential basement by visionary enterprise architects Shrey Sharma and Vishwajeet Srivastava in 2018. Since then, we have grown into a global provider with over 400+ certified engineers." },
  { q: "What is your core expertise?", a: "We specialize in multi-cloud delivery, enterprise CRM strategy implementation, custom automation workflows, and we are a proud Salesforce Crest (Gold) consulting partner." },
  { q: "Can I attend future events virtually?", a: "Yes, all our global footprints and collaborations offer hybrid attendance options, allowing our worldwide community to tune in live." },
  { q: "How can my company collaborate with Antellay?", a: "You can schedule a free consultation through our portal, and our architect team will evaluate the synergy for technological partnerships." }
];

const pastEvents = [
  {
    id: 1,
    title: "Antellay Founders Meet-Up (Jaipur)",
    date: "September 26",
    img: "/images/event/event_footprint/founders_meetup_jaipur.jpg",
    action: "View Highlights",
    location: "Jaipur, Rajasthan",
    summary: "An energetic gathering of founders, operators, and technology leaders focused on building meaningful connections and exchanging practical startup insights.",
    highlights: ["Founder networking and peer learning", "Conversations around scaling teams and products", "New collaboration opportunities across the Jaipur ecosystem"]
  },
  {
    id: 2,
    title: "Jaipur Startup Valley Meetup",
    date: "Recent Event",
    img: "/images/event/event_footprint/celebso_vally.jpg",
    action: "Read Recap",
    location: "Jaipur, Rajasthan",
    summary: "A community-led meetup bringing together early-stage founders, mentors, and ecosystem partners to share ideas and discover new opportunities.",
    highlights: ["Startup pitches and founder stories", "Mentor-led discussions and feedback", "Community connections for future partnerships"]
  },
  {
    id: 3,
    title: "Mewar Startup - Investor Connect",
    date: "October 8, 2025",
    img: "/images/event/event_footprint/Mewar Startup.jpg",
    action: "View Details",
    location: "Mewar, Rajasthan",
    summary: "A focused investor-connect session designed to help promising startups present their vision, receive expert feedback, and build valuable funding relationships.",
    highlights: ["Curated startup and investor introductions", "Pitch presentations and expert feedback", "Networking with founders and ecosystem enablers"]
  }
];

function FootprintsView() {
  const [openFaq, setOpenFaq] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Hero Section */}
      <section className="relative isolate flex min-h-[580px] w-full items-center overflow-hidden border-b border-white/10 bg-[#071126] py-24 text-white md:min-h-[640px] md:py-0">
        <Image
          src="/images/events/events-hero-conference.png"
          alt="A technology founder speaking to an audience at an Antuulay event"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[68%_center] md:object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,17,38,0.98)_0%,rgba(7,17,38,0.9)_35%,rgba(7,17,38,0.42)_66%,rgba(7,17,38,0.08)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(7,17,38,0.78)_0%,transparent_50%,rgba(7,17,38,0.25)_100%)]" />
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-20">
          <div className="max-w-[620px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00F5D4]/35 bg-[#00F5D4]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#73FFE9]">
              <span className="h-2 w-2 rounded-full bg-[#00F5D4] shadow-[0_0_14px_#00F5D4]" />
              Antuulay Events
            </div>
            <h1 className="mb-6 text-5xl font-semibold leading-[1.06] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
              Events That Move Ideas Forward
            </h1>
            <p className="mb-10 max-w-[580px] text-lg leading-relaxed text-white/75 sm:text-xl">
              Explore Antellay meetups, investor connects, technology conversations, and the moments that bring our growing innovation community together.
            </p>
            <button className="rounded-md bg-[#00F5D4] px-8 py-4 font-semibold text-[#071126] shadow-[0_16px_40px_rgba(0,245,212,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#73FFE9]">
              Schedule a free consultation
            </button>
          </div>
        </div>
        
        <div className="hidden">
           <Image src="/images/event/event_footprint/founders_meetup_jaipur.jpg" alt="Antellay founders meetup in Jaipur" fill priority sizes="(max-width: 768px) 100vw, 48vw" className="object-cover object-center dark:brightness-75" />
           <div className="absolute inset-0 bg-gradient-to-r from-[#F4F7FA] via-transparent to-transparent dark:from-[#0B132B] md:from-[#F4F7FA]/35 md:dark:from-[#0B132B]/35" />
        </div>
      </section>

      {/* Past Events Listing */}
      <section className="py-24 max-w-[1200px] mx-auto px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 border-b border-gray-200 dark:border-gray-800 pb-4">Highlights and Key Takeaways from Past Events</h2>
        <div className="flex flex-col gap-6">
          {pastEvents.map((evt) => (
            <button
              key={evt.id}
              type="button"
              onClick={() => setSelectedEvent(selectedEvent?.id === evt.id ? null : evt)}
              aria-expanded={selectedEvent?.id === evt.id}
              aria-controls="selected-event-details"
              className={`group flex w-full flex-col items-center gap-8 rounded-sm border p-4 text-left transition-colors md:flex-row ${selectedEvent?.id === evt.id ? "border-[#00A98F] bg-[#F4F7FA] dark:border-[#00F5D4] dark:bg-[#1C2541]/70" : "border-transparent hover:border-[#E2E8F0] hover:bg-[#F4F7FA] dark:hover:border-[#2D3A54] dark:hover:bg-[#1C2541]/50"}`}
            >
              <div className="w-full md:w-64 aspect-[4/3] rounded-sm overflow-hidden bg-[#F4F7FA] dark:bg-[#1C2541] flex-shrink-0">
                <img src={evt.img} alt={evt.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#00A98F] dark:text-[#00F5D4] mb-3 uppercase tracking-wider">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  {evt.date}
                </div>
                <h3 className="text-2xl font-bold text-[#0B132B] dark:text-white mb-4 group-hover:text-[#00A98F] dark:group-hover:text-[#00F5D4] transition-colors">{evt.title}</h3>
                <div className="flex items-center gap-2 text-[#00A98F] dark:text-[#00F5D4] font-medium">
                  {evt.action} <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        {selectedEvent && (
          <div id="selected-event-details" className="mt-10 overflow-hidden rounded-sm border border-[#E2E8F0] bg-[#F4F7FA] shadow-sm dark:border-[#2D3A54] dark:bg-[#1C2541]" aria-live="polite">
            <div className="grid md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
              <div className="relative min-h-64 overflow-hidden md:min-h-full">
                <img src={selectedEvent.img} alt={selectedEvent.title} className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="p-7 sm:p-10">
                <div className="mb-4 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-wider text-[#00A98F] dark:text-[#00F5D4]">
                  <span>{selectedEvent.date}</span>
                  <span aria-hidden="true">•</span>
                  <span>{selectedEvent.location}</span>
                </div>
                <h3 className="mb-4 text-3xl font-bold text-[#0B132B] dark:text-white">{selectedEvent.title}</h3>
                <p className="mb-7 leading-relaxed text-slate-600 dark:text-slate-300">{selectedEvent.summary}</p>
                <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#0B132B] dark:text-white">Event highlights</h4>
                <ul className="space-y-3">
                  {selectedEvent.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-slate-600 dark:text-slate-300">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#00A98F] dark:bg-[#00F5D4]" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <button type="button" onClick={() => setSelectedEvent(null)} className="mt-8 text-sm font-semibold text-[#00A98F] underline-offset-4 hover:underline dark:text-[#00F5D4]">
                  Close details
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#F4F7FA] dark:bg-[#0B132B] transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-8">
          <h2 className="text-4xl font-light text-center text-slate-900 dark:text-white mb-16">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-[#1C2541] rounded-sm shadow-sm border border-[#E2E8F0] dark:border-[#2D3A54] overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-semibold text-slate-800 dark:text-white pr-4 flex items-center gap-3">
                    <span className="text-[#00A98F] dark:text-[#00F5D4] text-xl font-black shrink-0">Q.</span>
                    {faq.q}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-[#00A98F] dark:text-[#00F5D4] transition-transform ${openFaq === index ? "rotate-45" : ""}`}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed pl-8 border-l-2 border-[#00A98F]/25 dark:border-[#00F5D4]/30">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function CollaborationsView() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Collaborative Hero View */}
      <section className="relative w-full h-[550px] overflow-hidden bg-[#0a0a0a] flex items-center border-b border-gray-800">
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-amber-600 via-orange-600 to-[#00A98F] opacity-40 blur-3xl z-0 pointer-events-none mix-blend-screen"></div>
        
        <div className="max-w-[1400px] mx-auto w-full px-8 lg:px-20 z-10 flex flex-col md:flex-row items-center justify-between h-full">
          <div className="max-w-xl z-20">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              The Antellay<br/>Collaboration
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
              Pioneering revolutionary tech ecosystems with Salesforce Crest Gold prestige and a massive global network.
            </p>
          </div>
          <div className="hidden md:block relative z-10 w-[500px] aspect-square rounded-sm overflow-hidden border border-white/10 shadow-2xl shadow-[#00A98F]/20 backdrop-blur-sm">
             <img src="/images/event/big_picture_img.webp" alt="Collaboration" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Feature Panel Grid */}
      <section className="py-24 max-w-[1200px] mx-auto px-8">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-[#1C2541] border border-[#E2E8F0] dark:border-[#2D3A54] rounded-sm overflow-hidden shadow-lg group">
               <div className="h-64 overflow-hidden bg-slate-200 dark:bg-slate-800 relative">
                  <img src="/images/event/collaboration/re-Architecting Enterprise Agility.webp" alt="Heroku Tour" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-[#00A98F] dark:text-[#00F5D4]">Global Tour</div>
               </div>
               <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Re-Architecting Enterprise Agility: Inside the Heroku Advantage</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-6">Explore how our architects leverage Heroku to deploy custom automation workflows and scale applications globally.</p>
                  <span className="text-sm font-semibold text-gray-400">October 24, 2026</span>
               </div>
            </div>
            <div className="bg-white dark:bg-[#1C2541] border border-[#E2E8F0] dark:border-[#2D3A54] rounded-sm overflow-hidden shadow-lg group">
               <div className="h-64 overflow-hidden bg-slate-200 dark:bg-slate-800 relative">
                  <img src="/images/event/collaboration/Retail Brands.webp" alt="Retail Brands" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-[#00A98F] dark:text-[#00F5D4]">Industry Deep Dive</div>
               </div>
               <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">How Retail Brands Are Reinventing Customer Journeys</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-6">Discover loyalty program modernization using enterprise CRM strategy implementation and data analytics.</p>
                  <span className="text-sm font-semibold text-gray-400">November 12, 2026</span>
               </div>
            </div>
         </div>
      </section>

      {/* Work Portfolio Data Callouts */}
      <section className="bg-[#F4F7FA] dark:bg-[#0B132B] py-24 border-y border-[#E2E8F0] dark:border-[#1C2541]">
         <div className="max-w-[1400px] mx-auto px-8 flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 w-full">
               <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">Measurable Operational Impact</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="bg-white dark:bg-[#1C2541] p-6 rounded-sm border border-[#E2E8F0] dark:border-[#2D3A54] shadow-sm border-l-4 border-l-orange-500">
                    <div className="text-4xl font-black text-[#00A98F] dark:text-[#00F5D4] mb-2">86%</div>
                    <div className="text-slate-600 dark:text-slate-300 font-medium">Extension in user adoption reached</div>
                 </div>
                 <div className="bg-white dark:bg-[#1C2541] p-6 rounded-sm border border-[#E2E8F0] dark:border-[#2D3A54] shadow-sm border-l-4 border-l-amber-500">
                    <div className="text-4xl font-black text-[#00A98F] dark:text-[#00F5D4] mb-2">78%</div>
                    <div className="text-slate-600 dark:text-slate-300 font-medium">Increased Customer satisfaction</div>
                 </div>
                 <div className="bg-white dark:bg-[#1C2541] p-6 rounded-sm border border-[#E2E8F0] dark:border-[#2D3A54] shadow-sm border-l-4 border-l-[#00A98F]">
                    <div className="text-4xl font-black text-[#00A98F] dark:text-[#00F5D4] mb-2">51%</div>
                    <div className="text-slate-600 dark:text-slate-300 font-medium">Deduction in business cost</div>
                 </div>
                 <div className="bg-white dark:bg-[#1C2541] p-6 rounded-sm border border-[#E2E8F0] dark:border-[#2D3A54] shadow-sm border-l-4 border-l-yellow-500">
                    <div className="text-4xl font-black text-[#00A98F] dark:text-[#00F5D4] mb-2">64%</div>
                    <div className="text-slate-600 dark:text-slate-300 font-medium">Increase in ROI globally</div>
                 </div>
               </div>
            </div>
            <div className="flex-1 w-full">
               <div className="aspect-[16/10] rounded-sm overflow-hidden shadow-2xl relative">
                  <img src="/images/events/collaborations/corporate_handshake.jpg" alt="Corporate Handshake" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white font-semibold text-lg">Trusted by global enterprise leaders.</div>
               </div>
            </div>
         </div>
      </section>

      {/* Subscription Capture Box */}
      <section className="py-24 max-w-[800px] mx-auto px-8 relative">
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5 pointer-events-none bg-[url('/images/events/collaborations/newsletter_leaf.jpg')] bg-cover bg-center rounded-3xl"></div>
        <div className="relative z-10 bg-white dark:bg-[#1C2541] rounded-sm shadow-2xl p-10 md:p-16 border border-[#E2E8F0] dark:border-[#2D3A54] text-center">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Subscribe to our Blogs & Newsletters</h2>
           <p className="text-slate-500 dark:text-slate-400 mb-10">Stay updated on our latest collaborations, tech insights, and global footprint events.</p>
           
           <form className="flex flex-col gap-4 max-w-md mx-auto">
             <input type="text" placeholder="Full Name" className="w-full bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 text-slate-900 dark:text-white rounded-sm px-4 py-3 focus:outline-none focus:border-[#000000] dark:focus:border-[#FFFFFF] transition-colors" required />
             <input type="email" placeholder="Email Address" className="w-full bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 text-slate-900 dark:text-white rounded-sm px-4 py-3 focus:outline-none focus:border-[#000000] dark:focus:border-[#FFFFFF] transition-colors" required />
             <button type="submit" className="w-full mt-4 bg-gradient-to-r from-[#000000] to-[#333333] hover:from-[#333333] hover:to-[#000000] text-white font-bold py-4 rounded-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
               Subscribe Now
             </button>
           </form>
        </div>
      </section>
    </div>
  );
}

function EventsContent() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0B132B] transition-colors duration-300">
      <div className="relative min-h-[800px]">
        <FootprintsView />
      </div>
    </main>
  );
}

export default function EventsPage() {
  return <EventsContent />;
}
