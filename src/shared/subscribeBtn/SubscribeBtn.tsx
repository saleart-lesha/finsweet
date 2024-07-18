import './scss/SubscribeBtn.css'

interface SubscribeBtnProps {
  colorBtn: string
}

const SubscribeBtn = ({ colorBtn }: SubscribeBtnProps) => {
  return (
    <div>
      <button className={`btn_${colorBtn}`}>
        <span className={`btn_${colorBtn}_text`}>Subscribe</span>
      </button>
    </div>
  )
}

export default SubscribeBtn
