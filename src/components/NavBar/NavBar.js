import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";

export function NavBar(){
    const { theme, setTheme } = useTheme();
    return (
        <nav className="flex items-start justify-between flex-wrap p-6">
            <div className="flex items-center flex-shrink-0 ml-0 md:ml-4 mr-6">
                <Link href="/">
                    <a className="inline-block text-primary text-xl md:text-2xl font-semibold">
                        Afnan Mir
                    </a>
                </Link>
            </div>
            <div className="flex items-center w-auto">
                <div className="text-sm md:text-base font-normal md:font-medium md:flex-grow">
                    <Link href="/projects">
                        <a className="inline-block mr-4 md:mr-8 text-primary">
                            Projects
                        </a>
                    </Link>
                    <Link href="/classes">
                        <a className="inline-block mr-4 md:mr-8 text-primary">
                            Classes
                        </a>
                    </Link>
                    <Link href="/AfnansNotes">
                        <a className="inline-block mr-4 md:mr-8 text-primary">
                            Notes
                        </a>
                    </Link>
                    <Link href="/static/pdfs/AfnanMir_ResumeFall2023.pdf">
                        <a className="inline-block mr-4 md:mr-8 text-primary">
                            Resume
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}