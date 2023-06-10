import Table from "react-bootstrap/Table";
import React from "react";

const TaskList = () => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th className="col-8 col-lg-1">Check</th>
                    <th className="col-8 col-lg-8">Kegiatan</th>
                    <th className="col-8 col-lg-1">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr className="">
                    <td>
                        <input type="checkbox"></input>
                    </td>
                    <td
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                        Larry the Bird{" "}
                        <button
                            style={{
                                border: "none",
                                backgroundColor: "orange",
                                borderRadius: "5px",
                                padding: "5px 10px",
                            }}>
                            Edit
                        </button>
                    </td>
                    <td>
                        <button
                            style={{
                                border: "none",
                                backgroundColor: "red",
                                color: "white",
                                borderRadius: "5px",
                                padding: "5px 10px",
                            }}>
                            Hapus
                        </button>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
};

export default TaskList;
