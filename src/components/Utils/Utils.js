import Link from 'next/link';
import * as React from 'react'
import projects from '../../pages/projects';

export function TableElement({ title, subtitle, date }){
    return (
        <p className="flex items-center space-x-4 group">
            <strong className="flex-none font-medium text-gray-900 dark:text-gray-100">
                {title}
            </strong>
            <span className="w-full border-t border-gray-300 border-solid shrink dark:border-gray-800"/>
            {subtitle && <span className="flex-none font-mono text-quaternary hidden md:flex">{subtitle}</span>}
            {date && <span className="flex-none font-roboto text-quaternary hidden md:flex">{date}</span>}
        </p>
    );
}

export function SectionTitle({ title }){
    return (
        <div className="flex items items-center space-x-4 group">
            <h2 className="flex-none text-2xl font-semibold text-primary">
                { title }
            </h2>
            <span className="w-full border-gray-500 border-solid border-t"></span>
        </div>
    );
}

export function SectionContainer(props) {
    return (
      <div
        className="grid items-start grid-cols-1 gap-y-8"
        {...props}
      />
    )
}

export function PageTitle({ title }){
  return (
    <div className="grid items-start grid-cols-1 gap-y-3">
      <p className="flex-none text-3xl font-semibold font-roboto text-primary">
        { title }
      </p>
      <span className="w-full border-gray-500 border-solid border-t" />
    </div>
  )
}

function Links({ links }){
  return (
    <div className="flex flex-wrap pt-1">
      {Object.entries(links).map(([key, value], index) => (
        <div className="" key={index}>
          <Link href={value}>
          <a className={"bg-off-white border border-off-black hover:bg-off-black hover:text-off-white font-medium text-sm py-2 px-3 mr-2 rounded text-center dark:bg-off-black dark:text-off-white dark:hover:bg-off-white dark:border-off-white dark:hover:text-off-black"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {key}
              </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

function Tags({ tools }){
  return (
    <div className="flex flex-wrap pt-1">
      {tools.map((tool, index) => (
          <div key={index} className="border border-off-black rounded-full px-3 py-1 mr-2 dark:border-gray-300">
            <p className="text-xs font-medium text-center text-off-black dark:text-gray-300">
              {tool}
            </p>
          </div>
        ))}
    </div>
  );
}

export function ProjectCard({ project }){
  return (
    <div className="p-6 border border-lightText rounded-xl mb-4 space-y-4">
      <p className="text-xl font-semibold">{ project.title }</p>
      <Tags tools={project.tools} />
      <p className="text-gray-600">{ project.description }</p>
      <Links links={project.links} />
    </div>
  )
}

export function MusicContainer({ title, description, src }){
  return (
    <>
      <p className="flex items-baseline space-x-4 group">
        <strong className="flex-none font-medium text-gray-900 dark:text-gray-100">
          {title}
        </strong>
        {description && <span className="flex-none font-mono text-quaternary hidden md:flex text-gray-700">{description}</span>}
      </p>
      {src && <iframe className="rounded-xl" src={ src } width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>}
    </>
  );
}

export function ClassDescription({ description }){
  return (
    <div className="space-y-0">
      {description.map((desc, index) => (
          <div key={index} className="">
            <li className="text-md font-small text-left text-off-black dark:text-gray-600">
              {desc}
            </li>
          </div>
        ))}
    </div>
  );
}

export function ClassCard({ course }){
  return (
    <div className="p-6 border border-lightText rounded-xl mb-4 space-y-4">
      <p className="text-xl font-semibold">{ course.title }</p>
      <p className="space-x-3"><span className="text-lg font-roboto">{course.professor}</span><b>•</b><a className="text-lg font-roboto" href={course.link}>Syllabus</a></p>
      <ClassDescription description={course.description} />
    </div>
  )
}

const Container = React.forwardRef(
    (props, ref) => {
      return (
        <div
          ref={ref}
          id="main"
          className="relative flex max-h-screen w-full flex-col overflow-y-auto"
          {...props}
        />
      )
    }
  )
  Container.displayName = "Container";
  
  function ContentContainer(props) {
    return (
      <div
        className="mx-auto w-full max-w-3xl px-4 pb-32 md:px-8 md:pt-2"
        {...props}
      />
    )
  }
  
  export const Detail = {
      Container,
      ContentContainer,
  }
