import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { API_BASE_URL } from "../config/config";

function App() {
    const [elementList, setElementList] = useState([]);//넘어온 과일 목록
    useEffect(() => {
        const url = `${API_BASE_URL}/element/list`;

        axios
            .get(url, {})
            .then((response) => {
                setElementList(response.data);
            });

    }, []);

    return (
        <>
            <Table hover style={{ margin: '5px' }}>
                <thead>
                    <tr>
                        <th>아이디</th>
                        <th>상품명</th>
                        <th>단가</th>
                        <th>카테고리</th>
                        <th>수량</th>
                        <th>이미지</th>
                        <th>상세설명</th>
                    </tr>
                </thead>
                <tbody>
                    {elementList.map((element) =>
                        <tr key={element.id}>
                            <td>{element.id}</td>
                            <td>{element.name}</td>
                            <td>{Number(element.price).toLocaleString()} 원</td>
                            <td>{element.category}</td>
                            <td>{Number(element.stock).toLocaleString()} 개</td>
                            <td><img src={element.image} alt={element.name} style={{ width: '100px', height: 'auto' }} /></td>
                            <td>{element.description}</td>
                        </tr>
                    )}
                </tbody>
            </Table >
        </>
    )
}

export default App;