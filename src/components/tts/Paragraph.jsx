import Speech from 'speak-tts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay, faStop } from '@fortawesome/free-solid-svg-icons'




export const Paragraph = (props) => {

    const text = props.text
    const speech = new Speech()

    speech.init({
        'volume': 1,
         'lang': 'es-MX',
         'rate': 1,
         'pitch': 1,
         'voice':'Google UK English Male',
         'splitSentences': true,
         'listeners': {
             'onvoiceschanged': (voices) => {
                 console.log("Event voiceschanged", voices)
             }
         }
 })

    const play = () => {
        speech.speak({
            text: text,
        }).then(() => {
            console.log("Success !")
        }).catch(e => {
            console.error("An error occurred :", e)
        })
    }
  
    return (
        <section className='flex flex-row space-x-2'>
            <p className='p-1'>{props.text}</p>
            <div className='bg-gray-100 px-3 py-2 flex flex-col space-y-2 rounded-r-lg'>
                <button id='play' onClick={play} className='text-green-500'><FontAwesomeIcon icon={faPlay} /></button>
            </div>
        </section>
    )
}