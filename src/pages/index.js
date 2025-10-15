import Head from 'next/head'
import Image from 'next/image'
import { NavBar } from '../components/NavBar/NavBar'
import { HomeInfo } from '../data/HomeInfo'

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Afnan Mir</h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            is a software engineer currently working at AWS on systems to automate financial data reporting in real time. I graduated from The University of Texas at Austin in May 2024 with a B.S. in Electrical and Computer Engineering.
            My current career interests lie in large scale ML systems and backend engineering.
            <br />
            <br />
            My go-to hobbies are playing basketball, working out, and any other way to stay active. I also enjoy <a href="/AfnansNotes/travel/travel" className="text-purple-400 underline hover:text-purple-300" target="_blank" rel="noopener noreferrer">traveling</a>, whether it be to new places, or to visit friends in their cities.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-6">Work Experience</h2>
          <div className="space-y-4">
            {HomeInfo.work.map((job, index) => (
              <div key={index} className="flex items-baseline">
                <span className="font-medium text-white">{job.title}</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-gray-200">{job.position}</span>
                <span className="ml-auto text-gray-400">{job.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Organizations */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-6">Organizations</h2>
          <div className="space-y-4">
            {HomeInfo.organizations.map((org, index) => (
              <div key={index} className="flex items-baseline">
                <span className="font-medium text-white">{org.title}</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-gray-200">{org.position}</span>
                <span className="ml-auto text-gray-400">{org.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Music */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-6">Music</h2>
          <div className="space-y-6">
            {HomeInfo.music.map((playlist, index) => (
              <div key={index}>
                <div className="mb-2">
                  <span className="font-medium text-white">{playlist.playlistTitle}</span>
                  <span className="ml-2 text-gray-200">{playlist.playlistDescription}</span>
                </div>
                <iframe 
                  className="rounded-lg" 
                  src={playlist.src} 
                  width="100%" 
                  height="152" 
                  frameBorder="0" 
                  allowFullScreen="" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-6">Links</h2>
          <div className="flex space-x-6">
            <a className="text-gray-200 hover:text-purple-400 transition-colors" href="https://www.linkedin.com/in/afnan-mir/">LinkedIn</a>
            <a className="text-gray-200 hover:text-purple-400 transition-colors" href="https://github.com/afnanmmir">Github</a>
            <a className="text-gray-200 hover:text-purple-400 transition-colors" href="mailto:afnanmir@utexas.edu">Email</a>
            <a className="text-gray-200 hover:text-purple-400 transition-colors" href="https://open.spotify.com/user/afnan1230?si=3bad0415e7f14c24">Spotify</a>
          </div>
        </div>
      </div>
    </>
  )
}
{/* <SectionContainer>
  <SectionTitle title="Work" />
</SectionContainer> */}