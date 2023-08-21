import { iColaborador } from '../../compartilhado/interfaces/iColaborador'
import Colaborador from '../Colaborador'
import './Time.css'

interface TimeProps {
    corSecundaria: string
    corPrimaria: string
    nome: string
    colaboradores: iColaborador[]
}

const Time = ({ corSecundaria, corPrimaria, nome, colaboradores}:TimeProps) => {
    const css = { backgroundColor: corSecundaria }

    return (
        (colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map( colaborador => 
                    <Colaborador 
                        corDeFundo={corPrimaria} 
                        key={colaborador.nome} 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem}
                        data={colaborador.data}
                    />
                )}
            </div>
        </section> 
        : <></>
    )
}

export default Time