import React from "react";
import '/home/admin1/Desktop/BackEndProjects/calories-application/calories-frontend/src/components/style.scss'
import MealService from '../../services/meal.service';
export class Calories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mealtitle: '',
            calCount: ''
        }
    }

    onChangeMealtitle(event) {
        this.setState({
            mealtitle: event.target.value
        })
    }
    onChangeCalCount(event) {
        this.setState({
            calCount: event.target.value
        })

    }
    addMeal() {
        console.log(this.state.calCount, this.state.mealtitle);
        let mealDto = {
            "title": this.state.mealtitle,
            "caloriesCount": this.state.calCount
        }
         MealService.addMeal(mealDto).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="base-container" >
                <div className="header">Calories</div>
                <div className="content">

                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="mealtitle">Meal Title</label>
                            <input type="text" name="title" placeholder="Meal Title" value={this.state.mealtitle} onChange={(event) => this.onChangeMealtitle(event)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Calories Count</label>
                            <input type="number" name="count" placeholder="Calories Count" value={this.state.calCount} onChange={(event) => this.onChangeCalCount(event)} />
                        </div>

                        <button type="button" className="btn" onClick={this.addMeal.bind(this)}>
                            Add Meal
          </button>
                    </div>
                </div>

                <div className="calTableMain" >
                    <div className="leftDiv" >
                        <div className="mealandcount">
                            <div className="mealTitleDiv">
                                <div className="tableHeaderTitleName">Meals Title </div>
                            </div>
                            <div className="countDiv">
                                <div className="tableHeaderTextCount">Count</div>
                            </div>
                        </div>
                    </div>
                    <div className="rightDiv">
                        <div className="labHeaderDiv">
                            <div className="tableHeaderTextEdit">Edit</div>
                        </div>
                        <div className='tableHeaderTextDelete' >
                            Delete
                </div>
                    </div>

                </div>
            </div>


        );
    }
}