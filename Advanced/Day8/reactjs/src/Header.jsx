import React from "react";

function Header() {
    return (
        <div id="header" className="text-center p-3 border border-warning bg-warning bg-gradient">
            <h2>Fall Tours 20% Off Sale</h2>
            <p>Use code <span className="text-secondary">EndOfSummer2024</span> for discount</p>
        </div>
    );
}

export default Header;