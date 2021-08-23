import React from 'react';

function SignOut(props) {
  const {auth} =props;
  return auth.currentUser && (
    <div>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}

export default SignOut;
