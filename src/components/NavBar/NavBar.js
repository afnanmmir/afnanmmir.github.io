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
                    <Link href="/">
                        <a className="inline-block mr-4 md:mr-8 text-primary">
                            Projects
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="inline-block mr-4 md:mr-8 text-primary">
                            Classes
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="inline-block mr-4 md:mr-8 text-primary">
                            Notes
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="inline-block mr-4 md:mr-8 text-primary">
                            Resume
                        </a>
                    </Link>
                    <Image
                    src="/static/sun.svg"
                    width={30}
                    height={30}
                    alt="Toggle theme"
                    className="cursor-pointer toggleTheme"
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    />
                </div>
            </div>
        </nav>
    )
}