import React from "react";
import '/home/admin1/Desktop/BackEndProjects/calories-application/calories-frontend/src/components/style.scss'

export class Calories extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="base-container" >
                <div className="header">Calories</div>
                <div className="content">

                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="mealtitle">Meal Title</label>
                            <input type="text" name="title" placeholder="Meal Title" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Calories Count</label>
                            <input type="number" name="count" placeholder="Calories Count" />
                        </div>

                        <button type="button" className="btn">
                            Add Meal
          </button>
                    </div>
                </div>

                <div className="userTableMain" >
            <div className="leftDiv" >
                <div className="nameAndEmail">
                    <div className="usernameDiv">
                        <div className="tableHeaderTextName">Meals Title </div>
                    </div>
                    <div className="emailDiv">
                        <div className="tableHeaderTextEmail">Count</div>
                    </div>
                </div>
            </div>
            <div className="rightDiv">
                <div className="labHeaderDiv">
                    <div  className="tableHeaderTextLab">Edit</div>
                </div>
                <div className='tableHeaderTextStatus' >
                    Delete
                </div>
            </div>
            
        </div>
                </div>


        );
    }
}