import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import whatsapp from '../assets/whatsapp.png'
import '../styles/footer.css'
export default function Footer() {
    return (
        <div className='footer'>
            <div className='imag'>
                <img src={linkedin} alt="Linkedin" />
                <img src={github} alt="Github" />
                <img src={whatsapp} alt="Whatsapp" />
            </div>
            <p>&copy; 2025 TaskBridge. Tous droits réservés.</p>
        </div>
    )
}