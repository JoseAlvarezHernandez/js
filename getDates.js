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
    let month = this.getMonth() + 1,
        year = this.getFullYear(),
        day = this.getDate(),
        hours = this.getHours(),
        minutes = this.getMinutes(),
        seconds = this.getSeconds();
    return (`${year}-${(month > 9 ? month : '0' + month)}-${(day > 9 ? day : '0' + day)} ${(hours > 9 ? hours : `0${hours}`)}:${(minutes > 9 ? minutes : `0${minutes}`)}:${(seconds > 9 ? seconds : `0${seconds}`)}`);
};
