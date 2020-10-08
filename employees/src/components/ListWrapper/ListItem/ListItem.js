import React from 'react';
import './ListItem.css';
import person from '../../../assets/images/person.jpg';

class ListItem extends React.Component {

    state = {
        employees: [],
    };

    componentDidMount() {
        fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(data => {
        return data.json();
        }).then(data => {
        let employees = data.data.map((item) => {
        return(
            <li key={item.id} className="listItem__wrapper">
                <img src={item.profile_image || person} alt="{item.employee_name}" className="listItem__image"/>
                <div>                
                    <h2 className="listItem__name">{item.employee_name}</h2>
                    <div className="listItem__id">id: {item.id}</div>
                    <div className="listItem__age">age: {item.employee_age}</div>
                    <div className="listItem__salary">salary: {item.employee_salary}$</div>
                </div>
            </li>
        )
        })
        this.setState({employees: employees});
        // console.log("state", this.state.employees);
    })
    }

    render() {
        return (
            <>{this.state.employees}</>
        );
    }
}
export default ListItem;