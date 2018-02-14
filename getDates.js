const getDates = (start, end) => {
    try {
        start = new Date(start);
        end = new Date(end);
        let diferrence = end.getDate() - start.getDate(), dates = [];
        for (i = 0; i <= diferrence; i++) {
            dates.push(start.toFormat());
            start.setDate(start.getDate() + 1);
        }
        return dates;
    } catch (error) {
        return null;
    }
}

Date.prototype.toFormat = () => {
    let year = this.getFullYear(),
        month = this.getMonth() + 1,
        day = this.getDate(),
        hours = this.getHours(),
        minutes = this.getMinutes() ,
        seconds = this.getSeconds();
    month = month > 9 ? month: `0${month}`;
    day = day > 9 ? day: `0${day}`;
    hours = hours > 9 ? hours: `0${hours}`;
    minutes = minutes > 9 ? minutes: `0${minutes}`;
    seconds = seconds > 9 ? seconds: `0${seconds}`;
    
    return (`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
};
