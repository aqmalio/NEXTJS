export default function Title({ label, dark, align = 'center', weight = 'normal', className = ""}) {
  return (
    <div className={`${className} font-${weight} text-xl md:text-4xl text-${align} md:mb-4 ${dark ? 'text-gray-800' : 'text-white'}`}>{label}</div>
  )
}