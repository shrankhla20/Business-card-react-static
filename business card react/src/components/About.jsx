import React from "react";

export default function About(){
    return(
        <main>
            <div className="aboutt">
                <img src = "src\assets\IMG_20211011_132157.jpg" className="About--img" />
                <h2 className="About--name">Shrankhla Srivastava</h2>
                <h4 className="About--profile">Software Developer</h4>
                <div className="About--button">
                <button className="About--button--email">Email</button>
                <button className="About--button--LinkedIn">LinkedIn</button>
                </div>
            </div>
        </main>
    )
}