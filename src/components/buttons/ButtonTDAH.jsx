
import useTADH from "../hooks/useTDAH"
import { Button } from "./Button"

export const ButtonTDAH = () => {
    const { tdah, change } = useTADH()

    return <Button action={change} label={tdah ? 'TDAH' : 'No TDAH'} />
        
}
