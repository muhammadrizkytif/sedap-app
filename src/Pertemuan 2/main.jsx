import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import './custom.css';
import ArtikelDetail from "./ArtikelDetail";
import QnA from './QnA';
import ListProduk from "./ListProduk";

createRoot(document.getElementById("root"))
    .render(
        <div>
        <Container>
            
        <div className="card">
        {<ArtikelDetail/>}
        
        </div>

        <div className="card">
        {<QnA/>}
        </div>

        <div className="card">
        {<ListProduk/>}
        </div>

     
            
        </Container>
    </div>
    )