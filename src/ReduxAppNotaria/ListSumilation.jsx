import { useSelector } from "react-redux";

const ListSumilation =()=>{

    const List = useSelector(state => state.ListSumulation)

    return <>
        <table className="table table-striped table-hover">
            <thead className="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Droits</th>
                    <th>Conservation</th>
                    <th>Date</th>
                    <th>Totaliter</th>
                </tr>
            </thead>
            <tbody>
                {List.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.droits}</td>
                        <td>{item.conservation}</td>
                        <td>{item.date}</td>
                        <td>{item.totaliter}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}

export default ListSumilation;