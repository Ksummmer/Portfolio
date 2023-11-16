const Contacts = () => {
    return ( 
        <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Dresden, Germany</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Phone</h2>
                        <p><a href="tel:+79051234567">+49 1525 6552804</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:webdev@protonmail.com">kseniia_belova@web.de</a></p>
                    </li>
                </ul>

        </div>
    </main>
     );
}
 
export default Contacts;