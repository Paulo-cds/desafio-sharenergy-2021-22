import Chart from '../../components/Chart'
import dataUsina from '../../dadosUsina.json'
import './Grafics.css'

const Grafic = () => {   
    return(
        <>
            <div className='headGrafic'></div>
            <div className='chart'>        
                <Chart
                values={dataUsina}
                />        
            </div> 
        </>
    )
}

export default Grafic