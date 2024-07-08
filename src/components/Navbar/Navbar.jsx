import "./Navbar.css"
export const Navbar = () => {
    return (
        <header className="heading d-flex align-center">

            <h1 className="heading-1">
                <a className="link" href="/">Blue-Hut</a>
            </h1>
            <div className="form-container d-flex align-center curser-pointer shadow">
                <span className="form option">Any where</span>
                <span className="border-right-1px"></span>
                <span className="form option"></span>
                <span className="border-right-1px"></span>
                <span className="form option"></span>

            </div>
            <nav className="d-flex align-center gap-large">
                <div className="nav d-flex align-center cursor-pointer">
                    <span className="material-symbols-outlined profile-option menu">
                        menu
                    </span>
                    <span className="material-symbols-outlined profile-option person">
                        person
                    </span>
                </div>
            </nav>
        </header>


    )
}
