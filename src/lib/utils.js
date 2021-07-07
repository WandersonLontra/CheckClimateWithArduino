module.exports = {
    date: function(timeStamp){
        const birthDay = new Date(timeStamp)

        const hour = birthDay.getHours(),
        minutes = birthDay.getMinutes()

        return {
            hour,
            minutes,
        }
    } 
}