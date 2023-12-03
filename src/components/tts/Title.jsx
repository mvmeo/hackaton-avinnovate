import Speech from 'speak-tts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export const Title = (props) => {
    const { text } = props;
    const speech = new Speech();

    speech.init({
        'volume': 1,
         'lang': 'en-GB',
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
            <p className='p-1'>{text}</p>
            <div className='flex flex-col rounded-r-lg'>
                <button onClick={play} className='text-green-500 w-1 h-1'><FontAwesomeIcon icon={faPlay} /></button>
            </div>
        </section>
    );
};
