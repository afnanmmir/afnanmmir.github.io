import Image from "next/image";
import { useTheme } from "next-themes";

export default function Header() {
    const { theme, setTheme } = useTheme();
    return (
        <div className="grid grid-cols-2">
            <div className="w-48 h-48 rounded-full relative overflow-hidden">
                <Image
                    src="/static/images/Profile.jpg"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <div className="text-center">
                    <p>
                        Hello my name is Afnan Mir. I am currently a Software Engineer at AWS working on systems for financial data reporting. 
                        My current career interests lie in large scale ML systems and backend engineering, while my hobbies center around
                        playing basketball, working out, and any other way to stay active.
                    </p>
            </div>
        </div>
    );
}