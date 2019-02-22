function dataTypeCheck(type) {
    if (type === null) {
        console.log('Type : NULL')
        console.log('value: ' + type)
    }
    else if (typeof type === 'undefined') {
        console.log('Type : undefined')
        console.log('value: ' + type)
    }
    else if (typeof type === 'boolean') {
        console.log('Type : boolean')
        console.log('value: ' + type)
    }

    else if (typeof type === 'string' || type instanceof String) {
        console.log('Type : String')
        console.log('value: ' + type)
    }
    else if (typeof type === 'number' && isFinite(type)) {
        console.log('Type : Number')
        console.log('value: ' + type)
    }
    else if (type && typeof type === 'object' && type.constructor === Object) {
        console.log('Type : Object')
        console.log('value: ' + type)
    }
    else if (typeof (type) === 'object' && typeof (type[00]) !== 'object') {
        console.log("array");
        var array = [1, 2, 3, 4];
        var map = array.map((x, index) => {
            console.log(index);
            return x + index;
        }
        );
        console.log(map);
    }
    else if (typeof (type) === 'object' && typeof (type) === 'object') {
        console.log("Array of object");
        var array1 = [
            { id: 1, value: 10 },
            { id: 2, value: 20 },
            { id: 3, value: 30 }];

        var map1 = array1.map((obj) => {
            return { "id": obj };
        }
        );
        console.log(map1);
    }

    else if (Number.isNaN(type)) {
        console.log('Type : NaN')

    }
}
dataTypeCheck(null)
dataTypeCheck(undefined)
dataTypeCheck(true)
dataTypeCheck("somya")
dataTypeCheck(6193)

var array = [1, 2, 3, 4];
console.log(dataTypeCheck(array))

var b = [{ 'id': 1 }, { 'id': 2 }];
dataTypeCheck(b)

dataTypeCheck({ 'id': 1 })
dataTypeCheck(array - 1)

