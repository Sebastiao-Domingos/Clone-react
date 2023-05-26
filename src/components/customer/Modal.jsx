import { Div } from './style'
import { Button } from '../buttons/Button'
import { Input } from '../form/Input'
import { useState , useCallback } from 'react';
export  function Modal( { event} ) {
    const [ showed , setShowed ] = useState(true);
    const [ background , setBackground ] = useState({ back1 : true , back2 : false } );

    const handleChangeForm = useCallback(( e ) => {
        setShowed( e );

        if( e ) {
            setBackground({ ...background , back1:true, back2:false })
        } else {
            setBackground({ ...background , back1:false, back2:true })
        }
    },[])
    
  return (
    <Div changed = { showed } >
        <div className = 'container'>
            <button onClick = { event }>X</button>
            <div className="wraper">
                <div className="menu">
                    <Button text ="Login" size ="7rem"  event ={ () => handleChangeForm(true)} clicked ={ background.back1 } />
                    <Button text ="Registration" size ="9rem" event ={ () => handleChangeForm(false) } clicked ={ background.back2 } />
                </div>
                <div className="form">
                    { showed ? (
                        <form action="">
                            <Input text = 'Name' />
                            <Input text = 'Email' />
                            <div className="foot">
                                <Button text ="Submit" size ="7rem" />
                                <p>Forgot your password?</p>
                            </div>
                        </form>
                    ):(
                        <form action="">
                            <Input text = 'Name' />
                            <Input text = 'Email' />
                            <Input text = 'Mobile' />
                            <Input text = 'Password' />
                            <div className="foot">
                                <Button text ="Save & Continue" size ="11rem" />
                                <Button text ="Cancel" size="7rem" />
                            </div>
                        </form>
                    )}

                </div>
            </div>
        </div>
    </Div>
  )
}
