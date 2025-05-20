export default function HelloWorld() {
  const propsUserCard = {
    nama: "Goku",
    nim: "999999",
    tanggal: "2025-01-01",
  };

  return (
    <div>
      <h1>Hello World</h1>
      <p>Selamat Belajar ReactJs</p>
      <GretingBinjai />
      <QuoteText />
      <UserCard
        nama="Rizky"
        nim="145"
        tanggal={new Date().toLocaleDateString()}
      />
      <UserCard {...propsUserCard} />

      <img src="img/Picture1.jpg" alt="logo" />
    </div>
  );
}

function GretingBinjai() {
  return <small>Salam Dari Binjai</small>;
}

function QuoteText() {
  const text = "Harimau Harimau Harimau";
  const text2 = "Harimau Malaya";
  return (
    <div>
      <hr />
      <p>{text.toLowerCase()}</p>
      <p>{text2.toUpperCase()}</p>
    </div>
  );
}

function UserCard(props) {
  return (
    <div>
      <hr />
      <h3>Nama: {props.nama}</h3>
      <p>NIM: {props.nim}</p>
      <p>Tanggal: {props.tanggal}</p>
    </div>
  );
}
