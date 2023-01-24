import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    const header = (
      <header>
        <div className="flex flex-col justify-center items-center bg-slate-800 p-8 my-6 rounded-md">
         <Link href="/"><h1 className="text-3xl text-white font-bold">Winterson's Blog</h1></Link>
          <p className="text-slate-300">Greetings to fellow readers!!</p>
        </div>
      </header>
    )
    const footer = (
      <footer>
        <div className="border-t border-slate-500 mt-6 py-6 text-center text-slate-400">
          <h3>Developed by Winterson</h3>
        </div>
      </footer>
    )
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer} 
        </div>
        
      </body>
    </html>
  )
}
