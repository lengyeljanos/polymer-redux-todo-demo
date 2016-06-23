/**
 * Created by jlengyel on 2016.06.23..
 */
function compare(a,b) {
    if (a.taskName < b.taskName)
        return -1;
    if (a.taskName > b.taskName)
        return 1;
    return 0;
}