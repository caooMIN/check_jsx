import { Card } from "react-bootstrap";
import "./App.css";
import Description from "./components/Description";
import Name from "./components/Name";
import Price from "./components/Price";
import product from "./product";

function App() {
  return (
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            <Name name={product.name} />
          </Card.Title>
          <Card.Text>
            <Description description={product.description} />
            <Card.Img variant="top" src={product.image} />
            <Price price={product.price} />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
