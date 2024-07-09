import { useState } from "react";

const steps = [
  'Learn React',
  'Apply For Job',
  'Invest Your Income',
]

export default function App() {
  let [step, setStep] = useState(1)
  const [isOpen, setIsOpent] = useState(true)

  function nextprevouseHandle() {
    if (step < 3) setStep(s => s + 1)

  }

  function prevouseHandle() {
    if (step > 1) setStep(s => s - 1)
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpent(preState => !preState)}>&times;</button>

      {isOpen &&
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <p className="message">Step {step} : {steps[step - 1]}</p>

          <div className="buttons">
            <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={prevouseHandle}>prevouse</button>
            <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={nextprevouseHandle}>next</button>
          </div>
        </div>
      }
    </>
  )

}