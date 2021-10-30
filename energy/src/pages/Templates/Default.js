
import Container from '@material-ui/core/Container'
import './Template.css'
import Header from '../../components/Header/index.js'






const Default = ({children}) => {
    
    return(
        <div>
            <Header/>
                {/* <Head/> */}
            <Container className='container' style={{padding: 0, minHeight: '100vh'}} maxWidth="false">
                {children}
            </Container>            
            {/* <Footer/> */}
        </div>
    )
}


export default Default