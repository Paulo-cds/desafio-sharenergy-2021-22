
import Container from '@material-ui/core/Container'
import './Template.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'





const Default = ({children, theme}) => {
    
    return(
        <div>
            <Header/>
            <Container
                className='container'
                maxWidth='false'
                style={{
                    backgroundColor:'theme.palette.background',
                    width:'100%',                                
                }}
                minHeight='100vh'
            >
               {children}                
            </Container>            
            <Footer/>
        </div>
    )
}


export default Default