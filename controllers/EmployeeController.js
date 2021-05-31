const { response } = require('express')
const Employee = require('../models/Employee')


const index = (req, res, next) => {
    Employee.find()
    .then(response => {
        res.json({
            response
    })
})
.catch(error => {
    res.json({
        message: 'An error occurred!'
    })
})
}

const show = (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response => {
        res.json({
            response
        })

})
.catch(error => {
    res.json({
        message: 'An error Occured!'
    })

})
}

const store = (req, res, next) => {
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.phone,
        age: req.body.age
    })
    employee.save()
    .then(respone => {
        res.json({
            message: 'Employee Added in list Successfully!'
    })
})
    .catch(error =>{
        res.json({
            message: 'An error Occured!'

        })
    })

}
//update employee
const update =(req, res, next) => {
    let employeeID = req.body.employeeID

    let updatedData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.phone,
        age: req.body.age

    }
    Employee.findByIdAndUpdate(employeeID, {$set: updatedData})
    .then(() => {
        res.json({
            message: 'Employee updated successfully!'
        })
    })
        .catch(error => {
            res.json({
                message:'An error Occured'
            })
        })

    }

    //delete employee data
    const destroy = (req, res, next) => {
        let employeeID =req.body.employeeID
        Employee.findByIdAndRemove(employeeID)
        .then(() => {
            res.json({
                message: 'Employee deleted succefully!'
            })
        })
    
    .catch(error => {
        res.json({
            message:'An error Occured'
        })
    })

}
module.exports = {
    index, show, store, update, destroy
}

