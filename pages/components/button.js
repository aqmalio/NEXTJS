import Link from 'next/link'

export default function Button({ label = "Label", className = null, href="#"}) {
  return (
    <div className={`my-3 rounded-lg`}>
      <div className={`inline-flex shadow items-center justify-center px-10 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 ${className}`}>
        <Link href={href}>{label}</Link>
      </div>
    </div >
  )
}