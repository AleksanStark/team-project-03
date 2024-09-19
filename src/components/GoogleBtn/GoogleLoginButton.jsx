import { useEffect, useState, useCallback } from "react";
import { FcGoogle } from "react-icons/fc";
import styles from "./GoogleLoginButton.module.css";
import { useDispatch } from "react-redux";
import { oAuthLogin } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOAuthCode = useCallback(async (code) => {
  try {
    const response = await fetch('https://watertracker-db.onrender.com/auth/confirm-oauth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }), // Send the code in the request body
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${errorData.message}`); // Capture specific error message
    }

    const data = await response.json();
    dispatch(oAuthLogin({ code }))
      .unwrap()
      .then(() => {
        navigate("/homepage");
      })
      .catch((err) => {
        console.error('Dispatch error:', err);
      });
  } catch (error) {
    console.error('Error during OAuth code confirmation:', error.message);
  }
}, [dispatch, navigate]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      handleOAuthCode(code); // This should trigger the POST request
    }
  }, [handleOAuthCode]);

  const handleGoogleLogin = async () => {
    setLoading(true);

    try {
      const response = await fetch(`https://watertracker-db.onrender.com/auth/get-oauth-url`);

      if (response.ok) {
        const data = await response.json();

        if (data.data && data.data.url) {
          window.location.href = data.data.url;
        } else {
          console.error("OAuth URL not found in the response data.");
        }
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending request:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button className={styles.googleLoginButton}
      onClick={handleGoogleLogin}
      disabled={loading}
    >
      <div className={styles.buttonContentWrapper}>
        <div className={styles.buttonIcon}>
          <FcGoogle className={styles.iconGoogle} />
        </div>
        <div className={styles.buttonContents}>Sign in with Google</div>
      </div>
    </button>
  );
};

export default GoogleLoginButton;
