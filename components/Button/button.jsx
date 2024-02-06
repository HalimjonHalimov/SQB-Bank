
export default function Button({type, label}) {
  return (
    <button type={type} className="w-[164px] h-[45px] border border-[#1D3448] text-base font-medium text-[#1D3448] rounded bg-none hover:bg-gradient-to-br from-[#1D3448] to-[#878B90] hover:text-white transition">{label}</button>
  )
}
