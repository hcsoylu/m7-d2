import { Container, Navbar, Form, FormControl, Button } from "react-bootstrap";

const Home = (props) => {
  return (
    <div className="container">
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">Lets Find job!</Navbar.Brand>
        </Container>
      </Navbar>
      <Form
        inline
        className="mt-5"
        onSubmit={(e) =>
          props.handleSubmit(e).then(props.history.push("/results"))
        }
      >
        <Form.Label>Location : </Form.Label>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2 ml-3"
          name="locationInput"
          onChange={props.handleInput}
          value={props.locationInput}
        />

        <Form.Label>Position : </Form.Label>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2 ml-3"
          name="positionInput"
          onChange={props.handleInput}
          value={props.positionInput}
        />

        <Button
          type="submit"
          variant="outline-primary"
          //onClick={() => props.history.push("/results")}
        >
          Search
        </Button>
      </Form>
    </div>
  );
};

export default Home;
