export default function NotFound() {
    return (
       <div style={{ 
           textAlign: 'center', 
           padding: '40px 20px', 
           fontFamily: '"Comic Sans MS", cursive, sans-serif', 
           minHeight: '60vh',
           display: 'flex', 
           flexDirection: 'column',
           justifyContent: 'center',
           alignItems: 'center',
       }}>
            <div style={{ fontSize: '50px', marginBottom: '15px' }}>🤔❓</div> 
 
            <h1 style={{ 
                fontSize: '36px', 
                color: '#333', 
                margin: '0 0 15px 0'
            }}>
                Waduh, Halaman Hilang Nih!
            </h1>
            <p style={{ 
                color: '#555', 
                marginBottom: '25px',
                maxWidth: '450px',
                lineHeight: '1.6' 
            }}>
                Sepertinya halaman yang Anda tuju mungkin sudah tidak ada lagi. Mari kembali ke tempat yang aman.
            </p>
            <a href="/" style={{ 
                padding: '12px 25px', 
                backgroundColor: '#28a745', 
                color: 'white', 
                textDecoration: 'none', 
                borderRadius: '20px', 
                fontWeight: 'bold',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
            }}>
                Yuk, Kembali ke Beranda!
            </a>
       </div>
    );
}