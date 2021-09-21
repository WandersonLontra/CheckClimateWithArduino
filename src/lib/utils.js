module.exports = {
    date: function(timeStamp){
        const setDate = new Date(timeStamp)

        const hour = setDate.getHours(),
        minutes = setDate.getMinutes()

        return {
            hour,
            minutes,
        }
    } 
}