export default function Paragraph({ label, dark, align = "center", weight = "normal", className = "" }) {
  return (
    <div className={`font-${weight} text-lg md:text-xl md:leading-8 text-${align} ${dark ? 'text-gray-800' : 'text-gray-50'} ${className}`}>{label}</div>
  )
}