// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
function arrRec(startElement){
    let arr=[];
    if (startElement.children.length){
        for (const arrElement of startElement.children) {
            for (const arrElementKey of arrElement.classList) {
                arr.push(arrElementKey)
            }
            arrRec(arrElement)
        }
    }
    console.log(arr)
}
arrRec(document.body)