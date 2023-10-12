import { SetStateAction, useState } from 'react'

export default function ButtonAllUsers() {
  const [selectedButton, setSelectedButton] = useState('todos') // Estado inicial

  const handleButtonClick = (buttonName: SetStateAction<string>) => {
    setSelectedButton(buttonName)
  }

  return (
    <div className=" px-[306px] ">
      <button
        className={`w-44 rounded-t-lg mx-4 h-16 px-5 ${
          selectedButton === 'todos' ? 'bg-white' : 'bg-[#f5f5f5]'
        }`}
        onClick={() => handleButtonClick('todos')}
      >
        <div className="flex justify-between items-center">
          TODOS <div className="w-14 h-7 bg-[#046639] rounded-full">200</div>
        </div>
      </button>

      <button
        className={`w-44 rounded-t-lg mx-4 h-16 px-5 ${
          selectedButton === 'Contratantes' ? 'bg-white' : 'bg-[#f5f5f5]'
        }`}
        onClick={() => handleButtonClick('Contratantes')}
      >
        <div className="flex justify-between items-center">
          Contratantes{' '}
          <div className="w-14 h-7 bg-[#046639] rounded-full">200</div>
        </div>
      </button>

      <button
        className={`w-44 rounded-t-lg mx-4 h-16 px-5 ${
          selectedButton === 'Médicos' ? 'bg-white' : 'bg-[#f5f5f5]'
        }`}
        onClick={() => handleButtonClick('Médicos')}
      >
        <div className="flex justify-between items-center">
          Médicos <div className="w-14 h-7 bg-[#046639] rounded-full">200</div>
        </div>
      </button>
    </div>
  )
}
