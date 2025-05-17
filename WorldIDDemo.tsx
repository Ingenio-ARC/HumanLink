import React from "react";
import { UsernameSearch, useIsUserVerified } from "@worldcoin/minikit-react";

// Use Vite environment variables
const app_id = import.meta.env.VITE_WLD_APP_ID || "app_cd3511284ee3bb5756dfcfcf7ffa9585";
const action = import.meta.env.VITE_WLD_ACTION || "login";

export default function WorldIDDemo() {
  const [walletAddress, setWalletAddress] = React.useState("");
  const { isUserVerified, isLoading, isError } = useIsUserVerified(walletAddress);
  const [searchedUsernames, setSearchedUsernames] = React.useState([]);

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", textAlign: "center" }}>
      <h2>World ID Verification Demo</h2>
      <input
        type="text"
        placeholder="Enter wallet address"
        value={walletAddress}
        onChange={e => setWalletAddress(e.target.value)}
        style={{ width: "100%", marginBottom: "1rem" }}
      />
      <div>
        {isLoading ? "Checking verification..." : isUserVerified ? "User is verified!" : "User is not verified."}
        {isError && <div style={{ color: 'red' }}>Error: {String(isError)}</div>}
      </div>
      <h3>Username Search</h3>
      <UsernameSearch
        value={walletAddress}
        handleChange={e => setWalletAddress(e.target.value)}
        setSearchedUsernames={setSearchedUsernames}
      />
      <pre style={{ textAlign: 'left', background: '#f5f5f5', padding: '1rem', marginTop: '1rem' }}>{JSON.stringify(searchedUsernames, null, 2)}</pre>
    </div>
  );
}
