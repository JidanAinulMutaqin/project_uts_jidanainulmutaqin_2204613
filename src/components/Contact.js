import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring';

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
    };
    
    const closeModal = () => {
        setModalVisible(false);
    };

    return(
        <div>
            <animated.section style={fadeIn} class="contact section" id="contact">
                <h2 class="section-title">Contact Me</h2>

                <div class="contact__container bd-grid">
                    <div class="contact__info">
                        <h3 class="contact__subtitle">EMAIL</h3>
                        <span class="contact__text">zjidan12345@gmail.com</span>

                        <h3 class="contact__subtitle">PHONE</h3>
                        <span class="contact__text">+62 8122 1928 402</span>

                        <h3 class="contact__subtitle">ADRESS</h3>
                        <span class="contact__text">Panaragan, Cikoneng, Ciamis West java</span>
                    </div>

                    <form action="" class="contact__form" onSubmit={handleSubmit}>
                        <div class="contact__inputs">
                            <input type="text" id="name" placeholder="Name" class="contact__input"></input>
                            <input type="mail" id="email" placeholder="Email" class="contact__input"></input>
                        </div>

                        <textarea name="pesan" id="pesan" cols="0" rows="10" class="contact__input" placeholder="Masukkan pesan disini..."></textarea>

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