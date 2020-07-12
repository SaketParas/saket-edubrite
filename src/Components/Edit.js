import React, { Component } from 'react';
import { connect } from 'react-redux';
import { edit } from './../Redux/Action';
import { Link, Redirect } from 'react-router-dom';
import BottomNav from './BottomNav';

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            f_name: '',
            l_name: '',
            contact_t: '',
            phone: '',
            dob: '',
            email: ''
        }
    }
    componentDidMount() {
        this.props.Editdata.stored_data.map(e => {
            if (e.id == this.props.match.params.id) {
                this.setState({ f_name: e.f_name, l_name: e.l_name, contact_t: e.contact_t, phone: e.phone, dob: e.dob, email: e.email, id: e.id })
            }
        })
    }

    input_change = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    input_submit = (e) => {
        e.preventDefault()
        console.log(this.state);

        this.props.update(this.state)
        alert('sucessfull')
        this.props.history.push('/Home')
    }
    render() {
        return (
            <React.Fragment>
                <div class="card mt-5 container">
                    <div class="card-header">
                        <h5 class="text-primary">Edit your Personal Details</h5>
                    </div>
                    <div class="card-body">
                        <form onSubmit={this.input_submit}>
                            <div class="row">
                                <div class="col">
                                    First Name :<input type="text" class="form-control" maxlength="25" placeholder="First Name" name="f_name" value={this.state.f_name} onChange={this.input_change} required />
                                </div>
                                <div class="col">
                                    Last Name :<input type="text" class="form-control" maxlength="25" placeholder=" Last Name" name="l_name" value={this.state.l_name} onChange={this.input_change} required />
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    Contact Type:<select class="custom-select" name="contact_t" value={this.state.contact_t} onChange={this.input_change}>
                                        <option selected>Contact Number Type</option>
                                        <option value="home">Home</option>
                                        <option value="office">Offine</option>
                                        <option value="personal">Personal</option>
                                    </select>
                                </div>
                                <div class="col">
                                    Contact:<input input type="tel" pattern="^\d{10}$" required class="form-control" placeholder="Phone Number" name="phone" value={this.state.phone} onChange={this.input_change} />
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    Date Of Birth :<input type="date" class="form-control" placeholder="Date Of Birth" name="dob" value={this.state.dob} onChange={this.input_change} />
                                </div>
                                <div class="col">
                                    Email :<input type="email" class="form-control" placeholder="Email" name="email" value={this.state.email} onChange={this.input_change} />
                                </div>
                            </div>
                            <button type="submit" class="btn btn-outline-success mt-3">Edit</button>
                        </form>
                    </div>

                    <div class="card-footer text-muted">
                        <Link to="/Home" class="btn btn-outline-danger mt-3">User Details</Link>
                    </div>
                    <BottomNav />
                </div>

            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        Editdata: state.comments
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        update: (send) => dispatch(edit(send))
    }
}
export default connect(mapStateToProps, mapDispatchToState)(Edit)