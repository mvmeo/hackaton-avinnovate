import { ButtonTDAH } from '.'
import './App.css'
import { VisorTDAH } from './components/buttons/VisorTDAH'
import { Tabulador } from './components/Tabulador'
import { Text } from './components/tts/Text'

function App() {

 
  return (
    <>
    <ButtonTDAH />
    <VisorTDAH />
    <Tabulador />
    <div className='grid grid-cols-4'>

    <p id="tab-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, quae optio asperiores error facere deserunt illo eum officiis similique velit ipsum consectetur sequi saepe, qui praesentium nisi iure reiciendis dicta.</p>
    <p id="tab-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, quae optio asperiores error facere deserunt illo eum officiis similique velit ipsum consectetur sequi saepe, qui praesentium nisi iure reiciendis dicta.</p>
    <p id="tab-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, quae optio asperiores error facere deserunt illo eum officiis similique velit ipsum consectetur sequi saepe, qui praesentium nisi iure reiciendis dicta.</p>
    <p id="tab-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, quae optio asperiores error facere deserunt illo eum officiis similique velit ipsum consectetur sequi saepe, qui praesentium nisi iure reiciendis dicta.</p>
    <p id="tab-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, quae optio asperiores error facere deserunt illo eum officiis similique velit ipsum consectetur sequi saepe, qui praesentium nisi iure reiciendis dicta.</p>
    </div>

    <h1>aca va el tts</h1>

    <Text text='Hi everyone, we are very happy and grateful for participate in this event. No doubt you sell events greats events!' />
    </>
  )
}

export default App
