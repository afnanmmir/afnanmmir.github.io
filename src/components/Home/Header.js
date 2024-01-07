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
                        Hello my name is Afnan Mir, and I am a fourth year student at the University of Texas, studying Electrical and Computer Engineering. 
                        My career interests surround the topics of software engineering, machine learning, and natural language processing, while my hobbies center around
                        basketball, working out, and various outdoor activities
                    </p>
            </div>
        </div>
    );
}