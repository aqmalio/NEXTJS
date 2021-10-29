export default function Button({label}) {
  return (
    <div className="inline-flex my-3 rounded-lg shadow">
      <div className="inline-flex items-center justify-center px-10 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700">
        {label}
      </div>
    </div>
  )
}