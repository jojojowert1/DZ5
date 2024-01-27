


function getBooks(listBooks){
    var booksY = []
    var Books = []

    listBooks.forEach(book => {
        if (book.toLowerCase().includes('у')){
            booksY.push(book)
        }else {
            Books.push(book)
        }
    })
    console.log(booksY)
    console.log(Books)

}

getBooks(['Кларисса', 'Робинзон Крузо', 'Путешествия Гулливера', 'Сибилла'])

var tegs = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br' ]
var objTegs ={}
for (i = 0; i < tegs.length; i++){
    if (objTegs.hasOwnProperty(tegs[i])){
        objTegs[tegs[i]]  += 1
    }else {
        objTegs[tegs[i]] = 1

    }
}

console.log(objTegs)
console.log(Object.keys(objTegs).sort((n1, n2) => {
    return objTegs[n2] - objTegs[n1]
}))


function getFIO(surname, name, lastName) {
    const surNameResult = surname[0].toUpperCase() + surname.slice(1)
    const nameResult = name[0].toUpperCase()
    const lastNameResult = lastName[0].toUpperCase()

    const result = `${surNameResult} ${nameResult}. ${lastNameResult}.`
    console.log(result)
}

getFIO("cулайманов", "Эмир", "Алмасбекович")



var peoples = [
    {name: "John", birthday: "2.03.1990"},
    {name: "Bob", birthday: "15.05.2001"},
    {name: "Pieter", birthday: "20.01.1989"},
    {name: "Selena", birthday: "31.12.2009"}
]

peoples.forEach(i => console.log(`Пользователь ${i.name} родился ${i.birthday} данные с объекта получить должен ${i.name}` ))
