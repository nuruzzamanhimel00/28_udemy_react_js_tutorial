const ExpenceForm = () =>{
    return (
        <div>
            <form className="row">
                <div className="form-group col-md-6">
                    <label for="exampleInputEmail1">Title</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" /> 
                </div>
                <div className="form-group col-md-6">
                    <label for="amount">Amount</label>
                    <input type="number" className="form-control" min='0.01' step="0.01" /> 
                </div>
                <div className="form-group col-md-6">
                    <label for="amount">Date</label>
                    <input type="date" className="form-control" min='2022-12-31' max="2025-12-31" /> 
                    <button type="submit" className="btn btn-primary mt-3">Add Exponce</button>
                </div>
                
                    
            </form>
        </div>
    );
}

export default ExpenceForm;