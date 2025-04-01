import { useState } from "react";


export const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [error, setError] = useState('');
  
    const handleSubmit = async (e: any) => {
      e.preventDefault();
      if (!email) {
        setError('Proszę podać adres e-mail.');
        return;
      }
      // Tutaj dodaj kod do obsługi subskrypcji, np. wysyłanie danych na serwer
      // Po pomyślnej subskrypcji:
      setIsSubscribed(true);
      setEmail('');
      setError('');
    };
  
    return (
      <div>
        {isSubscribed ? (
          <p>Dziękujemy za subskrypcję!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Adres e-mail:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <button type="submit">Subskrybuj</button>
          </form>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    );
  };
  
