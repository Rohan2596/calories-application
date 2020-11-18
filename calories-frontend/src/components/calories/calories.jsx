import React from "react";
import '/home/admin1/Desktop/BackEndProjects/calories-application/calories-frontend/src/components/style.scss'
import MealService from '../../services/meal.service';
import Dialog from '@material-ui/core/Dialog';

export class Calories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mealtitle: '',
            calCount: '',
            meals: [],
            open: false,
            setOpen: false
        }
    }
    handleClickOpen = (item) => {
        this.setState({
            setOpen: true,
            open: true,
            mealtitle: item.title,
            calCount: item.caloriesCount,
        })

    };
    handleClose = () => {
        this.setState({
            setOpen: false
        })
    };
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
    componentDidMount() {
        this.getAllUserMeal();
    }
    getAllUserMeal() {
        MealService.getAllUserMeal().then((data) => {
            console.log(data);
            this.setState({ meals: data.data.data.meals })
            console.log(this.state.meals);

        }).catch((err) => {
            console.log(err);
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
            this.getAllUserMeal();

        }).catch((err) => {
            console.log(err);
        })
    }
    editMeal(mealId) {
        console.log(mealId);
    }
    deleteMeal(mealId) {
        console.log(mealId);
        MealService.deleteUserMeal(mealId).then((data) => {
            console.log(data);
            this.getAllUserMeal();
        }).catch((err) => {
            console.log(err);
        })
    }
    render() {

        var displayMeals = this.state.meals.map((item, i) => {
            return (


                <div className="calTableMain" key={i} >
                    <div className="leftDiv" >
                        <div className="mealandcount">
                            <div className="mealTitleDiv">
                                <div className="tableHeaderTitleName">{item.title}</div>
                            </div>
                            <div className="countDiv">
                                <div className="tableHeaderTextCount">{item.caloriesCount}</div>
                            </div>
                        </div>
                    </div>
                    <div className="rightDiv">
                        <div className="labHeaderDiv">
                            <div className="tableHeaderTextEdit" onClick={() => this.handleClickOpen(item)}>Edit</div>
                        </div>
                        <div className='tableHeaderTextDelete' onClick={() => this.deleteMeal(item._id)} >
                            Delete
                        </div>
                    </div>
                    <Dialog open={this.state.open} onClose={this.handleClose}>
                        <div className="base-container" >
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

                                <button type="button" className="btn" onClick={this.editMeal.bind(this)}>
                                    editMeal
</button>
                            </div>
                        </div>
                        </div>
                    </Dialog>
                </div>


            );
        })

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
                {displayMeals}
            </div>


        );
    }
}