import Image from "next/image";
import Link from "next/link";

export default function MenuBar() {
    return (
        <nav className="w-[1440px] h-[136px] lg:w-[1600px] bg-white-gray relative">
            <ul className="flex items-center justify-start h-full list-none p-0 m-0">
                <div className="rounded-full bg-gray-200 w-29 flex items-center justify-center">
                    <Image src="/images/logo.png" alt="Bite Burger Logo" width="135" height="135" className="rounded-full" />
                </div>
                <li className="font-inter font-extrabold italic text-3xl text-black sm:pl-8 lg:pl-8">
                    <Link href="/" className="list-none">Home</Link>
                </li>
                <li className="font-inter font-extrabold italic text-3xl text-black sm:ml-11 lg:ml-11">
                    <Link href="/" className="list-none">Loja</Link>
                </li>
                <li className="font-inter font-extrabold italic text-3xl text-black sm:ml-11 lg:ml-11">
                    <Link href="/" className="list-none">Sobre</Link>
                </li>
                <li className="font-inter font-medium text-3xl text-red-light text-opacity-[1] lg:ml-[720px]">
                    <Link href="/">criar conta</Link>
                </li>
                <li className="flex items-center justify-center">
                    <Link href="/" className="font-inter font-medium text-3xl text-white w-[200px] h-[60px] bg-red-light border-[6px] border-red-dark rounded-[6px] flex items-center justify-center">Entrar</Link>
                </li>
            </ul>
        </nav>
    )
}
