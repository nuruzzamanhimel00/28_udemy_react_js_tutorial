import React from "react";

const CourceGoalForm = () =>{

    return (
        <div className="card">
            <div className="card-body">
                <form>
                <div class="mb-3">
                    <label className="form-label">
                    <b>Cource Goal</b>
                    </label>
                    <input type="text" className="form-control" />
                </div>
                <button type="submit" class="button">Add Goal</button>
                </form>
            </div>
        </div>
    );
}

export default CourceGoalForm;