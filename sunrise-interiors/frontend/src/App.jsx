import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const makeCall = async () => {
    if (!phone.trim()) {
      alert("Please enter your phone number");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/call",
        {
          phone: phone.trim(),
        }
      );

      alert(response.data.message || "Call Started Successfully!");
    } catch (err) {
      console.error("Error:", err);

      if (err.response) {
        alert(err.response.data.message || "Backend Error");
      } else if (err.request) {
        alert(
          "Cannot connect to backend.\nMake sure your backend is running on port 5000."
        );
      } else {
        alert(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="background"></div>

      <div className="card">
        <div className="icon">🏡</div>

        <h1>Sunrise Interiors</h1>

        <p>
          Get an instant AI consultation for your dream home interiors.
        </p>

        <input
          type="tel"
          placeholder="+91 9876543210"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button onClick={makeCall} disabled={loading}>
          {loading ? "Calling..." : "📞 Call Me"}
        </button>

        <div className="footer">
          <div>
            ⚡
            <span>Instant Call</span>
          </div>

          <div>
            🤖
            <span>AI Powered</span>
          </div>

          <div>
            🔒
            <span>Secure</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;