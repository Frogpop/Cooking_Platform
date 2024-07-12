import React,{useState} from "react";
import { ListGroup, Col, Button} from "react-bootstrap";
import schools from '../res/shools.json'
import ModelSchool from "../Components/ModelSchool";

export default function Schools(){
    const [currentPage, setCurrentPage] = useState(1);
    const [idd, setId] = useState(0);
    const [show, setShow] = useState(false);
    const schoolsPerPage = 5;
    const handleClose = () => setShow(false);
    const handleShow = (item) => {
        setShow(true);
        setId(item);
    };
    const indexOfLastSchool = currentPage * schoolsPerPage;
    const indexOfFirstSchool = indexOfLastSchool - schoolsPerPage;
    const currentSchools = schools.slice(indexOfFirstSchool, indexOfLastSchool);
    /*const list = schools.map((info) =>{
        return(
            <ListGroup.Item onClick={() =>handleShow(info.id)}>{info.name}</ListGroup.Item>
        )
    });*/
    const list = currentSchools.map((info) => (
        <ListGroup.Item key={info.id} onClick={() => handleShow(info.id)} className="mb-3 ml-10 mr-10">
            {info.name}
        </ListGroup.Item>
    ));
    const nextPage = () => {
        if (currentPage < Math.ceil(schools.length / schoolsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    return(
        <div className="p-5">
            <ListGroup style={{maxWidth : "1000px"}} >
                {list}
            </ListGroup>
            <Col className="mt-3">
                <Button
                    variant="primary"
                    onClick={prevPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </Button>
                <Button
                    variant="primary"
                    onClick={nextPage}
                    disabled={currentPage === Math.ceil(schools.length / schoolsPerPage)}
                >
                    Next
                </Button>
                {/*<Col>

                </Col>
                    <Col className="text-right">

                    </Col>*/}
            </Col>
            <ModelSchool item={idd} show={show} handleClose={handleClose}/>
        </div>
    )
}