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

            </div>

            /* <div class="table-box">

                    <div class="table-row table-head">

                        <div class="table-cell head-cell">
                            <p> SrNo</p>
                        </div>
                        <div class="table-cell">
                            <p>First Name</p>
                        </div>
                        <div class="table-cell">
                            <p> Last Name</p>
                        </div>
                        <div class="table-cell">
                            <p> Edit</p>
                        </div>
                        <div class="table-cell">
                            <p> Delete</p>
                        </div>
                    </div>
                    <div class="table-row">

                        <div class="table-cell head-cell">
                            <p> SrNo</p>
                        </div>
                        <div class="table-cell">
                            <p>First Name</p>
                        </div>
                        <div class="table-cell">
                            <p> Last Name</p>
                        </div>
                        <div class="table-cell">
                            <button class="edit" type="button" onclick="getEditValue();">Edit</button>
                        </div>
                        <div class="table-cell last-cell">
                            <button class="delete" type="button" onclick="getDeleteValue();">Delete</button>
                        </div>
                    </div>
                </div>
    </div> */
        );
    }
}