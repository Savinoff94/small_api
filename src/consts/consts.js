const statuses = ['in_progress', 'completed']
const isStatusValid = (status) => {
    if(status && statuses.includes(status)) {
        return true
    }
    return false
}

module.exports = {
    statuses,
    isStatusValid
}