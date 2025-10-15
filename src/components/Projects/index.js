import { NavBar } from '../NavBar/NavBar'
import { ProjectData } from '../../data/ProjectInfo'
import Link from 'next/link'

export default function Projects(){
    return (
        <>
            <NavBar />
            <div className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold text-white mb-12">Projects</h1>
                <div className="space-y-8">
                    {ProjectData.map((project, index) => (
                        <div key={index} className="space-y-3">
                            <div className="flex items-baseline">
                                <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                                {project.links && Object.entries(project.links).map(([key, value], linkIndex) => (
                                    <Link key={linkIndex} href={value}>
                                        <a className="ml-2 text-gray-200 hover:text-purple-400 transition-colors">
                                            {key}
                                        </a>
                                    </Link>
                                ))}
                            </div>
                            <p className="text-gray-200">{project.description}</p>
                            {project.tools && (
                                <div className="flex flex-wrap gap-2">
                                    {project.tools.map((tool, toolIndex) => (
                                        <span key={toolIndex} className="px-2 py-1 text-xs bg-purple-600 text-purple-100 rounded">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}