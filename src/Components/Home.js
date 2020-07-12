import React, { Component } from 'react';
import { connect } from 'react-redux';
import { remove } from './../Redux/Action';
import { Link } from 'react-router-dom';
import BottomNav from './BottomNav';


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            final_data: [],
            page: 1,
            per_page: 5,
            search: '',
        }
    }
    on_change = () => {
        let x = this.state.final_data.sort((a, b) => a.f_name > b.f_name ? -1 : 1)
        this.setState({
            final_data: x
        })
    }
    on_change_desen = () => {
        let x = this.state.final_data.sort((a, b) => (a.dob > b.dob ? -1 : 1))
        this.setState({
            final_data: x
        })
    }
    handleDropDown = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: Number(e.target.value) })
    }
    handleDelete = (id) => {
        console.log(id);
        this.props.remove(id)
    }
    handle_change = (e) => {
        this.setState({ page: Number(e) })
    }
    handleSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }


    render() {
        console.log(this.props.add.stored_data);
        this.state.final_data = this.props.add.stored_data
        let data = this.state.final_data
        let pageNo = this.state.page
        let per_page_no = this.state.per_page
        var total_page = Math.ceil(data.length / per_page_no)
        let start = (pageNo - 1) * per_page_no
        let end = start + per_page_no
        let pagination_data = data.slice(start, end)
        console.log(pagination_data);
        var button_number = []
        for (var i = 1; i <= total_page; i++) {
            button_number.push(i)
        }
        var button = button_number.map(a => {
            return (
                <button className="btn btn-primary mr-1" onClick={() => this.handle_change(a)}>{a}</button>
            )
        })
        // ****************search**
        let user = pagination_data;
        let search = this.state.search.trim().toLowerCase();
        if (search.length > 0) {
            user = user.filter(function (user) {
                // return user.company.toLowerCase().match(search);
                if (user.f_name) {
                    return (user.f_name).toLowerCase().match(search);
                }
            })
        }
        // ****************search**
        let show_user = user.reverse().map(e => {
            return (
                <div className="container">
                    <div class="card mt-3">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    {e.f_name + " "}{e.l_name}<br />
                                    {e.phone}<br />
                                    {e.email}<br />
                                    Date of Birth : {e.dob}
                                </div>
                                <div class="col">
                                    <Link to={`/edit/${e.id}`}>edit</Link><bt />
                                    <button className="ml-3" onClick={() => this.handleDelete(e.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div className="col-4 mt-3 p-1 mb-2 bg-primary text-white">
                    <input class="form-control" name="serach" value={this.state.search} type="text" placeholder="Search for User" onChange={this.handleSearch} />
                </div>
                <div class="card text-center mt-2">
                    <div class="card-header">
                        <h3 class="text-primary">User Details</h3>
                    </div>
                    <div class="card-body">

                        {show_user}

                    </div>
                    <div class="card-footer text-muted">
                        {button}
                        <select className="form-control offset-2  btn btn-primary" style={{ width: "120px" }} onChange={this.handleDropDown} name="per_page">
                            <option value="" selected>Per Page</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                        </select>
                        <Link to="/" class="btn btn-outline-danger ml-5">Add user details</Link>
                        <div className="mt-2">
                            sort filter by : <button class="btn btn-outline-success" onClick={this.on_change}> First name</button>
                            <button class="btn btn-outline-success ml-2" onClick={this.on_change_desen}>Date Of Birth</button>
                        </div>
                    </div>
                </div>
                <BottomNav />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        add: state.comments
    }
}
const mapDispatchToState = (dispatch) => {
    return {
        remove: (data) => dispatch(remove(data))
    }
}
export default connect(mapStateToProps, mapDispatchToState)(Home) 
