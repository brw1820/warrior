import React, { Component } from "react";
import  { Container, Row, Button, Form, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import Workout from "../../components/Workout/Workout";
import API from "../../utils/workouts";

const styles = {
  // center: {
  //   width: "500px",
  //   margin: "0 auto",  
  // },
  Row:{
    maxWidth: "100%",

    // marginLeft: "35px"
    padding: 20,
  },
  Button: {
    margin: "0 3px"
  },
  container: {
      marginTop: 25,
      border: "10px solid #df6d3e",
      backgroundColor: "#dfab9e",
      padding: 30,
  },
  h1: {
    textAlign: "center"
  }
};


class ViewWorkouts extends Component {
  
  state = {
    workoutdata : []
  };
  
  componentDidMount() {
    this.loadWorkouts();
  }
  // Loads all books and sets them to books
  loadWorkouts = () => {
    API.getWorkouts()
      .then(res => {
        console.log(res.data);
        this.setState({workoutdata: res.data});
        
      }) 
      .catch(err => console.log(err));
  };

  

  render() {
    return (
      <div>          
        <Container style={styles.container}>
          <Row>
            <Col md={{ span: 6, offset: 3 }} style={{ textAlign: "center"}}>
              <h1>My Workouts</h1>
            </Col>
          </Row>
          <hr />
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Button variant="success" style={styles.Button}>
                <Link to="/createworkout" id="white">Add Workout</Link>
              </Button>{" "}
              <Button variant="info" style={styles.Button}>
                <Link to="/myaccount" id="white">View My Profile</Link>
              </Button>{" "}
            </Col>
          </Row>
          <br />
          <Row>
            <Form>
              <Row style={styles.Row} className=".d-sm-inline-flex">
                <Col>
                {this.state.workoutdata.map((filteredworkout) => (
                  <Workout
                    name={filteredworkout.name}
                    description={filteredworkout.description}
                    id={filteredworkout._id}
                    location={filteredworkout.location}
                    days={filteredworkout.daysArray}     
                  />
                ))}
                </Col>
              </Row>
            </Form>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ViewWorkouts;
