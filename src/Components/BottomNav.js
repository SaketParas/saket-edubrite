import React, { Component } from 'react'

class BottomNav extends Component {
    render() {
        return (
            <div className="d-flex justify-content-around footer mt-5 text-black-50">
                <div></div>
                <div>About</div>
                <div>Terms and Conditions</div>
                <div>Privacy Policy</div>
                <div>Contact</div>
                <div></div>
                <div>
                    <img src="https://blog.skyprivate.com/wp-content/uploads/2018/10/facebook-twitter-instagram-png-3.png" className="socialIcon" />
                </div>
                <div>@2019 All rights reserved</div>
                <div></div>
            </div>
        )
    }
}

export default BottomNav