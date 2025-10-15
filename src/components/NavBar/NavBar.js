import Link from "next/link";

export function NavBar(){
    return (
        <nav className="max-w-4xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <a className="text-xl font-semibold text-white hover:text-purple-400 transition-colors">
                        Afnan Mir
                    </a>
                </Link>
                <div className="flex space-x-8">
                    <Link href="/projects">
                        <a className="text-gray-200 hover:text-purple-400 transition-colors">
                            projects
                        </a>
                    </Link>
                    <Link href="/classes">
                        <a className="text-gray-200 hover:text-purple-400 transition-colors">
                            classes
                        </a>
                    </Link>
                    <Link href="/AfnansNotes">
                        <a className="text-gray-200 hover:text-purple-400 transition-colors">
                            writing
                        </a>
                    </Link>
                    <Link href="/static/pdfs/AfnanMir_ResumeFall2023.pdf">
                        <a className="text-gray-200 hover:text-purple-400 transition-colors">
                            resume
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}