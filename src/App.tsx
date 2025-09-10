import './App.css'
import { DigiButton } from '@digi/arbetsformedlingen-react'
import { ButtonVariation } from '@digi/arbetsformedlingen' // observera att import av enums sker via @digi/arbetsformedlingen

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-amber-500">
        Hello world! <br></br>Tailwind works if you see amber!
      </h1>
      <DigiButton
        afVariation={ButtonVariation.PRIMARY}
        onAfOnClick={() => console.log('Hallå världen!')}
      >
        Skicka
      </DigiButton>
    </>
  )
}

export default App
