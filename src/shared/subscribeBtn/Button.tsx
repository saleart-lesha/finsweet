import './scss/SubscribeBtn.css'

interface ButtonProps {
  color: string
  text: string
}

const Button = ({ color, text }: ButtonProps) => {
  return (
    <div>
      <button className={`btn_${color}`}>
        <span className={`btn_${color}_text`}>{text}</span>
      </button>
    </div>
  )
}

export default Button
