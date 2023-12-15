function Navbar({onConnectWallet,walletAddress}){
    return (
        <nav className="navbar">
            <div className="navbar-brand">NFT Marketplace</div>
            <div className="navbar-menu">
                <button className="connect-wallet-button" onClick={onConnectWallet}>{walletAddress || "Wallet"}
                </button>
            </div>
        </nav>
    )
}
export default Navbar;