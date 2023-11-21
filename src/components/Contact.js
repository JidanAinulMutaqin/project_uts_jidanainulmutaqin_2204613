import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Modal = ({ message, onClose }) => {
    const fade = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 300 },
    });
  
    return (
      <animated.div style={fade} className="modal">
        <div className="modal__content">
          <p>{message}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </animated.div>
    );
};

const Contact=()=>{
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pesan: '',
    });

    const fadeIn = useSpring({
        from: { opacity: 0},
        to: { opacity: 1},
        config: { duration: 1500 },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform your form submission logic here
        // For example, you can show a success message in the pop-up
        setModalMessage('Pesan Telah Terkirim!');
        setModalVisible(true);
        setFormData({
            name: '',
            email: '',
            pesan: '',
        });
    };
    
    const closeModal = () => {
        setModalVisible(false);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [id]: value,
        }));
    };

    return(
        <div>
            <animated.section style={fadeIn} class="contact section" id="contact">
                <h2 class="section-title">Contact Me</h2>

                <div class="contact__container bd-grid">
                    <div class="contact__info">
                        <h3 class="contact__subtitle"><FaEnvelope /> EMAIL</h3>
                        <span class="contact__text">zjidan12345@gmail.com</span>

                        <h3 class="contact__subtitle"><FaPhone /> PHONE</h3>
                        <span class="contact__text">+62 8122 1928 402</span>

                        <h3 class="contact__subtitle"><FaMapMarkerAlt /> ADRESS</h3>
                        <span class="contact__text">Desa Panaragan, Kec Cikoneng, Kab Ciamis</span>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15830.237884679096!2d108.25448673632208!3d-7.290856599115873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f5a41060c8bd7%3A0x7bf6cb1c37d85737!2sPanaragan%2C%20Kec.%20Cikoneng%2C%20Kabupaten%20Ciamis%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1700578570052!5m2!1sid!2sid" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <form action="" class="contact__form" onSubmit={handleSubmit}>
                        <div class="contact__inputs">
                            <input type="text" id="name" placeholder="Name" class="contact__input" value={formData.name} onChange={handleInputChange}></input>
                            <input type="mail" id="email" placeholder="Email" class="contact__input" value={formData.email} onChange={handleInputChange}></input>
                        </div>

                        <textarea name="pesan" id="pesan" cols="0" rows="10" class="contact__input" placeholder="Masukkan pesan disini..." value={formData.pesan} onChange={handleInputChange}></textarea>

                        <input type="submit" value="Kirim" class="contact__button"></input>
                    </form>
                </div>
            </animated.section>
            {modalVisible && (
                <Modal message={modalMessage} onClose={closeModal} />
            )}
        </div>
    );
}

export default Contact;