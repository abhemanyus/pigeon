import React from 'react';

function SignIn(props) {
  const signInWithGoogle = () => {
    const provider = new props.provider();
    props.auth.signInWithPopup(provider);
  };
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

export default SignIn;
