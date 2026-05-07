export default function cleanSet(set, startString) {
    if (!startString) {
        return '';
    }
    if (typeof startString !== 'string') {
        return '';
    } else {
        let result = '';
        for (let element of set) {
            if (element.startsWith(startString)) {
                result += element.slice(startString.length) + '-';
            }
        }
        return result.slice(0, -1);
    }
}