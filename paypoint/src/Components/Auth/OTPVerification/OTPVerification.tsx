import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './OTPVerification.module.css';

const OTPVerification = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [countdown, setCountdown] = useState<number>(60);
  const [canResend, setCanResend] = useState<boolean>(false);
  
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  // Get user data from navigation state
  const userData = location.state as {
    phoneNumber: string;
    ghanaCardId: string;
    isSignUp: boolean;
  } || {
    phoneNumber: '+233 24 123 4567',
    ghanaCardId: 'GHA-123-4567-8',
    isSignUp: false
  };

  useEffect(() => {
    // Start countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Focus first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }

    return () => clearInterval(timer);
  }, []);

  const handleOtpChange = (index: number, value: string) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all fields are filled
    if (newOtp.every(digit => digit !== '') && index === 5) {
      handleSubmit(newOtp.join(''));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    const pastedNumbers = pastedData.replace(/\D/g, '').slice(0, 6).split('');
    
    if (pastedNumbers.length === 6) {
      const newOtp = [...otp];
      pastedNumbers.forEach((num, index) => {
        newOtp[index] = num;
      });
      setOtp(newOtp);
      
      // Focus last input
      inputRefs.current[5]?.focus();
    }
  };

  const handleSubmit = async (submittedOtp?: string) => {
    const otpValue = submittedOtp || otp.join('');
    
    if (otpValue.length !== 6) {
      setError('Please enter the complete 6-digit code');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Simulate API verification
      console.log('Verifying OTP:', otpValue);
      
      // TODO: Integrate with actual OTP verification API
      // const response = await authService.verifyOTP(otpValue, userData.phoneNumber);
      
      // For demo - simulate successful verification
      setTimeout(() => {
        setIsLoading(false);
        
        // Navigate based on user type and context
        if (userData.isSignUp) {
          // New user - navigate to property linking
          navigate('/find-property', { 
            state: { 
              phoneNumber: userData.phoneNumber,
              ghanaCardId: userData.ghanaCardId,
              isNewUser: true
            }
          });
        } else {
          // Existing user - navigate to dashboard
          navigate('/dashboard', { 
            state: { 
              phoneNumber: userData.phoneNumber,
              ghanaCardId: userData.ghanaCardId
            }
          });
        }
      }, 1500);
      
    } catch (err) {
      setIsLoading(false);
      setError('Invalid verification code. Please try again.');
      
      // Clear OTP on error
      setOtp(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
    }
  };

  const handleResendCode = async () => {
    if (!canResend) return;

    setIsLoading(true);
    setError('');
    setCanResend(false);
    setCountdown(60);

    try {
      // TODO: Integrate with resend OTP API
      // await authService.resendOTP(userData.phoneNumber);
      
      setTimeout(() => {
        setIsLoading(false);
        // Success message could be shown here
        console.log('OTP resent successfully');
        
        // Clear OTP and focus first input
        setOtp(['', '', '', '', '', '']);
        inputRefs.current[0]?.focus();
      }, 1000);
      
    } catch (err) {
      setIsLoading(false);
      setError('Failed to resend code. Please try again.');
      setCanResend(true);
    }
  };

  const formatPhoneNumber = (phone: string) => {
    // Mask phone number for display
    return phone.replace(/(\+\d{3} \d{2} )\d{3} (\d{4})/, '$1*** $2');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.backButton} onClick={() => navigate('/auth/property-owner')}>
          ← Back
        </div>
        <h1 className={styles.title}>Verify Your Identity</h1>
        <p className={styles.subtitle}>
          Enter the 6-digit code sent to your phone
        </p>
      </div>

      <div className={styles.verificationInfo}>
        <div className={styles.phoneDisplay}>
          <span className={styles.phoneIcon}>📱</span>
          <span className={styles.phoneNumber}>
            {formatPhoneNumber(userData.phoneNumber)}
          </span>
        </div>
        <div className={styles.ghanaCardDisplay}>
          Ghana Card: {userData.ghanaCardId}
        </div>
      </div>

      <form 
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }} 
        className={styles.form}
      >
        {error && (
          <div className={styles.errorAlert}>
            <span className={styles.errorIcon}>⚠️</span>
            {error}
          </div>
        )}

        <div className={styles.otpContainer}>
          <label className={styles.otpLabel}>Enter Verification Code</label>
          <div className={styles.otpInputs}>
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={index === 0 ? handlePaste : undefined}
                className={styles.otpInput}
                disabled={isLoading}
              />
            ))}
          </div>
        </div>

        <div className={styles.timerSection}>
          {!canResend ? (
            <div className={styles.timer}>
              <span className={styles.timerIcon}>⏱️</span>
              Resend code in {countdown}s
            </div>
          ) : (
            <button
              type="button"
              className={styles.resendButton}
              onClick={handleResendCode}
              disabled={isLoading}
            >
              <span className={styles.resendIcon}>🔄</span>
              Resend Verification Code
            </button>
          )}
        </div>

        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={isLoading || otp.join('').length !== 6}
        >
          {isLoading ? (
            <>
              <div className={styles.spinner}></div>
              Verifying...
            </>
          ) : (
            'Verify & Continue'
          )}
        </button>
      </form>

      <div className={styles.helpSection}>
        <h3 className={styles.helpTitle}>Didn't receive the code?</h3>
        <ul className={styles.helpList}>
          <li>Check your SMS messages</li>
          <li>Ensure your phone has network connection</li>
          <li>Wait for the timer to expire to resend</li>
          <li>Contact support if issues persist</li>
        </ul>
        
        <div className={styles.contactSupport}>
          <button 
            className={styles.supportButton}
            onClick={() => navigate('/support')}
          >
            Contact Support
          </button>
        </div>
      </div>

      <div className={styles.securityNote}>
        <span className={styles.securityIcon}>🔒</span>
        <span>This code expires in 10 minutes for your security</span>
      </div>
    </div>
  );
};

export default OTPVerification;