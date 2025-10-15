import { NavBar } from '../NavBar/NavBar'
import { ClassInfo } from '../../data/ClassInfo'
import Link from 'next/link'

export default function Classes(){
    return (
        <>
            <NavBar />
            <div className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold text-white mb-12">Classes I Enjoyed</h1>
                <div className="space-y-8">
                    {ClassInfo.slice().reverse().map((course, index) => (
                        <div key={index} className="space-y-3">
                            <div className="flex items-baseline">
                                <h2 className="text-xl font-semibold text-white">{course.title}</h2>
                                <span className="mx-2 text-gray-300">•</span>
                                <span className="text-gray-200">{course.professor}</span>
                                {course.link && (
                                    <Link href={course.link}>
                                        <a className="ml-2 text-gray-200 hover:text-purple-400 transition-colors">
                                            Syllabus
                                        </a>
                                    </Link>
                                )}
                            </div>
                            <ul className="space-y-1">
                                {course.description.map((desc, descIndex) => (
                                    <li key={descIndex} className="text-gray-200">
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}