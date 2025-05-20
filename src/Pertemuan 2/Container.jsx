export default function Container({children}){
    return(
        <div className="card">
            <h1>Tugas Pertemuan 2</h1>
            <br/>
                {children}
            <br/>
            <footer>
                <p>2025 - Muhammad Rizky</p>
            </footer>
        </div>
    )
}