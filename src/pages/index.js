import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Home/Header'
import { NavBar } from '../components/NavBar/NavBar'
// import { TableElement } from '../components/Utils'
import { Detail, TableElement, SectionContainer, SectionTitle, MusicContainer} from '../components/Utils/Utils'
// import { SectionTitle } from '../components/Utils'
// import { SectionContainer } from '../components/Utils'
import { HomeInfo } from '../data/HomeInfo'


export default function Home() {
  return (
    <>
      <NavBar />
      <Detail.Container>
        <Detail.ContentContainer>
          <div className="pb-24 md:pb-4 space-y-12 md:space-y-16">
            <Header />
            <SectionContainer>
              <SectionTitle title="Work" />
              <div className="flex flex-col space-y-3">
                {HomeInfo.work.map((element) => (
                  <TableElement
                  title={element.title}
                  subtitle={element.position}
                  date={element.date}
                  />
                ))}
              </div>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle title="Organizations" />
              {HomeInfo.organizations.map((element) => (
                <TableElement
                title={element.title}
                subtitle={element.position}
                date={element.date}
                />
              ))}
            </SectionContainer>
            <SectionContainer>
              <SectionTitle title="Music" />
              {HomeInfo.music.map((playlist) => (
                <MusicContainer
                title={playlist.playlistTitle}
                description={playlist.playlistDescription}
                src={playlist.src}
                />
              ))}
            </SectionContainer>
            <SectionContainer>
              <SectionTitle title="Links" />
              <p className="flex flex-row justify-around items-baseline space-x-4 group">
                <a className="font-medium text-gray-900 dark:text-gray-100" href="linkedin.com/in/afnan-mir/">LinkedIn</a>
                <a className="font-medium text-gray-900 dark:text-gray-100" href="linkedin.com/in/afnan-mir/">Github</a>
                <a className="font-medium text-gray-900 dark:text-gray-100" href="linkedin.com/in/afnan-mir/">Email</a>
                <a className="font-medium text-gray-900 dark:text-gray-100" href="linkedin.com/in/afnan-mir/">Spotify</a>
              </p>
            </SectionContainer>
          </div>
        </Detail.ContentContainer>
      </Detail.Container>
    </>
  )
}
{/* <SectionContainer>
  <SectionTitle title="Work" />
</SectionContainer> */}