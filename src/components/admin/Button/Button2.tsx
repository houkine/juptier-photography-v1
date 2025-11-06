const Button2 = ({ onClick, title }: ButtonInputType) => <div
  className="flex items-center justify-center w-36 h-full bg-white/10 rounded-md cursor-pointer hover:bg-white/20"
  onClick={onClick}
>
  <p className="m-auto text-lg text-white">{title}</p>
</div>
type ButtonInputType = {
  onClick: () => void,
  title: string
}

export default Button2
