import Style from './Header.module.css'  
function Header() {
    return(
        <div className={Style.header}>
            <div className={Style.container}>
                <section>
                    <h1>Pokemon</h1>
                </section>
                <section>
                    <input className={Style.input}/>
                    <button>eae</button>
                </section> 
            </div>
        </div>
    );
}

export default Header;