
import { useState } from 'react';
import('./orderForm.scss');

export default function OrderForm({ onCancel, onSave }) {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [send, setSend] = useState('');


    const validateForm = (name, surname, phone) => {
        const regName = /^[A-Z][a-z]{3,}$/;
        const regPhone = /^\d{10}$/;

        if (!regName.test(name)) {
            setError('Pls input correct name')
            return false;
        }
        else if (!regName.test(surname)) {
            setError('Pls input correct surname');
            return false;
        }
        else if (!regPhone.test(phone)) {
            setError('Phone number format 0505555555')
            return false;
        }
        else {
            return true;
        }
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleSurnameChange = (e) => {
        setSurname(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);

    }

    const handleForm = () => {

        if (validateForm(name, surname, phone)) {
            const formOrder = {
                id: Date.now(),
                name: `${name} ${surname}`,
                phone: phone
            }
            onSave(formOrder);
            setName('');
            setSurname('');
            setPhone('');
            setSend('Your Order Sent')
            //
            setTimeout(() => {
                setSend('')
            }, 3000);
            setTimeout(() => {
                onCancel();
            }, 3000);

        }
    }
    const HandleCancel = () => {
        onCancel();
        setName('');
        setSurname('');
        setPhone('');

    }

    return (
        <form className="form">
            <div className="form-inputs">
                <input type='text' placeholder='Name' name='name' value={name} onChange={handleNameChange} />
                <input type='text' placeholder='Surname' name='surname' value={surname} onChange={handleSurnameChange} />
                <input type='text' placeholder='Phone ex: 0505555555' name='phone' value={phone} onChange={handlePhoneChange} />
            </div>
            {error && <div className="note" style={{ color: 'red' }}>{error}</div>}
            <div className="form-buttons">
                <input type='button' value={'Send'} onClick={handleForm} />
                <input type='button' value="Cancel" onClick={HandleCancel} />

            </div>
            {send && <div className="note" style={{ color: 'red' }}>{send}</div>}
        </form>
    )
}